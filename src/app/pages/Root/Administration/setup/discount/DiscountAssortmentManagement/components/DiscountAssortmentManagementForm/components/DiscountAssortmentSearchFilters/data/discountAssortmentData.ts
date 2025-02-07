// Define the type for an assortment item
interface DiscountAssortmentItem {
    barcode: string;
    itemName: string;
    itemCode: string;
    group: string;
    size?: string;
    color?: string;
    material?: string;
    // add any other fields as necessary
  }
  
  // Dummy data (at least 10 items)
  export const dummyDiscountAssortmentData: DiscountAssortmentItem[] = [
    {
      barcode: "100001",
      itemName: "Shirt A",
      itemCode: "SHR-A",
      group: "cloth",
      size: "M",
      color: "Red",
      material: "Cotton",
    },
    {
      barcode: "100002",
      itemName: "Shirt B",
      itemCode: "SHR-B",
      group: "cloth",
      size: "L",
      color: "Blue",
      material: "Polyester",
    },
    {
      barcode: "100003",
      itemName: "Pant A",
      itemCode: "PNT-A",
      group: "cloth",
      size: "S",
      color: "Black",
      material: "Cotton",
    },
    {
      barcode: "100004",
      itemName: "Pant B",
      itemCode: "PNT-B",
      group: "cloth",
      size: "M",
      color: "Green",
      material: "Cotton",
    },
    {
      barcode: "100005",
      itemName: "Dress A",
      itemCode: "DRS-A",
      group: "cloth",
      size: "L",
      color: "Yellow",
    },
    {
      barcode: "100006",
      itemName: "Dress B",
      itemCode: "DRS-B",
      group: "cloth",
      size: "M",
      material: "Linen",
    },
    {
      barcode: "100007",
      itemName: "Hat A",
      itemCode: "HAT-A",
      group: "accessories",
      size: "OneSize",
      material: "Wool",
    },
    {
      barcode: "100008",
      itemName: "Cap A",
      itemCode: "CAP-A",
      group: "accessories",
      color: "Red",
      material: "Cotton",
    },
    {
      barcode: "100009",
      itemName: "Socks A",
      itemCode: "SOCK-A",
      group: "cloth",
      size: "M",
      color: "White",
      material: "Cotton",
    },
    {
      barcode: "100010",
      itemName: "Jacket A",
      itemCode: "JCK-A",
      group: "cloth",
      size: "L",
      material: "Leather",
    },
  ];
  interface PropertyOption {
    value: string;
  }

  interface Property {
    propertyHolder: string;
    propertyName: string;
    propertyObj: PropertyOption[];
  }


  interface SelectedData {
    group: string;
    // The keys represent attribute names (like "Size", "Color", etc.) and the values are the selected values.
    attributes: Record<string, string>;
  }
  
  /**
   * Filters the dummy discount assortment data based on the provided criteria.
   * @param filter The selected data filter (group and attributes).
   * @returns The filtered array of DiscountAssortmentItem.
   */
  export function getFilteredDiscountAssortmentData(filter: SelectedData): DiscountAssortmentItem[] {
    return dummyDiscountAssortmentData.filter((item) => {
      // Check group filter if provided
      if (filter.group && item.group !== filter.group) {
        return false;
      }
  
      // Check each attribute filter.
      // We'll assume that the attribute keys in `filter.attributes` match the item property names in a case-insensitive manner.
      for (const [attrKey, attrValue] of Object.entries(filter.attributes)) {
        if (attrValue) {
          // Convert attribute key to lowercase to match our dummy data properties (e.g., "Size" -> "size")
          const propertyKey = attrKey.toLowerCase();
          if ((item as any)[propertyKey] !== attrValue) {
            return false;
          }
        }
      }
  
      return true;
    });
  }
  

 export function getPropertiesByGroup(group: string): Promise<Property[]> {
  return new Promise((resolve) => {
    if (group === "cloth") {
      resolve([
        {
          propertyHolder: "Property1",
          propertyName: "Brand",
          propertyObj: [
            { value: "BOSS" },
            { value: "FILA" },
            { value: "LEVIS" },
          ],
        },
        {
          propertyHolder: "Property2",
          propertyName: "Color",
          propertyObj: [
            { value: "RED" },
            { value: "BLUE" },
            { value: "ORANGE" },
          ],
        },
        {
          propertyHolder: "Property3",
          propertyName: "Size",
          propertyObj: [
            { value: "XL" },
            { value: "L" },
            { value: "M" },
          ],
        },
        {
          propertyHolder: "Property4",
          propertyName: "Material",
          propertyObj: [
            { value: "Cotton" },
            { value: "Polyester" },
            { value: "Silk" },
          ],
        },
        {
          propertyHolder: "Property5",
          propertyName: "Pattern",
          propertyObj: [
            { value: "Solid" },
            { value: "Striped" },
            { value: "Checked" },
          ],
        },
        {
          propertyHolder: "Property6",
          propertyName: "Fit",
          propertyObj: [
            { value: "Regular" },
            { value: "Slim" },
            { value: "Loose" },
          ],
        },
        {
          propertyHolder: "Property7",
          propertyName: "Fitest",
          propertyObj: [
            { value: "Regular" },
            { value: "Slim" },
            { value: "Loose" },
          ],
        },
        {
          propertyHolder: "Property8",
          propertyName: "Fitter",
          propertyObj: [
            { value: "Regular" },
            { value: "Slim" },
            { value: "Loose" },
          ],
        },
      ]);
    } else {
      // For other groups, return empty or different dummy data.
      resolve([]);
    }
  });
}