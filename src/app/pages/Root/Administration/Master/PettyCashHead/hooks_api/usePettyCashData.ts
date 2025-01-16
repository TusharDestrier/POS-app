import useFetch from "@/hooks/useFetch";
import PettyCashClient from "@/services/pettyCashClient";
import { FetchedPettyCashType } from "@/types/pettyCash";


export function usePettyCashData() {
  const { data, error, isLoading } = useFetch<FetchedPettyCashType[]>(
    async () => PettyCashClient.getPettyCash(),
    'pettyCash'  // ✅ Unique fetch key
  );

  return { pettyCashData: data, error, isLoading };
}