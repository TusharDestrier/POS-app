import { z } from 'zod'

export const promotionSetupSchema = z.object({
  promotionId: z.string().nonempty('Promotion ID is required'),
  promotionName: z.string().nonempty('Promotion Name is required'),
  details: z.string().nonempty('Details are required'),
  appliedOn: z.enum(['eachItem', 'billValue'], {
    required_error: 'Please select where the promotion is applied',
  }),
  promotionType: z.enum(['freequantityBenefit', 'quantityslabBenefit', 'billvalueslabBenefit'], {
    required_error: 'Please select a promotion type',
  }),
  inactive: z.boolean().optional(),

  promotionParameters: z.object({
    // Paid for Condition
    paidForCondition: z.discriminatedUnion('condition', [
      z.object({
        condition: z.literal('buyAny'),
        quantity: z
          .preprocess(
            (value) => (value === undefined || value === '' ? undefined : Number(value)),
            z.number().min(1, 'Quantity must be greater than 0')
          )
          .optional(),
      }),
      z.object({
        condition: z.literal('buySpecificRatio'),
      }),
      z.object({
        condition: z.literal('buyAnyQuantity'),
      }),
    ]),

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
    buyAssortments: z.array(
      z.object({
        assortmentID: z.string(), // ✅ Add this
        assortmentName: z.string().nonempty('Assortment Name is required'),
        unit: z
          .preprocess((value) => (value === '' ? null : value), z.number().nullable())
          .optional(),
      })
    ),
    objValue: z.array(
      z.object({
        promotionID: z.number().default(0),
        lineNum: z.number(),
        fromValue: z.number().min(1, 'From Qty must be at least 1'),
        toValue: z.number().min(1, 'To Qty must be at least 1'),
      })
    ),
  }),
})
