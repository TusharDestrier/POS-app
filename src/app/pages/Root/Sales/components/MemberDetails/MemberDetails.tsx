//import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  //CardDescription,
  //CardFooter,
  // CardHeader,
  // CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import LoyaltyPoint from '../LoyaltyPoint'
import CouponDetails from '../CouponDetails'

function MemberDetails() {
  return (
    <div>
      MemberDetails
      <Card className="w-[400px]">
        {/* <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader> */}
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row space-y-1.5 mt-3">
                <Label className="m-3" htmlFor="framework">
                  MemberShip Type
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row space-y-1.5">
                <Label className="m-3" htmlFor="framework">
                  MemberShip ID
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row space-y-1.5">
                <Label htmlFor="validFrom" typeof="date" className="m-3">
                  Valid From
                </Label>
                <Input id="validFrom" placeholder="validFrom" type="date" />
                <Label htmlFor="validTo" className="m-3">
                  Valid To
                </Label>
                <Input id="validTO" placeholder="validTo" type="date" />
              </div>
              <div className="flex flex-row space-y-1.5">
                <Label htmlFor="name" className="m-3">
                  Inactive
                </Label>
                <Input id="name" placeholder="inactive" />
              </div>
            </div>
          </form>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter> */}
      </Card>
      <br />
      <LoyaltyPoint />
      <br />
      <h1 className="font-bold">Coupon Details</h1>
      <CouponDetails />
    </div>
  )
}

export default MemberDetails
