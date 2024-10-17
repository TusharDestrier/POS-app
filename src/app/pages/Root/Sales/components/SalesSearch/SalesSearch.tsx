import { Input } from '@/components/ui/input'
import useFocusOnKeyPress from '@/hooks/useFocusOnKeyPress'
import useSalesSearchStore from './store/useSalesSearch'

function SalesSearch() {
  const { setSearchKey } = useSalesSearchStore()

  // Using the hook to focus on the input when F2 is pressed
  const inputRef = useFocusOnKeyPress<HTMLInputElement>(
    'F2',
    (input) => input?.focus(), // Action to focus the input
    false // Do not focus initially
  )

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchKey(e.target.value)
  }

  return (
    <form className=''>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Input
            id="name"
            placeholder="search"
            className=""
            ref={inputRef}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  )
}

export default SalesSearch
