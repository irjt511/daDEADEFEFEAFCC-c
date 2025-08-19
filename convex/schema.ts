import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
  }),
  
  skills: defineTable({
    name: v.string(),
    category: v.string(),
    level: v.number(), // 1-100
    icon: v.optional(v.string()),
  }),
  
  experiences: defineTable({
    company: v.string(),
    position: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    description: v.string(),
    technologies: v.array(v.string()),
    current: v.boolean(),
  }),
  
  profile: defineTable({
    name: v.string(),
    title: v.string(),
    bio: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    location: v.string(),
    avatarUrl: v.optional(v.string()),
    resumeUrl: v.optional(v.string()),
    socialLinks: v.object({
      tiktok: v.optional(v.string()),
      instagram: v.optional(v.string()),
      github: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      twitter: v.optional(v.string()),
      website: v.optional(v.string()),
    }),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
