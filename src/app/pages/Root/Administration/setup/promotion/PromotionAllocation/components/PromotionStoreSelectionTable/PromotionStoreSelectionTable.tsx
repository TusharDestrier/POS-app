import { useFieldArray, useFormContext } from "react-hook-form";

import { usePromotionAllocationStore } from "../../store/usePromotionAllocationStore";
import { usePromotionStoreSelectionListStore } from "../PromotionStoreSelectionList/store/usePromotionStoreSelectionListStore";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function PromotionStoreSelectionTable() {
  const { control, register,setValue,getValues } = useFormContext()
  const openModal = usePromotionAllocationStore((state) => state.toggleOpen2)
  const openSelector = usePromotionStoreSelectionListStore((state) => state.openSelector)

  const { fields, remove } = useFieldArray({
    control,
    name: "selectedPromotionStores",
  });

  // Function to handle promotion selection
 

  const addRow = () => {
    // Step 1: Capture existing values
    const currentValues = getValues("selectedPromotionStores") || [];
  
    // Step 2: Append a new row
    const newRow = {
      id: '',
      name: '',
      fromDate: '',
      toDate: '',
      allocationType: 'normal',
      deallocate: false,
    };
    setValue("selectedPromotionStores", [...currentValues, newRow], { shouldValidate: true });
  };

  const handleModal = (index: number) => {
    openSelector(index); // Set the row index in the modal store
    openModal(); // Open the modal
  };

  return (
    <div className="p-4 border rounded shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="font-bold">No.</TableCell>
            <TableCell className="font-bold">Id</TableCell>
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
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <input
                  {...register(`selectedPromotionStores.${index}.id`)}
                  placeholder="Enter ID"
                  disabled
                  className="border rounded p-1 w-[30px] text-center"
                  readOnly
                />
              </TableCell>
              <TableCell>
                {field.name ? (
                  <input
                    {...register(`selectedPromotionStores.${index}.name`)}
                    placeholder="Enter Store Name"
                    className="border rounded px-2 py-1 w-full"
                    readOnly
                  />
                ) : (
                  <button onClick={() => handleModal(index)}>select</button>
                )}
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
                className=" flex h-8 px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-600"
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

export default PromotionStoreSelectionTable;
