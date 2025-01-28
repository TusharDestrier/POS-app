import { z } from 'zod'

export const StoreMasterHeadSchema = z.object({
  // Store Details
  storeCode: z.string().nonempty('Store Code is required'),
  storeName: z.string().nonempty('Store Name is required'),
  startDate: z.string().nonempty('Start Date is required'), // Date as a string
  closeDate: z.string().optional(), // Optional Date field
  storeSize: z.number().min(1, 'Store Size must be greater than 0'), // Numeric value

  // Warehouse Fields
  defaultWarehouseCode: z.string().nonempty('Default Warehouse Code is required'),
  defaultWarehouseName: z.string().nonempty('Default Warehouse Name is required'),
  defaultSaleWarehouseCode: z.string().nonempty('Default Sale Warehouse Code is required'), // Selectable
  defaultReturnWarehouseCode: z.string().nonempty('Default Sale Warehouse Code is required'), // Selectable
  GSTIN: z
    .string()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GSTIN'), // GSTIN validation
  GSTINDate: z.string().nonempty('GSTIN Date is required'), // Date as a string
  // Date and State Fields
  stateCode: z.string().nonempty('State Code is required'), // Dropdown for state
  stateName: z.string().nonempty('State Name is required'),
  priceList: z.enum(['STANDARD', 'PREMIUM', 'DISCOUNTED']), // Dropdown options

  // Optional Factor
  factorIfAny: z.string().optional(), // Optional field

  // Store Type and Category
  storeTypeCode: z.enum(['OOWNED', 'FOWNED']), // Dropdown options
  storeTypeName: z.string().nonempty('Store Type Name is required'),
  storeCategoryCode: z.string().nonempty('Store Category Code is required'), // Dependent on Store Type
  storeCategoryName: z.string().nonempty('Store Category Name is required'),

  // Franchise Details
  franchiseCode: z.string().optional(), // Optional for organization-owned stores
  franchiseName: z.string().optional(),

  // Operation Type
  operationTypeCode: z.enum(['CONSIGNMENT', 'OUTANDOUT']),
  operationTypeName: z.string().nonempty('Operation Type Name is required'),

  // Boolean as "Y" or "N"
  isActive: z.enum(['Y', 'N']), // "Y" for active, "N" for inactive
  billToAddress: z.string().nonempty('Billing Address is required'),
  shipToAddress: z.string().nonempty('Shipping Address is required'),
  billToCity: z.string().nonempty('Billing City is required'),
  billToPostalCode: z
    .string()
    .regex(/^\d{5,6}$/, 'Invalid Postal Code')
    .nonempty('Billing Postal Code is required'),
  billToState: z.string().nonempty('Billing State is required'),
  shipToCity: z.string().nonempty('Shipping City is required'),
  shipToPostalCode: z
    .string()
    .regex(/^\d{5,6}$/, 'Invalid Postal Code')
    .nonempty('Shipping Postal Code is required'),
  shipToState: z.string().nonempty('Shipping State is required'),
  contactPerson: z.string().nonempty('Contact Person is required'),
  contactNumber: z
    .string()
    .regex(/^\d{10}$/, 'Invalid Contact Number')
    .nonempty('Contact Number is required'),
  emailId: z.string().email('Invalid Email Address').nonempty('Email Address is required'),

  // Sourcing Warehouse (dynamic rows)
  sourcingWarehouse: z
    .array(
      z.object({
        warehouseCode: z.string().nonempty('Warehouse is required'),
        transitDays: z
          .number()
          .min(1, 'Transit Days must be at least 1')
          .max(30, 'Transit Days cannot exceed 30'),
      })
    )
    .min(1, 'At least one warehouse is required'), // Ensure at least one row is present

  objPayMode: z
    .array(
      z.object({
        payMode: z.string().nonempty('Paymode is required'),
        ledgersCode: z.string().optional(),
        ledgersName: z.string().optional(),
        paymentCode: z.string().optional(),
        subLedgerCode: z.string().optional(),
        subLedgerName: z.string().optional(),
        crossStore: z.enum(['Y', 'N']).default('N').optional(), // Enforce 'Y' or 'N'
        discontinue: z.enum(['Y', 'N']).default('N').optional(), // Enforce 'Y' or 'N'
      })
    )
    .min(1, 'At least one payment mode is required'),

  objPettyCash: z.array(
    z.object({
      pettyCashName: z.string().nonempty('Petty Cash Head is required'), // Dropdown
      limit: z
        .number()
        .min(1, 'Limit must be greater than 0')
        .nonnegative('Limit cannot be negative'), // Numeric Input
      modeOfOperation: z.string().nonempty('Type of Transaction is required'), // Dropdown
      ledgerCode: z.string().nonempty('Ledger Code is required'), // Dropdown
      ledgerName: z.string().nonempty('Ledger Name is required'), // Auto-populated
      subLedgerCode: z.string().optional(), // Dependent on Ledger
      subLedgerName: z.string().optional(), // Auto-populated
      discontinued: z.enum(['Y', 'N']).default('N'), // Checkbox: Y or N
    })
  ),
  objSeries: z.array(
    z.object({
      transactionType: z.string().nonempty('Type of Transaction is required'),
      seriesName: z.string(),
      prefix: z.string(),
      noOfDigit: z.number(),
      suffix: z.string(),
      discontinued: z.enum(['Y', 'N']).default('N'),
    })
  ),
  objLedger: z.array(
    z.object({
      ledgerCode: z.string(),
      ledgerName: z.string(),
      subLedgerCode: z.string(),
      subLedgerName: z.string(),
      costCenterCode: z.string(),
      costCenterName: z.string(),
      discontinued: z.enum(['Y', 'N']).default('N'),
    })
  ),
})
