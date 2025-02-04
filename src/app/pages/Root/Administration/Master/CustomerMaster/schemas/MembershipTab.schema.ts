import { z } from "zod";

export const MembershipTabSchema = z.object({
    customerCategory: z.string().nonempty({ message: 'Customer Category is required.' }),
    membershipCategory: z.string().nonempty({ message: 'Membership Category is required.' }),
    membershipNo: z.string().optional(),
    validTill: z.coerce
    .date()
    .min(new Date(), { message: "Membership Validity cannot be less than the current date." })
  
  })