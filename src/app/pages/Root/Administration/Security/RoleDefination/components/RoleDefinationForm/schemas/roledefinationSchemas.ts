import * as z from "zod";

export const roledefinationSchemas = z.object({
  roleName: z
    .string(),
    
  defineProfile: z
    .string()
    .min(1, { message: "Designation Name is required" })
    .max(50, { message: "Designation Name should not exceed 50 characters" }),

    details: z
    .string()
});
