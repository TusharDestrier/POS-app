import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { useMultiSelectionPopUpStore } from './store/useMultiSelectionPopUpStore'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

// type MultiSelectionPopUpProps = {
// }

function MultiSelectionPopUp() {
  const isOpen = useMultiSelectionPopUpStore((state) => state.open)
  console.log(isOpen)

  return (
    <Popover >
      <PopoverTrigger><MagnifyingGlassIcon color='red'/></PopoverTrigger>
      <PopoverContent>
    
      </PopoverContent>
    </Popover>
  )
}

export default MultiSelectionPopUp
