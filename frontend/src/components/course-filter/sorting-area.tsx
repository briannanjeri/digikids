import { useAtom } from 'jotai'

import { coursesAtom } from '@/state'
import { sortingAreaProps } from '../typescriptMigration/type'
const SortingArea = ({ num, items, courses, setCourses }: sortingAreaProps) => {
  const [courseDisplayFormat, setCourseDisplayFormat] = useAtom(coursesAtom.coursesDisplayFormat)

  const isCourseList = courseDisplayFormat === 'list'

  return (
    <div className="digi-sorting-area">
      <div className="sorting-left">
        {items ? (
          <h6 className="showing-text">
            Showing <span>{num}</span> of <span>{items.length}</span> courses
          </h6>
        ) : (
          <h6 className="showing-text">
            Showing <span>{num}</span> courses
          </h6>
        )}
      </div>
      <div className="sorting-right">
        <div className="layout-switcher">
          <label>{isCourseList ? 'List' : 'Grid'}</label>
          <ul className="switcher-btn">
            <li>
              <button className={!isCourseList ? 'active' : ''} onClick={() => setCourseDisplayFormat('grid')}>
                <i className="icon-53" />
              </button>
            </li>
            <li>
              <button id={isCourseList ? 'active' : ''} onClick={() => setCourseDisplayFormat('list')}>
                <i className="icon-54" />
              </button>
            </li>
            <li>
              <button className={isCourseList ? 'active' : 'black'} onClick={() => setCourseDisplayFormat('list')}>
                Sort & Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SortingArea
