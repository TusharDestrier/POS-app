import DiscountAssortmentSearchFilters from '../DiscountAssortmentSearchFilters'

function DiscountAssortmentListTable() {
  return (
    <div className="discountAssortmentTable mt-2">
      <DiscountAssortmentSearchFilters/>
      <div className="result_table">results table</div>
    </div>
  )
}

export default DiscountAssortmentListTable
