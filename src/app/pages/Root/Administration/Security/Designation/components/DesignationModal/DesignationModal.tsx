import { useDesignationStore } from '../../store/userDesignation'

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

function DesignationModal() {
  const mode = useDesignationStore((state) => state.mode)
  const isOpen = useDesignationStore((state) => state.isOpen)
  const close = useDesignationStore((state) => state.close)
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Designation Master</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="space-y-1 mb-4">
            <Label htmlFor="designationCode" className="">
            Designation Code
            </Label>
            <Input id="designationCode" value="" placeholder='Designation Code'/>
          </div>
          <div className="space-y-1 mb-4">
            <Label htmlFor="designationName">Designation Name</Label>
            <Input id="designationName" value="" placeholder='Designation Name' />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DesignationModal
