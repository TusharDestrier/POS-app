
import { ItemTableData } from "../components/ItemMasterTable/components/ItemMasterTableViewer/ItemMasterTableViewer";

import { ItemFilterType } from "@/types/item";

export default function mapItemMasterFetchedTypeToTableData(
  itemaster: ItemFilterType
): ItemTableData {
  return {
    itemCode: itemaster.itemCode,
    barCode: itemaster.barCode,
    itemName: itemaster.itemName,
    itemGroup: itemaster.itemGroup
  };
}