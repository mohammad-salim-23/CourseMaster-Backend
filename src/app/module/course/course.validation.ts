import { z } from 'zod';

export const lessonValidation = z.object({
title: z.string(),
videoUrl: z.string(),
isFreePreview: z.boolean().optional()
});



export const batchValidation = z.object({
name: z.string(),
startDate: z.string().or(z.date())
});

export const createCourseValidation = z.object({
title: z.string(),
description: z.string(),
instructor: z.string(),
price: z.number(),
category: z.string().optional(),
tags: z.array(z.string()).optional(),

batches: z.array(batchValidation).optional(),
});

export const updateCourseValidation = createCourseValidation.partial();