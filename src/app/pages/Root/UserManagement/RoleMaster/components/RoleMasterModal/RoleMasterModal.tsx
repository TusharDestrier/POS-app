import { useRoleMasterStore } from '../../store/useRoleMasterStore'

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

function RoleMasterModal() {
  const mode = useRoleMasterStore((state) => state.mode)
  const isOpen = useRoleMasterStore((state) => state.isOpen)
  const close = useRoleMasterStore((state) => state.close)
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Role Master</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="space-y-1 mb-4">
            <Label htmlFor="code" className="">
              Code
            </Label>
            <Input id="code" value="" />
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="roleName">Role Name</Label>
            <Input id="roleName" value="" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default RoleMasterModal
