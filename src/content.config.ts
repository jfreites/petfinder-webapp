import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

// DELETE THIS LATER TO FETCH FROM POCKETBASE (STATICALLY)
const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			image: image(),
			imageAlt: z.string(),
			excerpt: z.string().optional(),
			publishDate: z.coerce.date().default(new Date(2014, 0, 1)),
		}),
});

export const collections = { blog };