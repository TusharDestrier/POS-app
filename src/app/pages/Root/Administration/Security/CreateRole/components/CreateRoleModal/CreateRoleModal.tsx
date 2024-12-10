
import { useCreateRoleStore } from '../../store/useCreateRoleStore'

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

function CreateRoleModal() {
  const mode = useCreateRoleStore((state) => state.mode)
  const isOpen = useCreateRoleStore((state) => state.isOpen)
  const close = useCreateRoleStore((state) => state.close)
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
            <Input id="code" value=""  placeholder='Code'/>
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="roleName">Role Name</Label>
            <Input id="roleName" value=""  placeholder='Role Name'/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateRoleModal
