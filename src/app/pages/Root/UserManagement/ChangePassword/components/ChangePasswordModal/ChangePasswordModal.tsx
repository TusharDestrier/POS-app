import { useChangePasswordStore } from '../../store/useChangePasswordStore'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function ChangePasswordModal() {
  const mode = useChangePasswordStore((state) => state.mode)
  const isOpen = useChangePasswordStore((state) => state.isOpen)
  const close = useChangePasswordStore((state) => state.close)
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Change Password</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="space-y-1 mb-4">
            <Label htmlFor="userName" className="">
              User Name
            </Label>
            <Input id="userName" value="" placeholder='User Name' />
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="oldPassword">Old Password</Label>
            <Input id="oldPassword" value="" placeholder='Old Password' />
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" value="" placeholder='new Password' />
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" value="" placeholder='Confirm Password' />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordModal
