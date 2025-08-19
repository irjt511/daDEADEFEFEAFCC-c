import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Profile queries and mutations
export const getProfile = query({
  args: {},
  handler: async (ctx) => {
    const profile = await ctx.db.query("profile").first();
    return profile;
  },
});

export const createProfile = mutation({
  args: {
    name: v.string(),
    title: v.string(),
    bio: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    location: v.string(),
    socialLinks: v.object({
      tiktok: v.optional(v.string()),
      instagram: v.optional(v.string()),
      github: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      twitter: v.optional(v.string()),
      website: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("profile", args);
  },
});

// Projects queries and mutations
export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").collect();
  },
});

export const getFeaturedProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("desc")
      .collect();
  },
});

export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    projectUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("projects", args);
  },
});

// Skills queries and mutations
export const getSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("skills")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
  },
});

export const createSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    level: v.number(),
    icon: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("skills", args);
  },
});

// Experience queries and mutations
export const getExperiences = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("experiences").order("desc").collect();
  },
});

export const createExperience = mutation({
  args: {
    company: v.string(),
    position: v.string(),
    startDate: v.string(),
    endDate: v.optional(v.string()),
    description: v.string(),
    technologies: v.array(v.string()),
    current: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("experiences", args);
  },
});
