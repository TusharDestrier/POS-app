import { useState } from 'react'

import GoodsReceipe from '../GoodsReceipe'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Table } from '@/components/ui/table'

const GoodsReceipt = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState('')
  const [documentNo, setDocumentNo] = useState('')
  const [isGoodsReceiptOpen, setGoodsReceiptOpen] = useState(false)

  const documentData = [
    { documentNo: 'STK/1005', packetNo: 'PACK/1001', items: 12 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1002', items: 16 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1003', items: 22 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1004', items: 21 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1005', items: 24 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1006', items: 11 },
    { documentNo: 'STK/1005', packetNo: 'PACK/1007', items: 9 },
  ]

  const receiptData = [
    {
      barcode: 'DE1001',
      itemName: 'L1001 Lushiplib T-Shirt (S)',
      packQty: 1,
      receiptQty: 1,
      damage: 0,
      shortage: 0,
      remarks: '',
      article: "MEN'S - UPPER - T-SHIRT",
    },
    {
      barcode: 'DE1003',
      itemName: 'L1003 Lushiplib T-Shirt (L)',
      packQty: 2,
      receiptQty: 2,
      damage: 1,
      shortage: 0,
      remarks: 'Receipt Damage Piece',
      article: "MEN'S - UPPER - T-SHIRT",
    },
  ]

  function createModalHandler() {
    setGoodsReceiptOpen(true)
    // modalToggler()
    // setModalMode('Create')
    //alert('Generate Receipt')
  }

  return (
    <>
      {isGoodsReceiptOpen ? (
        <GoodsReceipe />
      ) : (
        <>
          <div className="p-4 space-y-4">
            <Card>
              <CardContent>
                <h2 className="text-lg font-bold">Goods Receipt</h2>
                <Table>
                  <thead>
                    <tr>
                      <th className="text-left">Document No</th>
                      <th className="text-left">Packet No</th>
                      <th className="text-left">No. of Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentData.map((doc, index) => (
                      <tr key={index}>
                        <td>{doc.documentNo}</td>
                        <td>{doc.packetNo}</td>
                        <td>{doc.items}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Table>
                  <thead>
                    <tr>
                      <th className="text-left">Barcode</th>
                      <th className="text-left">Item Name</th>
                      <th className="text-left">Pack Qty</th>
                      <th className="text-left">Receipt Qty</th>
                      <th className="text-left">Damage</th>
                      <th className="text-left">Shortage</th>
                      <th className="text-left">Remarks</th>
                      <th className="text-left">Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receiptData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.barcode}</td>
                        <td>{item.itemName}</td>
                        <td>{item.packQty}</td>
                        <td>{item.receiptQty}</td>
                        <td>{item.damage}</td>
                        <td>{item.shortage}</td>
                        <td>{item.remarks}</td>
                        <td>{item.article}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardContent>
            </Card>
            <div className="flex space-x-4">
              <Button>Post Stock</Button>
              <Button onClick={createModalHandler}>
                Reconcile Packet
              </Button>
              <div className="flex flex-col gap-4">
                {/* Document No Section */}
                <div className="flex items-center gap-2">
                  <label className="whitespace-nowrap">Document No:</label>
                  <input
                    type="text"
                    className="border border-black p-2 w-[200px] h-[25px]"
                    value={documentNo}
                    onChange={(e) => setDocumentNo(e.target.value)}
                  />
                </div>

                {/* Warehouse Section */}
                <div className="flex items-center gap-2">
                  <label className="whitespace-nowrap">Warehouse:</label>
                  <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a warehouse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Warehouse</SelectLabel>
                        <SelectItem value="w001">Warehouse1</SelectItem>
                        <SelectItem value="w002">Warehouse2</SelectItem>
                        <SelectItem value="w003">Warehouse3</SelectItem>
                        <SelectItem value="w004">Warehouse4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default GoodsReceipt
