import { Pagination } from '@/elements'
import { add_count_page, add_force_page, add_item_offset } from '@/elements/redux/features/filter-slice'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { courseContext } from '@/contexts'

import { CourseCardList } from '../courseCards'

const CourseItems = ({ itemsPerPage, items, setShowing }: any) => {
  const { page_count, item_offset, forcePage } = useSelector((state: any) => state.filter)
  const [courses, setCourses] = useContext(courseContext)

  const [currentItems, setCurrentItems] = useState<any[] | null>(null)
  const [pageCount, setPageCount] = useState(page_count)
  const [itemOffset, setItemOffset] = useState(item_offset)
  const dispatch = useDispatch()

  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  useEffect(() => {
    if (courses && setShowing) {
      setShowing(courses.length)
    }
  }, [currentItems, setShowing])

  useEffect(() => {
    dispatch(add_count_page(pageCount))
    dispatch(add_item_offset(itemOffset))
  }, [dispatch, itemOffset, pageCount])

  useEffect(() => {
    setPageCount(page_count)
    setItemOffset(item_offset)
  }, [item_offset, page_count])

  // handlePageClick
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
    dispatch(add_force_page(event.selected))
  }

  return (
    <>
      {currentItems && courses !== null && courses.map((course, i) => <CourseCardList key={i} data={course} />)}
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} focusPage={forcePage} />
    </>
  )
}

export default CourseItems
