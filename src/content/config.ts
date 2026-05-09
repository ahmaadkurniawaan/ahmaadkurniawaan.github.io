import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Healthcare', 'Education', 'E-Commerce', 'Corporate']),
    image: z.string(),
    link: z.string(),
    technologies: z.array(z.string()).optional(),
    year: z.number().optional(),
  }),
});

const experiences = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      position: z.string(),
      company: z.string(),
      period: z.string(),
      location: z.string(),
      logo: z.string().optional(),
      current: z.boolean().default(false),
      description: z.string().optional(),
    })
  ),
});

const skills = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      category: z.enum(['programming', 'management', 'design', 'ai']),
      icon: z.string(),
      description: z.string().optional(),
      proficiency: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    })
  ),
});

const certifications = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      issuer: z.string(),
      date: z.string().optional(),
      verificationLink: z.string().optional(),
      credentialId: z.string().optional(),
    })
  ),
});

export const collections = {
  projects,
  experiences,
  skills,
  certifications,
};
