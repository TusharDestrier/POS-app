import { IntentiveTableData } from "../components/IncentiveAssortmentManagementTable/IntentiveAssortmentTableVIewer/IntentiveAssortmentTableVIewer";

import { FetchedAssortmentIncentiveType } from "@/types/assortmentIncentive";



export default function mapIntentivetFetchedTypeToTableData(intentive: FetchedAssortmentIncentiveType): IntentiveTableData {
    return {
        assortmentID: intentive.assortmentID,
        assortmentName: intentive.assortmentName,
        description: intentive.description,
        //objDetails: discount.enteredBy // Assuming objDetails is a property of FetchedAssortmentType
    };
  }
  