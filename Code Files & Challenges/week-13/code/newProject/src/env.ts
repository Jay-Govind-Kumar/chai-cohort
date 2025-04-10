import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  // Add other environment variables here
});

function createZod(env: NodeJS.ProcessEnv) {
  const validationResult = envSchema.safeParse(env);
  if (!validationResult.success)
    throw new Error(validationResult.error.message);
  return validationResult.data;
}

export const env = createZod(process.env);
