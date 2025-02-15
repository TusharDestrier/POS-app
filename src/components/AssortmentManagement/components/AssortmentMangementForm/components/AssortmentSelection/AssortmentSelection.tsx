import { useState } from 'react'

import AssortmentSearchFilter from '../AssortmentSearchFilter'
import AssortmentSelectionTable from '../AssortmentSelectionTable'

import { Button } from '@/components/ui/button'

function AssortmentSelection() {
  const [show, setShow] = useState(false)
  return (
    <div className="discountAssortmentTable mt-2">
      {!show &&  <div className='text-end'>
        <Button onClick={() => setShow((prev) => !prev)}>Generate</Button>
      </div>}
     
      {show && <AssortmentSearchFilter setShow={setShow} />}

      <AssortmentSelectionTable />
    </div>
  )
}

export default AssortmentSelection
