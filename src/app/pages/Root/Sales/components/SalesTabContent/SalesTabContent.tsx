import SalesCheckout from '../SalesCheckout'
import { useSalesOptionStore } from '../SalesOptions/store/useSalesOptionsStore'
import SalesItemSearch from '../SalesItemSearch'

function SalesTabContent() {
  const option = useSalesOptionStore((state) => state.selectedOption)
  let content

  if (option === 'itemsearch') {
    content = <SalesItemSearch />
  }
  if (option === 'checkout') {
    content = <SalesCheckout />
  }
  return <div className="sales-contents">{content}</div>
}

export default SalesTabContent
