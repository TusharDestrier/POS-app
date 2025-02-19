//import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

//import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

export function LoyaltyPoint() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Loyalty Points</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Earned</Label>
              <Input id="earned" placeholder="Earned Points" disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Redeemed</Label>
              <Input id="redeemed" placeholder="Redeemed" disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Balance</Label>
              <Input id="balance" placeholder="Balance" disabled />
            </div>
          </div>
        </form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
