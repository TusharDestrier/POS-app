import Communication from '../CustomerForm/components/CommunicationTab'
import LoyaltyPoints from '../CustomerForm/components/LoyaltyPointsTab/LoyaltyPoints'
import Membership from '../CustomerForm/components/MemberShipTab'
import Personal from '../CustomerForm/components/PersonalTab'

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

function CustomerMasterTab() {
  return (
    <Tabs defaultValue="personal" className="mt-3">
      <TabsList className="mb-4  flex border-none">
        <TabsTrigger className="flex-1" value="personal">
          Personal
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="communication">
          Communication
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="membership">
          Membership
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="purchaseHistory">
          Purchase History
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="loyaltyPoints">
          Loyalty Points
        </TabsTrigger>
      </TabsList>
      {/* Perspnal Tab */}
      <TabsContent value="personal">
        <Personal />
      </TabsContent>
      {/* Communication Tab */}
      <TabsContent value="communication">
        <Communication />
      </TabsContent>
      {/* Membership Tab */}
      <TabsContent value="membership">
        <Membership />
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
        <LoyaltyPoints />
      </TabsContent>
    </Tabs>
  )
}
export default CustomerMasterTab
