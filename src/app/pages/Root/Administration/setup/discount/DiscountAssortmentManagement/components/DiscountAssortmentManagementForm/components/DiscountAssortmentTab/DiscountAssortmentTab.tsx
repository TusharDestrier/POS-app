import { useFormContext } from 'react-hook-form'

import DiscountAssortmentToExclude from '../DiscountAssortmentToExclude'
import DiscountAssortmentToInclude from '../DiscountAssortmentToInclude'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


import { useDiscountAssortmentManagementStore } from '../../../../store/useDiscountAssortmentManagementStore'

import DiscountAssortmentListModal from '../DiscountAssortmentListModal'

function DiscountAssortmentTab() {
  const form = useFormContext()

const openListModal=useDiscountAssortmentManagementStore(state=>state.toggleOpen2)

  return (
    <div className="">
      <div className="space-y-4">
        {' '}
        <FormField
          control={form.control}
          name="assortmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assortment Name</FormLabel>
              <FormControl>
                <Input placeholder="Assortment Name" {...field} />
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
                <Input placeholder="Assortment Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <Tabs defaultValue="included" className="mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="included">Assortment to Include</TabsTrigger>
            <TabsTrigger value="excluded">Assortment to Exclude</TabsTrigger>
          </TabsList>
          <div className="flex gap-6 w-full m-3">
            <div className="w-[300px]">
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select a Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Names</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="ml-auto flex space-x-2 float-end mr-3 gap-4">
              <Button type="button" onClick={openListModal}>Show Items</Button>
              <Button type="button">Copy Assortment</Button>
            </div>
          </div>
          <TabsContent value="included">
            <DiscountAssortmentToInclude />
          </TabsContent>
          <TabsContent value="excluded">
            <DiscountAssortmentToExclude />
          </TabsContent>
        </Tabs>
      </div>
      <DiscountAssortmentListModal/>

    </div>
  )
}

export default DiscountAssortmentTab
