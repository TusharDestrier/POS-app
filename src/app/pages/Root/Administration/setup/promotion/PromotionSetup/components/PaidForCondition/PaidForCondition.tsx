import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaidForCondition = () => {
    const { control ,setValue} = useFormContext();

  
  return (
    <div className="">
    <h4 className="font-semibold mb-4">Paid for Condition</h4>

    <FormField
      control={control}
      name="promotionParameters.paidForCondition.condition"
      render={({ field }) => (
        <FormItem>
          <RadioGroup
            value={field.value}
            onValueChange={(value) => {
              field.onChange(value);
              // Clear quantity if condition changes
              if (value !== "buyAny") {
                setValue("promotionParameters.paidForCondition.quantity", undefined);
              }
            }}
            className="space-y-1 roles-radio"
          >
            {/* Buy Any */}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyAny" id="buyAny" />
              <label htmlFor="buyAny" className="text-sm">
                Buy Any
              </label>
              {field.value === "buyAny" && (
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Quantity"
                    className="w-12 h-6"
                    {...control.register(
                      "promotionParameters.paidForCondition.quantity",
                      {
                        setValueAs: (value) => (value === "" ? undefined : Number(value)),
                      }
                    )}
                  />
                </FormControl>
              )}
            </div>

            {/* Buy Specific Quantity in Ratio */}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buySpecificRatio" id="buySpecificRatio" />
              <label htmlFor="buySpecificRatio" className="text-sm">
                Buy Specific Quantity in Ratio from Assortment
              </label>
            </div>

            {/* Buy Any Quantity from Assortment */}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyAnyQuantity" id="buyAnyQuantity" />
              <label htmlFor="buyAnyQuantity" className="text-sm">
                Buy Any Quantity from Assortment
              </label>
            </div>
          </RadioGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
  );
};

export default PaidForCondition;
