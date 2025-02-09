import { z } from "zod";

export const DiscountMasterSchema = z.object({
  name: z.string().nonempty("Name is required"),
  discountType: z.enum(["General", "Assortment"]),
  discountBase: z.enum(["Percentage", "Amount"]),
  percentage: z
    .preprocess((value) => (value === "" ? undefined : Number(value)), z.number().min(0, "Value must be non-negative").optional()),
  appliedOn: z.enum(["Bill Level", "Item Level", "Both"]),
  employeeDiscount: z.enum(["Y", "N"]),
  maximumDiscount: z
    .preprocess((value) => (value === "" ? undefined : Number(value)), z.number().min(0, "Value must be non-negative").optional()),
  minimumBilling: z
    .preprocess((value) => (value === "" ? undefined : Number(value)), z.number().min(0, "Value must be non-negative").optional()),
  otpRequired: z.boolean(),
  allowToChange: z.boolean(),
  inactive: z.boolean(),
  assortments: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .optional(),
});
