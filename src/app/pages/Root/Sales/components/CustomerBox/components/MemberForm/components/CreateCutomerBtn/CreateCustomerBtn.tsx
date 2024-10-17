import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import CustomerCreate from '../../../../../CustomerCreate'

function CreateCustomerBtn() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-max mt-auto" type={'button'}>
          {'Create customer'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[700px] w-[700px]">
        <DialogHeader>
          <h2 className="text-xl font-semibold">Customer Creation </h2>
        </DialogHeader>
        <CustomerCreate />
      </DialogContent>
    </Dialog>
  )
}

export default CreateCustomerBtn
