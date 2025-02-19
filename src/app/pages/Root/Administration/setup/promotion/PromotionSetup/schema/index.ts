import { z } from "zod";

export const promotionSetupSchema = z.object({
  promotionId: z.string().nonempty("Promotion ID is required"),
  promotionName: z.string().nonempty("Promotion Name is required"),
  details: z.string().nonempty("Details are required"),
  appliedOn: z.enum(["eachItem", "billValue"], {
    required_error: "Please select where the promotion is applied",
  }),
  promotionType: z.enum(
    ["freequantityBenefit", "quantityslabBenefit", "billvalueslabBenefit"],
    {
      required_error: "Please select a promotion type",
    }
  ),
  inactive: z.boolean().optional(),
  promotionParameters: z
    .object({
      // Paid for Condition
      paidForCondition: z.discriminatedUnion("condition", [
        z.object({
          condition: z.literal("buyAny"),
          quantity: z
            .preprocess(
              (value) => (value === undefined || value === "" ? undefined : Number(value)),
              z.number().min(1, "Quantity must be greater than 0")
            )
            .optional(),
        }),
        z.object({
          condition: z.literal("buySpecificRatio"),
        }),
        z.object({
          condition: z.literal("buyAnyQuantity"),
        }),
      ]),

      // Buy Assortments
      buyAssortments: z
        .array(
          z.object({
            assortmentName: z.string().nonempty("Assortment Name is required"),
            unit: z
              .preprocess((value) => (value === "" ? null : value), z.number().nullable())
              .optional(),
          })
        )
        .optional(),

      // Benefit Type
      benefitType: z.discriminatedUnion("type", [
        z.object({
          type: z.literal("flatDiscount"),
        }),
        z.object({
          type: z.literal("paidSpecificUnit"),
          value: z
            .preprocess(
              (value) => (value === undefined || value === "" ? undefined : Number(value)),
              z.number().min(1, "Value must be greater than 0")
            )
            .optional(),
        }),
        z.object({
          type: z.literal("benefitSpecificUnit"),
          value: z
            .preprocess(
              (value) => (value === undefined || value === "" ? undefined : Number(value)),
              z.number().min(1, "Value must be greater than 0")
            )
            .optional(),
        }),
      ]),

      // Discount Types
      discountTypes: z.array(
        z
          .object({
            type: z.preprocess(
              (value) => (value === "" || value === undefined ? null : Number(value)),
              z.number().min(0, "Type must be a valid number").nullable()
            ),
            discountOn: z.string().nonempty("Discount On is required"),
            condition: z.string().nonempty("Condition is required"),
            comparison: z.enum(["lesser", "greater", "inBetween"], {
              required_error: "Comparison type is required",
            }),
            from: z.preprocess(
              (value) => (value === "" || value === undefined ? null : Number(value)),
              z.number().nullable()
            ),
            to: z.preprocess(
              (value) => (value === "" || value === undefined ? null : Number(value)),
              z.number().nullable()
            ),
          })
      ),
    })
    .superRefine((promotionParameters, ctx) => {
      const { paidForCondition, buyAssortments, discountTypes } = promotionParameters;

      // Validate unit only for "buySpecificRatio"
      if (paidForCondition.condition === "buySpecificRatio") {
        buyAssortments?.forEach((assortment, index) => {
          if (assortment.unit === undefined || assortment.unit === null || assortment.unit <= 0) {
            ctx.addIssue({
              code: "custom",
              path: ["buyAssortments", index, "unit"],
              message: "Unit is required and must be greater than 0.",
            });
          }
        });
      }

      // Ensure completeness of discountTypes
      discountTypes.forEach((discount, index) => {
        if (discount.comparison === "inBetween") {
          if (discount.from === null || discount.to === null || discount.from >= discount.to) {
            ctx.addIssue({
              code: "custom",
              path: ["discountTypes", index, "from"],
              message: "For 'In Between', 'From' must be a number and less than 'To'.",
            });
          }
        }
      });
    }),
});
