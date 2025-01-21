import { useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function PaymentMethods() {
  const { control } = useFormContext(); // Use control for form integration

  const paymentMethods = [
    { id: "cash", label: "Cash" },
    { id: "creditNoteReceived", label: "Credit Note Received" },
    { id: "gpay", label: "Google Pay (GPay)" },
    { id: "debitNoteIssued", label: "Debit Note Issued" },
    { id: "debit", label: "Debit" },
    { id: "debitNoteAdjusted", label: "Debit Note Adjusted" },
  ];

  return (
    <FormField
      control={control}
      name="paymentMethod" // Bind to schema field
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Available Payment Methods</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange} // Update form state
              defaultValue={field.value} // Default value from form state
              className="space-y-1 grid-cols-2 bg-white/20 rounded-md roles-radio"
            >
              {paymentMethods.map((method) => (
                <FormItem
                  key={method.id}
                  className="flex items-center space-x-2 text-black"
                >
                  <FormControl>
                    <RadioGroupItem value={method.id} id={method.id} />
                  </FormControl>
                  <FormLabel htmlFor={method.id}>{method.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default PaymentMethods;
