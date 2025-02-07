import { DiscountTableData } from "../components/DiscountAssortmentManagementForm/components/DiscountAssortmentListTable/DiscountAssortmentTableVIewer/DiscountAssortmentVIewer";

import { FetchedAssortmentType } from "@/types/assortment";




export default function mapDiscountFetchedTypeToTableData(discount: FetchedAssortmentType): DiscountTableData {
    return {
        assortmentID: discount.assortmentID,
        assortmentName: discount.assortmentName,
        description: discount.description,
        //objDetails: discount.enteredBy // Assuming objDetails is a property of FetchedAssortmentType
    };
  }
  