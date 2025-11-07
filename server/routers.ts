import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContentSubmission, getAllContentSubmissions, getAllBlogPosts, getBlogPostBySlug } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendEmail } from "./email";
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
        contentGenres: z.array(z.string()).min(1, "At least one genre is required"),
        totalHours: z.number().min(100, "Minimum 100 hours required"),
        contentDescription: z.string().min(10, "Please provide a description"),
        hasHD1080p: z.enum(["yes", "no", "partial"]),
        hasMP4Format: z.enum(["yes", "no", "partial"]),
        hasWatermarks: z.enum(["yes", "no", "some"]),
        rightsConfirmation: z.enum(["yes", "no"]),
        additionalNotes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { contentGenres, ...rest } = input;
        await createContentSubmission({
          ...rest,
          contentGenres: JSON.stringify(contentGenres),
        });
        
        // Notify owner about new submission
        await notifyOwner({
          title: "New Content Submission",
          content: `New content submission from ${input.contactName} (${input.email}). Total hours: ${input.totalHours}. Genres: ${contentGenres.join(", ")}.`,
        });
        
        // Send email notification
        try {
          const genresList = contentGenres.join(", ");
          await sendEmail({
            to: "info@content-aimbassy.com",
            subject: `New Content Submission: ${input.contactName}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #5a0e19;">New Content Submission Received</h2>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #5a0e19; margin-top: 0;">Contact Information</h3>
                  <p><strong>Name:</strong> ${input.contactName}</p>
                  <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
                  ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
                  ${input.company ? `<p><strong>Company:</strong> ${input.company}</p>` : ''}
                </div>

                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #5a0e19; margin-top: 0;">Content Details</h3>
                  <p><strong>Total Hours:</strong> ${input.totalHours}</p>
                  <p><strong>Content Genres:</strong> ${genresList}</p>
                  <p><strong>Description:</strong> ${input.contentDescription}</p>
                </div>

                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #5a0e19; margin-top: 0;">Technical Specifications</h3>
                  <p><strong>HD 1080p:</strong> ${input.hasHD1080p}</p>
                  <p><strong>MP4 Format:</strong> ${input.hasMP4Format}</p>
                  <p><strong>Watermarks:</strong> ${input.hasWatermarks}</p>
                  <p><strong>Rights Confirmation:</strong> ${input.rightsConfirmation}</p>
                </div>

                ${input.additionalNotes ? `
                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #5a0e19; margin-top: 0;">Additional Notes</h3>
                    <p>${input.additionalNotes}</p>
                  </div>
                ` : ''}

                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #d7b899; text-align: center; color: #666;">
                  <p>This notification was sent from Content Aimbassy</p>
                  <p><a href="https://content-aimbassy.com" style="color: #5a0e19;">content-aimbassy.com</a></p>
                </div>
              </div>
            `,
          });
        } catch (error) {
          console.error('[Content Submission] Failed to send email notification:', error);
          // Don't fail the submission if email fails
        }
        
        return { success: true };
      }),
    
    list: protectedProcedure.query(async () => {
      return await getAllContentSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
