import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContentSubmission, getAllContentSubmissions, getAllBlogPosts, getBlogPostBySlug } from "./db";
import { notifyOwner } from "./_core/notification";
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
        
        return { success: true };
      }),
    
    list: protectedProcedure.query(async () => {
      return await getAllContentSubmissions();
    }),
  }),
});

export type AppRouter = typeof appRouter;
