import { useFieldArray, useFormContext } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function PromotionStoreSelectionTable() {
    const { control, register } = useFormContext();
    const { fields, append, remove } = useFieldArray({
      control,
      name: 'selectedPromotionStores',
    });
  
    const addRow = () => {
      append({ name: '', fromDate: '', toDate: '', allocationType: 'normal', deallocate: false });
    };
  
    return (
      <div className="p-4 border rounded shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="font-bold">Select Store</TableCell>
              <TableCell className="font-bold">Allocation Type</TableCell>
              <TableCell className="font-bold">From Date</TableCell>
              <TableCell className="font-bold">To Date</TableCell>
              <TableCell className="font-bold">Deallocate</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell>
                  <input
                    {...register(`selectedPromotionStores.${index}.name`)}
                    placeholder="Enter Store Name"
                    className="border rounded px-2 py-1 w-full"
                  />
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-[180px] border rounded">
                      <SelectValue placeholder="Select Allocation Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Allocation Types</SelectLabel>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="happy-hour">Happy Hour</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <input
                    type="date"
                    {...register(`selectedPromotionStores.${index}.fromDate`)}
                    className="border rounded px-2 py-1 w-full"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="date"
                    {...register(`selectedPromotionStores.${index}.toDate`)}
                    className="border rounded px-2 py-1 w-full"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="checkbox"
                    {...register(`selectedPromotionStores.${index}.deallocate`)}
                    className="form-checkbox"
                  />
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="text-right">
                <button
                  type="button"
                  onClick={addRow}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Row
                </button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
}

export default PromotionStoreSelectionTable
