import { Image } from '@/elements'
import { useContext, useState } from 'react'
import { courseContext } from '@/contexts'
import { useRouter } from 'next/router'

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  const router = useRouter()

  const [searchValue, setSearchValue] = useState('')
  const [courses, setCourses] = useContext(courseContext)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(searchValue)
    const regex = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regexPattern = new RegExp(regex, 'i')

    const filteredCourses = courses.filter(course => regexPattern.test(course.title))
    setCourses(filteredCourses)
    if (searchValue && filteredCourses) {
      router.push('/courses')
    }
  }

  const handleSearchClick = () => {
    {
      isSearchOpen && searchValue && setIsSearchOpen(false)
    }
  }

  return (
    <div className={`digi-search-popup ${isSearchOpen ? 'open' : ''}`}>
      <div className="content-wrap">
        <div className="site-logo">
          <Image w={80} h={64} className="logo-light" src="/assets/images/logo/logo-dark.png" alt="logo" />
          <Image w={80} h={64} className="logo-dark" src="/assets/images/logo/logo-white.png" alt="logo" />
        </div>
        <div className="close-button" onClick={() => setIsSearchOpen(false)}>
          <button className="close-trigger">
            <i className="icon-73" />
          </button>
        </div>
        <div className="inner">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="digikids-search-popup-field"
              placeholder="Type to search courses"
              onChange={e => setSearchValue(e.target.value)}
            />

            <button className="submit-button">
              <i className="icon-2" onClick={handleSearchClick} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchPopup
