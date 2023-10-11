import ReactPaginate from 'react-paginate'

export const Pagination = ({
  handlePageClick,
  pageCount,
  focusPage,
}: {
  handlePageClick: (data: { selected: number }) => void
  pageCount: number
  focusPage: number
}) => {
  return (
    <ReactPaginate
      nextLabel={
        <>
          <i className="icon-east" />
        </>
      }
      onPageChange={handlePageClick}
      forcePage={focusPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={
        <>
          <i className="icon-west" />
        </>
      }
      pageClassName="page-items"
      pageLinkClassName="page-links"
      previousClassName="page-items"
      previousLinkClassName="page-links"
      nextClassName="page-items"
      nextLinkClassName="page-links"
      breakLabel="..."
      breakClassName="page-items"
      breakLinkClassName="page-links"
      containerClassName="digi-pagination"
      activeClassName="active"
    />
  )
}
