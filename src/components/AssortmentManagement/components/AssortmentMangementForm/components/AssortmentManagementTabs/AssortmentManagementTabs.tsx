import { Search } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { useAssortmentManagementStore } from '../../../../store/useAssortmentManagementStore'
import AssortmentExcluded from '../AssortmentExcluded'
import AssortmentIncluded from '../AssortmentIncluded'
import AssortmentSelectionModal from '../AssortmentSelectionModal'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function AssortmentManagementTab() {
  const form = useFormContext()
  const openListModal = useAssortmentManagementStore((state) => state.toggleOpen2)
  const type = useAssortmentManagementStore((state) => state.type)
  return (
    <div className="mt-4">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="assortmentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assortment Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Assortment Name" {...field} className="h-9" />
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
                    <Input placeholder="Assortment Description" {...field} className="h-9" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col">
            {type === 'P' && (
              <FormField
                control={form.control}
                name="assortmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assortment Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="P">Paid For Assortment</SelectItem>
                        <SelectItem value="B">Benefit For Assortment</SelectItem>
                        <SelectItem value="C">Both</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex mt-auto flex-row items-center  space-x-3 ">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="-mt-3">
                    <FormLabel className="text-md">Is active</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      <div>
        <Tabs defaultValue="included" className="mt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="included">Assortment to Include</TabsTrigger>
            <TabsTrigger value="excluded">Assortment to Exclude</TabsTrigger>
          </TabsList>
          <div className="flex gap-6 w-full m-3">
            <div className="w-[300px]">
              <div className='flex gap-4'>
                <Input placeholder="Search"  className='h-9' />
                <Button size={'icon'} type='button' onClick={openListModal}><Search size={16}/></Button>
              </div>
            </div>
            <div className="ml-auto flex space-x-2 float-end mr-3 gap-4">
              <Button type="button">Show Items</Button>
              <Button type="button">Copy Assortment</Button>
            </div>
          </div>
          <TabsContent value="included">
            <AssortmentIncluded />
          </TabsContent>
          <TabsContent value="excluded">
            <AssortmentExcluded />
          </TabsContent>
        </Tabs>
      </div>
      <AssortmentSelectionModal />
    </div>
  )
}

export default AssortmentManagementTab
