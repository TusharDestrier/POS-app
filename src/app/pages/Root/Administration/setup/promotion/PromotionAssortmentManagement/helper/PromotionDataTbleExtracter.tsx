import { PromotionTableData } from "../components/PromotionAssortmentManagementTable/PromotionAssortmentTableVIewer/PromotionAssortmentTableVIewer";

import { FetchedAssortmentPromotionType } from "@/types/assortmentPromotion";






export default function mapPromotiontFetchedTypeToTableData(promotion: FetchedAssortmentPromotionType): PromotionTableData {
    return {
        assortmentID: promotion.assortmentID,
        assortmentName: promotion.assortmentName,
        description: promotion.description,
        //objDetails: discount.enteredBy // Assuming objDetails is a property of FetchedAssortmentType
    };
  }
  