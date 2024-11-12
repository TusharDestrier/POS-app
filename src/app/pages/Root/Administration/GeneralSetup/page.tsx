import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import GeneralSetupTab from './components/GeneralSetupTab'
import { GeneralSetupSchema } from './schemas/GeneralSetup.schema'

import { Button } from '@/components/ui/button'

function GeneralSetupPage() {
  const formMethods = useForm({
    resolver: zodResolver(GeneralSetupSchema)
  })

  // Handle form submission
  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data) // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}
      >
        <GeneralSetupTab />
        <div className="h-[60px] flex justify-end items-center">
          <Button type="submit" className=" btn btn-primary">
            Submit All
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
export default GeneralSetupPage
