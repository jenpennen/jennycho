import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      label: z.string().optional(),
      publishDate: z.coerce.date(),
      image: z.string().optional(),
      img_alt: z.string().optional(),
      org: z.string().optional(),
      role: z.string().optional(),
      timeline: z.string().optional(),
    }),
  }),
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      label: z.string().optional(),
      author: z.string().optional(),
      publishDate: z.coerce.date(),
      image: z.string().optional(),
      img_alt: z.string().optional(),
      org: z.string().optional(),
      role: z.string().optional(),
      timeline: z.string().optional(),
    }),
  }),
};
