import CommunicationTab from './components/CommunicationTab'
import LoyaltyPointsTab from './components/LoyaltyPointsTab'
import MemberShipTab from './components/MemberShipTab'
import PersonalTab from './components/PersonalTab/PersonalTab'
import { useCustomerMaster } from '../../store/useCustomerMaster'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function CustomerForm() {
  const mode = useCustomerMaster((state) => state.mode)
  return (
    <Tabs defaultValue="personal" className="mt-2">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="communication">Communication</TabsTrigger>
        <TabsTrigger value="membership">Membership</TabsTrigger>
        {mode !== 'Create' && (
          <>
            <TabsTrigger value="purchaseHistory">Purchase History</TabsTrigger>
            <TabsTrigger value="loyaltyPoints">Loyalty Points</TabsTrigger>
          </>
        )}
      </TabsList>

      {/* Personal Tab */}
      <TabsContent value="personal">
        <PersonalTab />
      </TabsContent>

      {/* Communication Tab */}
      <TabsContent value="communication">
        <CommunicationTab />
      </TabsContent>

      {/* Membership Tab */}
      <TabsContent value="membership">
        <MemberShipTab />
      </TabsContent>

      {/* Purchase History Tab */}
      <TabsContent value="purchaseHistory">
        <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
            <CardDescription>View your recent purchases.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Placeholder text - you might want to replace this with an actual list or table of purchases */}
            <div className="text-sm text-gray-600">Recent purchases will be displayed here.</div>
          </CardContent>
          <CardFooter>
            <Button>View Full History</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      {/* Loyalty Points Tab */}
      <TabsContent value="loyaltyPoints">
        <LoyaltyPointsTab />
      </TabsContent>
    </Tabs>
  )
}

export default CustomerForm
