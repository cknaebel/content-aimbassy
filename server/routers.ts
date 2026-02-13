import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContentSubmission, getAllContentSubmissions, getAllBlogPosts, getBlogPostBySlug } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendAdminNotification, sendSubmitterConfirmation } from "./email";
import { sendContactFormNotification, sendContactFormConfirmation } from "./contactForms";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Content submission router
  blog: router({
    list: publicProcedure.query(async () => {
      return await getAllBlogPosts();
    }),
    
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getBlogPostBySlug(input.slug);
      }),
  }),

  contentSubmissions: router({
    submit: publicProcedure
      .input(z.object({
        contactName: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        company: z.string().optional(),
        contentType: z.enum(["video", "audio"]),
        contentGenres: z.array(z.string()).min(1, "At least one genre is required"),
        totalHours: z.number().positive("Total hours must be positive"),
        contentDescription: z.string().min(10, "Please provide a description"),
        // Video-specific fields
        hasHD1080p: z.enum(["yes", "no", "partial"]).optional(),
        hasMP4Format: z.enum(["yes", "no", "partial"]).optional(),
        hasWatermarks: z.enum(["yes", "no", "some"]).optional(),
        // Audio-specific fields
        audioFormat: z.string().optional(),
        hasTranscript: z.enum(["yes", "no"]).optional(),
        // Common fields
        rightsConfirmation: z.enum(["yes", "no"]),
        additionalNotes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { contentGenres, ...rest } = input;
        
        // Save to database
        await createContentSubmission({
          ...rest,
          contentGenres: JSON.stringify(contentGenres),
        });
        
        // Send email notifications
        try {
          // Send to admin
          await sendAdminNotification({
            ...input,
            contentGenres: JSON.stringify(contentGenres),
          });
          
          // Send confirmation to submitter
          await sendSubmitterConfirmation(input.contactName, input.email);
        } catch (error) {
          console.error('[Content Submission] Failed to send email notifications:', error);
          // Don't fail the submission if email fails
        }
        
        // Notify owner via Manus notification system
        await notifyOwner({
          title: `New ${input.contentType.toUpperCase()} Content Submission`,
          content: `New ${input.contentType} content submission from ${input.contactName} (${input.email}). Total hours: ${input.totalHours}. Genres: ${contentGenres.join(", ")}.`,
        });
        
        return { success: true };
      }),
    
    list: protectedProcedure.query(async () => {
      return await getAllContentSubmissions();
    }),
  }),

  // Contact form router
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        company: z.string().optional(),
        message: z.string().min(10, "Message must be at least 10 characters"),
        formType: z.enum(["ai-companies", "content-owners", "general"]),
      }))
      .mutation(async ({ input }) => {
        try {
          // Send notification to admin
          await sendContactFormNotification(input);
          
          // Send confirmation to submitter
          await sendContactFormConfirmation({
            name: input.name,
            email: input.email,
            formType: input.formType,
          });
          
          return { success: true };
        } catch (error) {
          console.error('[Contact Form] Failed to send emails:', error);
          throw new Error("Failed to send contact form. Please try again later.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
