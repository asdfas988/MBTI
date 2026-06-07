import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseEntry = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: baseEntry.extend({
    readingMinutes: z.number().default(8),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/concepts" }),
  schema: baseEntry.extend({
    group: z.string(),
    plainDefinition: z.string(),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/topics" }),
  schema: baseEntry.extend({
    level: z.string().default("入门到进阶"),
  }),
});

const mbti = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/mbti" }),
  schema: baseEntry.extend({
    typeCode: z.string(),
    functions: z.array(z.string()),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cases" }),
  schema: baseEntry.extend({
    source: z.string().optional(),
  }),
});

export const collections = { articles, concepts, topics, mbti, cases };
