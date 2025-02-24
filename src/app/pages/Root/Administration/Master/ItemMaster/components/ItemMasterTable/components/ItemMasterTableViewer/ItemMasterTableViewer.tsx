import { useItemMaster } from '../../../../store/useItemMaster';

import { Button } from '@/components/ui/button'


interface ItemTableDetail {
    itemCode: string;
    barCode: string;
    itemName: string;
    itemGroup: number;
    retailPrice: number;
    mrp: number;
    wholesalePrice: number;
    isActive: 'Y' | 'N';
}

export type ItemTableData = {
    itemCode: string;
    barCode: string;
    itemName: string;
    itemGroup: number;
    retailPrice: number;
    mrp: number;
    wholesalePrice: number;
    isActive: 'Y' | 'N';
    objDetails: ItemTableDetail[];
};

interface ItemTableViewerProps {
    data: ItemTableData;
}

function ItemMasterTableViewer({ data }: ItemTableViewerProps) {
    const details = data?.objDetails || [];
    console.log("ItemMasterTableViewer Data:", data);
    const closeModal = useItemMaster((state) => state.close)
    return (
        <div className="item_table_viewer space-y-6 pb-6">
            {/* Item Basic Details */}
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                    <div className="space-y-1">
                        <h3 className="font-semibold">Item Code</h3>
                        <h6 className="text-sm">{data.itemCode}</h6>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold">Bar Code</h3>
                        <h6 className="text-sm">{data.barCode}</h6>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="space-y-1">
                        <h3 className="font-semibold">Item Name</h3>
                        <h6 className="text-sm">{data.itemName}</h6>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold">Item Group</h3>
                        <h6 className="text-sm">{data.itemGroup}</h6>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold">MRP</h3>
                        <h6 className="text-sm">{data?.mrp ?? "No Data Avl."}</h6>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold">Retail Price</h3>
                        <h6 className="text-sm">{data.retailPrice}</h6>
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-semibold">Wholesale Price</h3>
                        <h6 className="text-sm">{data.wholesalePrice}</h6>
                    </div>
                  {/*   <div className="space-y-1">
                        <h3 className="font-semibold">Active Status</h3>
                        <h6 className="text-sm">{data.isActive === 'Y' ? 'Active' : 'Inactive'}</h6>
                    </div> */}
                </div>
            </div>
            
            {/* Item Table Details */}
            {details.length > 0 && (
                <div className="space-y-6">
                    <h3 className="font-semibold">Item Details</h3>
                    <div className="space-y-4">
                        {details.map((detail, index) => (
                            <div key={index} className="border border-gray-200 p-4 rounded space-y-2">
                                <h3 className="font-semibold">Detail {index + 1}</h3>
                                <h6 className="text-sm">Item Code: {detail.itemCode}</h6>
                                <h6 className="text-sm">Bar Code: {detail.barCode}</h6>
                                <h6 className="text-sm">Item Name: {detail.itemName}</h6>
                                <h6 className="text-sm">Item Group: {detail.itemGroup}</h6>
                                <h6 className="text-sm">Status: {detail.isActive === 'Y' ? 'Active' : 'Inactive'}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="h-[10px] bottom-0 right-0 flex gap-3 justify-end items-center border-none">
        <Button onClick={closeModal}>Cancel</Button>
      </div>
        </div>
    );
}

export default ItemMasterTableViewer;
