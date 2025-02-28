import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Table } from '@/components/ui/table'

const GoodsReceipe = () => {
  const [scanOption, setScanOption] = useState('auto')
  const [scanInput, setScanInput] = useState('')
  const [transferQty, setTransferQty] = useState('')
  const [scanQty, setScanQty] = useState('')
  const [damageQty, setDamageQty] = useState('')

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

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent>
          <h2 className="text-lg font-bold">Goods Receipe</h2>
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
          <div className="p-4 border rounded-lg shadow-md w-full">
            <div className="mb-6 mt-2 flex items-center space-x-6 justify-between">
              {/* Scan Option */}
              <label className="font-semibold">Scan Option:</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="scanOption"
                    value="auto"
                    checked={scanOption === 'auto'}
                    onChange={() => setScanOption('auto')}
                  />
                  <span>Auto</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="scanOption"
                    value="manual"
                    checked={scanOption === 'manual'}
                    onChange={() => setScanOption('manual')}
                  />
                  <span>Manual</span>
                </label>
              </div>

              {/* Scan Input */}
              <label className="font-semibold">Scan:</label>
              <input
                type="text"
                className="border p-2 rounded w-60"
                value={scanInput}
                onChange={(e) => setScanInput(e.target.value)}
                placeholder="Enter scan value"
              />
            </div>

            <div className="space-y-2">
              <div className="font-semibold">
                Total Transferred Quantity{' '}
                <input
                  type="text"
                  className="border p-2 rounded w-60"
                  value={transferQty}
                  onChange={(e) => setTransferQty(e.target.value)}
                  placeholder="Total Transferred Quantity"
                />
              </div>
              <div className="font-semibold">
                Total Scan Quantity{' '}
                <input
                  type="text"
                  className="border p-2 rounded w-60"
                  value={scanQty}
                  onChange={(e) => setScanQty(e.target.value)}
                  placeholder="Total Scan Quantity"
                />
              </div>
              <div className="font-semibold">
                Total Damage Quantity{' '}
                <input
                  type="text"
                  className="border p-2 rounded w-60"
                  value={damageQty}
                  onChange={(e) => setDamageQty(e.target.value)}
                  placeholder="Total Damage Quantity"
                />
              </div>
            </div>
          </div>
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
        <Button>Post Inventory</Button>
      </div>
    </div>
  )
}

export default GoodsReceipe
