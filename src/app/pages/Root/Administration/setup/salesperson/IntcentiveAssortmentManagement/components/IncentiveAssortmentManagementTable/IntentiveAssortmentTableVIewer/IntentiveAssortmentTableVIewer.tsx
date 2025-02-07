 interface IntentiveTableDetail {
assortmentID: number
assortmentName: string
description: string
store: number
 }
// Intentive Table Data Structure
export type IntentiveTableData = {
  assortmentID: number
  assortmentName: string
  description: string
  store: number
  objDetails: IntentiveTableDetail[]
}

interface IntentiveTableViewerProps {
  data: IntentiveTableData
}

function IntentiveAssortmentTableVIewer({ data }: IntentiveTableViewerProps) {
  return (
    <div className="customer_table_viewer space-y-6 pb-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-5">
        <div className="space-y-1">
            <h3 className="font-semibold">Assortment ID</h3>
            <h6 className="text-sm">{data.assortmentID|| 'N/A'}</h6>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Assortment Name</h3>
            <h6 className="text-sm">{data.assortmentName}</h6>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Description</h3>
            <h6 className="text-sm">{data.description || 'N/A'}</h6>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Store</h3>
            <h6 className="text-sm">{data.store || 'N/A'}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntentiveAssortmentTableVIewer
