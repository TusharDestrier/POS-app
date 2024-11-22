import { data as assortmentExcludedData } from '../components/AssortmentManagementForm/components/AssortmentToExclude/data/assortmentExcludedData'
import { data as assortmentData } from '../components/AssortmentManagementTable/data/tableData'

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
