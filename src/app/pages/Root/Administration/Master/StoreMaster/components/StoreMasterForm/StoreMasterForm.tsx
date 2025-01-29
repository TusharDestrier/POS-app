import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
//import { useEffect } from 'react'

//import { StoreMasterFormatter } from '../../helper/StoreMasterFormatter'
import { StoreMasterFormatter } from '../../helper/StoreMasterFormatter'
import { useCreateStoreMaster } from '../../hooks_api/useCreateStoreMaster'
import { useStoreMasterById } from '../../hooks_api/useFetchStoreMasterById'
import { StoreMasterHeadSchema } from '../../schemas/StoreMasterHeadSchema'
import useStoreMasterHead from '../../store/useStoreMasterHead'
import StoreMasterTab from '../StoreMasterTab'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'


function StoreMasterForm() {
  const { isPending, error,createStoremaster } = useCreateStoreMaster()
  const closeModal = useStoreMasterHead((state) => state.close)
  // const { storeMaster, isLoading } = useStoreMasterById(Number() || null)
  const { isLoading } = useStoreMasterById(Number() || null)
  const formMethods = useForm({
    resolver: zodResolver(StoreMasterHeadSchema),
    defaultValues: {
      storeCode: 'SC001', // Example Store Code
      storeName: 'Test Store', // Example Store Name
      startDate: new Date().toISOString(), // Current Date in ISO format
      closeDate: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString(), // 30 days from now
      storeSize: 1000, // Example Store Size
      defaultWarehouseCode: 'WH001', // Example Default Warehouse Code
      defaultWarehouseName: 'Main Warehouse', // Example Default Warehouse Name
      defaultSaleWarehouseCode: 'WH002', // Example Sale Warehouse Code
      defaultReturnWarehouseCode: 'WH002', // Example Sale Warehouse Code
      GSTIN: '29ABCDE1234F2Z5', // Example GSTIN
      GSTINDate: new Date().toISOString(), // Example GSTIN
      stateCode: 'WB', // Example State Code
      stateName: 'West Bengal', // Example State Name
      priceList: '', // Example Price List
      factorIfAny: '1.5', // Example Factor
      storeTypeCode: 'OOWNED', // Example Store Type Code
      storeTypeName: 'Organization Owned', // Example Store Type Name
      storeCategoryCode: 'COCO', // Example Store Category Code
      storeCategoryName: 'Company Owned Company Operated', // Example Store Category Name
      franchiseCode: 'F001', // Example Franchise Code
      franchiseName: 'Franchise 1', // Example Franchise Name
      operationTypeCode: 'CONSIGNMENT', // Example Operation Type Code
      operationTypeName: 'Consignment Basis', // Example Operation Type Name
      isActive: 'Y', // Default to "Active"
      billToAddress: '123 Main Street, City Center', // Default Billing Address
      shipToAddress: '456 Elm Street, Industrial Area', // Default Shipping Address
      billToCity: 'kolkata', // Default City for Bill To
      billToPostalCode: '700001', // Default Postal Code for Bill To
      billToState: 'WB', // Default State for Bill To
      shipToCity: 'mumbai', // Default City for Ship To
      shipToPostalCode: '400001', // Default Postal Code for Ship To
      shipToState: 'MH', // Default State for Ship To
      contactPerson: 'John Doe', // Default Contact Person
      contactNumber: '9876543210', // Default Contact Number
      emailId: 'johndoe@example.com', // Default Email ID
      sourcingWarehouse: [
        {
          warehouseCode: 'WH001', // Default Warehouse Code
          transitDays: 5, // Default Transit Days
        },
      ],

      objPayMode: [
        {
          payMode: '',
          ledgersName: '',
          ledgersCode: '',
          paymentCode: '',
          subLedgerCode: '',
          subLedgerName: '',
          crossStore: 'N',
          discontinue: 'N',
        },
      ],

      objPettyCash: [
        {
          pettyCashName: '',
          pettyCashCode: '',
          limit: 0,
          modeOfOperation: '', // Initially empty, dropdown selection required
          ledgerCode: '',
          ledgerName: '',
          subLedgerCode: '',
          subLedgerName: '',
          discontinued: 'N', // Default to "N" (not discontinued)
        },
      ],
      objSeries: [
        {
          transactionType: 'SALE',
          seriesName: 'Series 1',
          prefix: 'PRX',
          noOfDigit: 6,
          suffix: 'SFX',
          discontinued: 'N',
        },
      ],
      objLedger: [
        {
          ledgerCode: 'LEDGER001',
          ledgerName: 'General Ledger',
          subLedgerCode: 'SUBLEDGER001',
          subLedgerName: 'General Sub-Ledger',
          costCenterCode: 'COST001',
          costCenterName: 'Main Cost Center',
        },
      ],
    },
  })

  const onSubmit = formMethods.handleSubmit(
    async (data) => {
      // const transformData = StoreMasterFormatter(data,1)
      try {
        console.log(data)

        //  await createStoremaster(transformData)
        // closeModal()
      } catch (err: unknown) {
        if(err instanceof Error){
          throw new Error(err.message)
        }
      }
    },
    
  )

  if (isLoading) {
    return <GlobalViewerLoader />
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <div className="border p-4 border-black border-solid h-[650px] overflow-y-auto">
          <StoreMasterTab />
        </div>

        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-end">{error.message}</p>}
      </form>
    </FormProvider>
  )
}

export default StoreMasterForm
