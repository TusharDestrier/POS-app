import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import CustomerMasterTab from '../CustomerMasterTab/CustomerMasterTab'

import { Button } from '@/components/ui/button'
import { combinedSchema } from '@/schema/storeMaster.schema'





function CustomerForm() {
  //const mode = useCustomerMaster((state) => state.mode)

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
        city: 'pune',
        postalCode: '560001',
        state: 'Karnataka',
        cityTo: 'pune',
        postalCodeTo: '560001',
        stateTo: 'Karnataka',
        contactPerson: 'John Doe',
        contactNo: '1234567890',
        alcontactNo: '0987654321',
        emailId: 'john.doe@example.com',
        shipToAddress: '456 Ship St, Demo City',
        sourcingWH: [
          {
            warehouse: '',
            transitDays: '',
          },
        ],
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
            pettycahHead: '',
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

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data) // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}
      >
        <CustomerMasterTab/>

        {/* Submit Button for entire form */}
        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className=" btn btn-primary">
            Submit All
          </Button>
        </div>
      </form>
    </FormProvider>
    // <Tabs defaultValue="personal" className="mt-2">
    //   <TabsList className="grid w-full grid-cols-5">
    //     <TabsTrigger value="personal">Personal</TabsTrigger>
    //     <TabsTrigger value="communication">Communication</TabsTrigger>
    //     <TabsTrigger value="membership">Membership</TabsTrigger>
    //     {mode !== 'Create' && (
    //       <>
    //         <TabsTrigger value="purchaseHistory">Purchase History</TabsTrigger>
    //         <TabsTrigger value="loyaltyPoints">Loyalty Points</TabsTrigger>
    //       </>
    //     )}
    //   </TabsList>

    //   {/* Personal Tab */}
    //   <TabsContent value="personal">
    //     <PersonalTab />
    //   </TabsContent>

    //   {/* Communication Tab */}
    //   <TabsContent value="communication">
    //     <CommunicationTab />
    //   </TabsContent>

    //   {/* Membership Tab */}
    //   <TabsContent value="membership">
    //     <MemberShipTab />
    //   </TabsContent>

    //   {/* Purchase History Tab */}
    //   <TabsContent value="purchaseHistory">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Purchase History</CardTitle>
    //         <CardDescription>View your recent purchases.</CardDescription>
    //       </CardHeader>
    //       <CardContent className="space-y-2">
    //         {/* Placeholder text - you might want to replace this with an actual list or table of purchases */}
    //         <div className="text-sm text-gray-600">Recent purchases will be displayed here.</div>
    //       </CardContent>
    //       <CardFooter>
    //         <Button>View Full History</Button>
    //       </CardFooter>
    //     </Card>
    //   </TabsContent>

    //   {/* Loyalty Points Tab */}
    //   <TabsContent value="loyaltyPoints">
    //     <LoyaltyPointsTab />
    //   </TabsContent>
    // </Tabs>
  )
}

export default CustomerForm
