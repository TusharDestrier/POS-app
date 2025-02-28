import { z } from 'zod'

export const promotionSetupSchema = z.object({
  promotionId: z.string().nonempty('Promotion ID is required'),
  promotionName: z.string().nonempty('Promotion Name is required'),
  details: z.string().nonempty('Details are required'),
  appliedOn: z.enum(['E', 'B'], {
    required_error: 'Please select where the promotion is applied',
  }),
  promotionType: z.enum(['F', 'Q', 'B'], {
    required_error: 'Please select a promotion type',
  }),
  inactive: z.boolean().optional(),

  promotionParameters: z.object({
    // Paid for Condition
    paidForCondition: z.discriminatedUnion('condition', [
      z.object({
        condition: z.literal('A'),
        quantity: z
          .preprocess(
            (value) => (value === undefined || value === '' ? undefined : Number(value)),
            z.number().min(1, 'Quantity must be greater than 0')
          )
          .optional(),
      }),
      z.object({
        condition: z.literal('R'),
      }),
      z.object({
        condition: z.literal('Q'),
      }),
    ]),
    benefitType: z.object({
      type: z.enum(["F", "P", "B"]).default("F"),
      value: z.string().optional(),
      assortmentID: z.string().optional(),
      assortmentName: z.string().optional(),
    }),

    // Discount Types (Updated Schema)
    discountTypes: z.object({
      selectedDiscount: z.string().min(1, 'Please select a discount'),
      types: z.array(
        z.object({
          isSelected: z.boolean().default(false),
          type: z.string().optional(),
          discountOn: z.string().optional(),
          condition: z.string().optional(),
          comparison: z.string().optional(),
          from: z.string().optional(),
          to: z.string().optional(),
        })
      ),
    }),

    // Buy Assortments
    buyAssortments: z
      .array(
        z.object({
          assortmentID: z.string().min(1, 'Required'),
          assortmentName: z.string().min(1, 'Assortment Name is required'),
          unit: z.union([z.number().optional(), z.null(), z.string().optional()]),
        })
      )
      .default([]), // ✅ Ensure default value is an array
    objValue: z
      .array(
        z.object({
          promotionID: z.number().default(0),
          lineNum: z.number().optional(),
          fromValue: z.number().optional(),
          toValue: z.number().optional(),
        })
      )
      .optional(),
  }),
})
