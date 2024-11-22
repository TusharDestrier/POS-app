import { data } from '../components/AssortmentManagementTable/data/tableData'

import { UsePromise } from '@/app/hooks/use';


export function getAssortmentData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });

  return promise as UsePromise<typeof data>;
}
