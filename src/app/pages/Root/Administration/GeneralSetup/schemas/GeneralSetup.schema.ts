import { z } from 'zod';

import { GeneralSchema } from './General.schema';
import { POSSchema } from './POSBill.schema';


// Define combined schema
export const GeneralSetupSchema = z.object({     
    GeneralSchema:GeneralSchema,
    POSBill:POSSchema,
});
