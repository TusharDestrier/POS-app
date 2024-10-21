import { Button } from '@/components/ui/button'
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
      <form action="">
        <Card className="w-full">
          {/* <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader> */}
          <CardContent>
            <form className="  grid-cols-2 gap-2">
              <h1>MemberDetails</h1>
              <div className="grid w-full items-start gap-4">
                <div className="flex flex-col space-y-1.5 mt-3 float-start">
                  <Label htmlFor="framework">MemberShip Type</Label>
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">MemberShip ID</Label>
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="validFrom" typeof="date">
                    Valid From
                  </Label>
                  <Input id="validFrom" placeholder="validFrom" type="date" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="validTo" className="space-y-1.5">
                    Valid To
                  </Label>
                  <Input id="validTO" placeholder="validTo" type="date" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Inactive</Label>
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
        {/* <h1 className="font-bold">Coupon Details</h1> */}
        <CouponDetails />
        <Button className="lg:dark:hover:bg-white ... text-end" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default MemberDetails
