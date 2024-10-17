import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { LayoutGrid, Logs } from 'lucide-react'
import SalesSearch from '../SalesSearch'
import SalesSearchTable from '../SalesSearchTable'
import SalesSearchGrid from '../SalesSearchGrid'
import { useState } from 'react'

function SalesItemSearch() {
  const [view, setView] = useState('list')

  function handleView(type: 'list' | 'grid') {
    setView(type)
  }

  return (
    <Card>
      <CardHeader className="pb-0">
        <h3 className="heading-secondary">Item List</h3>
        <ul className="flex justify-end gap-1">
          <li>
            <button className="p-1 text-gray-500" onClick={() => handleView('list')}>
              <Logs size={15} strikethroughThickness={3} />
            </button>
          </li>
          <li>
            <button className="p-1 text-gray-500" onClick={() => handleView('grid')}>
              <LayoutGrid size={15} strikethroughThickness={3} />
            </button>
          </li>
        </ul>
      </CardHeader>
      <CardContent className="pt-2 ">
        <div className="mb-3">
          <SalesSearch />
        </div>
        {view === 'list' ? <SalesSearchTable /> : <SalesSearchGrid />}
      </CardContent>
    </Card>
  )
}

export default SalesItemSearch
