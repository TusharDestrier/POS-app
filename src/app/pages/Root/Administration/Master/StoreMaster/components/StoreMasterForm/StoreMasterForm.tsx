import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
//import { useEffect } from 'react'

//import { StoreMasterFormatter } from '../../helper/StoreMasterFormatter'
import { useCreateStoreMaster } from '../../hooks_api/useCreateStoreMaster'
import { useStoreMasterById } from '../../hooks_api/useFetchStoreMasterById'
import useStoreMasterHead from '../../store/useStoreMasterHead'
import StoreMasterTab from '../StoreMasterTab'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
import { combinedSchema } from '@/schema/storeMaster.schema'

function StoreMasterForm() {
 // const { createStoremaster, isPending, error } = useCreateStoreMaster()
  const { isPending, error } = useCreateStoreMaster()
  const closeModal = useStoreMasterHead((state) => state.close)
 // const { storeMaster, isLoading } = useStoreMasterById(Number() || null)
  const { isLoading } = useStoreMasterById(Number() || null)

  const formMethods = useForm({
    resolver: zodResolver(combinedSchema),
    defaultValues: {
      storeDetail: {
        storeName: 'Demo Store',
        storeCode: 'DS123',
        startDate: '2024-01-01',
        closeDate: '2025-01-01',
        storeSize: '2000 sqft',
        default: 'Default Warehouse 1',
        defaultSale: 'Sale Warehouse A',
        defaultReturn: 'Return Warehouse B',
        GSTIN: '29ABCDE1234F2Z5',
        date: '2024-01-01',
        state: 'Karnataka',
        factor: '1.5',
        priceList: 'Standard Price List',
        factorIfAny: 'Special Factor',
        storeType: 'Retail',
        category: 'Electronics',
        franchise: 'Demo Franchise',
        operationType: 'Retail Operation',
        inActive: false,
      },
      logistics: {
        billToAddress: '123 Demo Street, Demo City',
        city: 'Pune',
        postalCode: '560001',
        state: 'Karnataka',
        cityTo: 'Pune',
        postalCodeTo: '560001',
        stateTo: 'Karnataka',
        contactPerson: 'John Doe',
        contactNo: '1234567890',
        alcontactNo: '0987654321',
        emailId: 'john.doe@example.com',
        shipToAddress: '456 Ship St, Demo City',
        sourcingWH: [{ warehouse: '', transitDays: '' }],
      },
      mop: {
        mopValues: [
          {
            payMode: '',
            ledgers: '',
            subLedger: '',
            paymentCode: '',
            crossStore: false,
            discontinue: false,
          },
        ],
      },
      pettyCash: {
        pettycashValues: [
          {
            pettycashHead: '',
            limit: '',
            typeofTransaction: '',
            ledger: '',
            subLedger: '',
            discontinue: false,
          },
        ],
      },
      documentSeries: {
        documentValues: [
          {
            transactionType: '',
            seriesname: '',
            prefix: '',
            noOfDigits: '',
            suffix: '',
            checkbox: false,
          },
        ],
      },
      ledgers: {
        ledgerValue: [
          {
            ledger: '',
            subLedger: '',
            costCentre: '',
            discontinue: false,
          },
        ],
      },
    },
  })

//   useEffect(() => {
//     if (storeMaster) {
//       formMethods.reset({
//         storeDetail: {
//           storeName: storeMaster?.storeName || '',
//           storeCode: storeMaster?.storeCode || '',
//           startDate: storeMaster?.startDate || '',
//           closeDate: storeMaster?.closeDate || '',
//           storeSize: storeMaster?.storeSize?.toString() || '',
//           default: storeMaster?.default || '',
//           defaultSale: storeMaster?.defaultSale || '',
//           defaultReturn: storeMaster?.defaultReturn || '',
//           GSTIN: storeMaster?.GSTIN || '',
//           date: storeMaster?.date || '',
//           state: storeMaster?.state || '',
//           factor: storeMaster?.factor || '',
//           priceList: storeMaster?.priceList || '',
//           factorIfAny: storeMaster?.factorIfAny || '',
//           storeType: storeMaster?.storeType || '',
//           category: storeMaster?.category || '',
//           franchise: storeMaster?.franchise || '',
//           operationType: storeMaster?.operationType || '',
//           inActive: storeMaster?.inActive === 'Y' ? true : false,
//         },
//         logistics: {
//           billToAddress: storeMaster?.billToAddress || '',
//           city: storeMaster?.city || '',
//           postalCode: storeMaster?.postalCode || '',
//           state: storeMaster?.state || '',
//           cityTo: storeMaster?.cityTo || '',
//           postalCodeTo: storeMaster?.postalCodeTo || '',
//           stateTo: storeMaster?.stateTo || '',
//           contactPerson: storeMaster?.contactPerson || '',
//           contactNo: storeMaster?.contactNo?.toString() || '',
//           alcontactNo: storeMaster?.alcontactNo?.toString() || '',
//           emailId: storeMaster?.emailId || '',
//           shipToAddress: storeMaster?.shipToAddress || '',
//           sourcingWH: storeMaster?.sourcingWH || [{ warehouse: '', transitDays: '' }],
//         },
//         mop: {
//           mopValues: storeMaster?.mopValues || [
//             {
//               payMode: '',
//               ledgers: '',
//               subLedger: '',
//               paymentCode: '',
//               crossStore: false,
//               discontinue: false,
//             },
//           ],
//         },
//         pettyCash: {
//           pettycashValues: storeMaster?.pettycashValues || [
//             {
//               pettycashHead: '',
//               limit: '',
//               typeofTransaction: '',
//               ledger: '',
//               subLedger: '',
//               discontinue: false,
//             },
//           ],
//         },
//         documentSeries: storeMaster?.documentValues || [
//           {
//             transactionType: '',
//             seriesname: '',
//             prefix: '',
//             noOfDigits: '',
//             suffix: '',
//             checkbox: false,
//           },
//         ],
//       })
//     }
//   }, [storeMaster])

  const onSubmit = formMethods.handleSubmit(
    async (data) => {
     // const transformData = StoreMasterFormatter(data, Number(storeMaster?.storeID))
      try {
      //  await createStoremaster(transformData)
        closeModal()
      } catch (err: any) {
        console.log(err)
      }
    },
    (errors) => {
      console.log('Validation Errors: ', errors)
    }
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
