import { z } from 'zod';

import { creditNoteSchema } from './CreditNote.schema';
import { generalSchema } from './General.schema';
import { goodsreceiptreturnSchema } from './GoodsRecepit.schema';
import { posBSillchema } from './POSBill.schema';
import { posOrderSchema } from './PosOrder.schema';


// Define combined schema
export const GeneralSetupSchema = z.object({     
    GeneralSchema:generalSchema,
    POSBill:posBSillchema,
    CreditNoteSchema: creditNoteSchema,
    GoodsRecRet:goodsreceiptreturnSchema,
    PsOrder: posOrderSchema
});
