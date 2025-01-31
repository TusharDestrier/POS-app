//import { Button } from "react-day-picker"
//import { FormProvider, useForm } from "react-hook-form"

//import { useState } from 'react';

import ItemMasterTab from '../ItemMasterTab'

//import { useItemMaster } from "../../store/useItemMaster"
//import ItemMasterTab from "../ItemMasterTab"

function ItemMasterForm() {
  // const mode = useItemMaster((state) => state.mode)
  //  const closeModal = useItemMaster((state) => state.close)

  // const methods = useForm(); // Initialize form methods

  //const [isOpen, setIsOpen] = useState(false); // Track tab visibility

  const closeTab = () => {
    //setIsOpen(false);
  };

  return (
    <>
    {/* {isOpen && ( */}
      <div>
      <button
            onClick={closeTab}
            className="btn btn-secondary absolute top-2 right-2"
          >
            Close
          </button>
        <ItemMasterTab />
      </div>
    {/* )}  */}
    </>
    //     <FormProvider {...methods} >
    //   <form
    //     onSubmit={(e) => {
    //       e.preventDefault() // Ensure default form submission behavior is prevented
    //      // onSubmit() // Trigger submission
    //     }}
    //   >
    //     <ItemMasterTab />

    //     {/* Submit Button for entire form */}
    //     <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
    //       <Button type="submit" className="btn btn-primary" >
    //         Submit
    //       </Button>
    //     </div>
    //     {/* {error && <p className="text-end">{error.message}</p>} */}
    //   </form>
    // </FormProvider>
  )
}
export default ItemMasterForm
