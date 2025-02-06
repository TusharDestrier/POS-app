import { data as assortmentExcludedData } from '../components/IncentiveAssortmentManagementForm/components/IncentiveAssortmentToExclude/data/IncentiveassortmentExcludedData'
import { data as assortmentIncludedData} from '../components/IncentiveAssortmentManagementForm/components/IncentiveAssortmentToInclude/data/IncentiveassortmentIncluded'
import { data as assortmentData } from '../components/IncentiveAssortmentManagementTable/data/tableData'

import { UsePromise } from '@/app/hooks/use'

export function getAssortmentData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(assortmentData)
      } catch (error) {
        reject(error)
      }
    }, 3000)
  })

  return promise as UsePromise<typeof assortmentData>
}
export function getAssortmentIncludedData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(assortmentIncludedData)
      } catch (error) {
        reject(error)
      }
    }, 3000)
  })
  return promise as UsePromise<typeof assortmentIncludedData>
}

export function getAssortmentExcludedData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(assortmentExcludedData)
      } catch (error) {
        reject(error)
      }
    }, 3000)
  })

  return promise as UsePromise<typeof assortmentExcludedData>
}
