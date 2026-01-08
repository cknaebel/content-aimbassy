import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Content submissions from potential content partners
 */
export const contentSubmissions = mysqlTable("content_submissions", {
  id: int("id").autoincrement().primaryKey(),
  
  // Contact Information
  contactName: varchar("contactName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  
  // Content Details
  contentType: mysqlEnum("contentType", ["video", "audio"]).notNull(),
  contentGenres: text("contentGenres").notNull(), // JSON array of genres
  totalHours: int("totalHours").notNull(),
  contentDescription: text("contentDescription").notNull(),
  
  // Technical Details - Video
  hasHD1080p: mysqlEnum("hasHD1080p", ["yes", "no", "partial"]),
  hasMP4Format: mysqlEnum("hasMP4Format", ["yes", "no", "partial"]),
  hasWatermarks: mysqlEnum("hasWatermarks", ["yes", "no", "some"]),
  
  // Technical Details - Audio
  audioFormat: varchar("audioFormat", { length: 50 }), // mp3, wav, etc.
  hasTranscript: mysqlEnum("hasTranscript", ["yes", "no"]),
  
  // Rights and Additional Info
  rightsConfirmation: mysqlEnum("rightsConfirmation", ["yes", "no"]).notNull(),
  additionalNotes: text("additionalNotes"),
  
  // Status tracking
  status: mysqlEnum("status", ["new", "reviewing", "contacted", "accepted", "rejected"]).default("new").notNull(),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContentSubmission = typeof contentSubmissions.$inferSelect;
export type InsertContentSubmission = typeof contentSubmissions.$inferInsert;

/**
 * Blog posts table for storing articles and insights
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  categories: text("categories").notNull(), // JSON array of categories
  publishedAt: timestamp("publishedAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;