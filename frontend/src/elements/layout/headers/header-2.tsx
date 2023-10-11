import Link from 'next/link'
import { useState } from 'react'

import SearchPopup from '@/components/common/popup-modal/search-popup'
import OffCanvas from '@/components/common/sidebar/off-canvas'
import { Image } from '@/elements'
import MainMenu from './component/main-menu'
import { headerProps } from '@/components/typescriptMigration/type'

const Header = ({ no_topBar = true }: headerProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={`digi-header header-style-2' ${no_topBar ? 'no-topBar' : ''}`}>
        {!no_topBar && (
          <div className="header-top-bar">
            <div className="container">
              <div className="header-top">
                <div className="header-top-left">
                  <ul className="header-info">
                    <li>
                      <a href="tel:+254743665574">
                        <i className="icon-phone" />
                        Call: +254 743 665 574
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@digikids.co.ke" rel="noreferrer" target="_blank">
                        <i className="icon-envelope" />
                        Email: info@digikids.co.ke
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="digi-sticky-placeholder"></div>

        <div className={`header-mainmenu `}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <Image
                      w={80}
                      h={64}
                      className="logo-light"
                      src={'/assets/images/logo/logo-dark.png'}
                      alt="Digikids Logo"
                    />
                    <Image
                      w={80}
                      h={64}
                      className="logo-dark"
                      src={'/assets/images/logo/logo-white.png'}
                      alt="Digikids Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>

              <div className="header-right">
                <ul className="header-action">
                  <li className="icon search-icon" onClick={() => setIsSearchOpen(true)}>
                    <a style={{ cursor: 'pointer' }} className="search-trigger">
                      <i className="icon-2" />
                    </a>
                  </li>

                  {no_topBar && (
                    <li className="header-btn">
                      <Link href="/courses" className="digi-btn btn-medium">
                        Find Courses <i className="icon-4" />
                      </Link>
                    </li>
                  )}

                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button className="hamburger-button" onClick={() => setIsOpen(true)}>
                      <i className="icon-54" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  )
}

export default Header
