import Link from 'next/link'
import { useState } from 'react'

import { menu_data } from '@/data'
import { Image } from '@/elements'

const OffCanvas = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = menu => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }
  return (
    <>
      <div className={`popup-mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image w={80} h={64} className="logo-light" src="/assets/images/logo/logo-dark.png" alt="logo" />
                <Image w={80} h={64} className="logo-dark" src="/assets/images/logo/logo-white.png" alt="logo" />
              </Link>
            </div>

            <div className="close-menu" onClick={() => setIsOpen(false)}>
              <button className="close-button">
                <i className="icon-73" />
              </button>
            </div>
          </div>

          <div className="mm-menu">
            <ul>
              {menu_data.map((menu, i) => (
                <li
                  key={i}
                  className={!menu.submenus ? '' : navTitle === menu?.title ? 'has-dropdown active' : 'has-dropdown'}
                >
                  {menu.submenus && <button onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}

                  {!menu.mobile_pages_menu && (
                    <ul className={navTitle === menu?.title ? 'sub-menu active' : 'sub-menu'}>
                      {menu.submenus &&
                        menu?.submenus?.map((sub, i) => (
                          <li key={i}>
                            <Link href={`${sub.link}`}>{sub.title}</Link>
                          </li>
                        ))}
                    </ul>
                  )}

                  {menu.mobile_pages_menu && (
                    <ul className={navTitle === menu?.title ? 'sub-menu active' : 'sub-menu'}>
                      {menu?.mobile_pages_menu?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {!menu.submenus && <Link href={menu.link}>{menu.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  )
}

export default OffCanvas
