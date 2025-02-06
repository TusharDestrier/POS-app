// import React from 'react'

//import { useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AssortmentToExclude from './components/PromotionAssortmentToExclude'
import AssortmentToInclude from './components/PromotionAssortmentToInclude'
import { PromotionassortmentDataFormatter } from '../../helper/promotionassortmentDataFormatter'
import { useCreatePromotionAssortmentData } from '../../hooks_api/useCreatePromotionAssortmentData'
import { usePromotionAssortmentManagementStore } from '../../store/usePromotionAssortmentManagementStore'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


export const PromotionFormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
})

function PromotionAssortmentManagementForm() {
const {createAssortment,isPending} = useCreatePromotionAssortmentData()
const closeModal=usePromotionAssortmentManagementStore(state=>state.close);
    const form = useForm<z.infer<typeof PromotionFormSchema>>({
        resolver: zodResolver(PromotionFormSchema),
        defaultValues: {
          assortmentName: "",
          description:""
        },
      })

      async function onSubmit(values: z.infer<typeof PromotionFormSchema>) {
         try {
           const sendedData = PromotionassortmentDataFormatter(values)
           console.log(sendedData)
     
           await createAssortment(sendedData)
           closeModal()
           // clearId()
         } catch (err: unknown) {
           if (err instanceof Error) {
             throw new Error(err.message)
           }
         }
       }

  return (
    <div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="assortmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assortment Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
        <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Assortment to Include</TabsTrigger>
        <TabsTrigger value="password">Assortment to Exclude</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
       <AssortmentToInclude/>
      </TabsContent>
      <TabsContent value="password">
     <AssortmentToExclude/>
      </TabsContent>
    </Tabs>
        </div>
        <div className='float-end'>
        <Button type="submit" disabled={isPending}>
              {isPending ? 'Submiting' : 'Submit'}
            </Button>
        </div>
      </form>
    </Form>
    </div>
  )
}

export default PromotionAssortmentManagementForm
