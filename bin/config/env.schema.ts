import { z } from 'zod';

export const envSchema = z.object({
    PORT: z.string().min(4).optional(),
    NODE_ENV: z.enum(['development', 'production'])
});
