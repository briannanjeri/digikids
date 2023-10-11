import cn from 'classnames'
import Link from 'next/link'

import { menu_data } from '@/data'

const MainMenu = () => {
  return (
    <ul className="mainmenu">
      {menu_data.map((menu, i) => (
        <li key={i} className={cn({ 'has-dropdown': menu.submenus })}>
          <Link href={menu.link}>{menu.title}</Link>
          {!menu.mega_menu && menu.submenus && (
            <ul className="submenu">
              {menu.submenus.map((nav, i) => (
                <li key={i}>
                  <Link href={`${nav.link}`}>
                    {nav.title}
                    {nav?.hot && <span className="badge-1">hot</span>}
                    {nav?.new && <span className="badge">new</span>}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menu && (
            <ul className="mega-menu">
              {menu.submenus &&
                menu.submenus.map((nav, i) => (
                  <li key={i}>
                    <h6 className="menu-title">{nav.title}</h6>
                    <ul className="submenu mega-sub-menu-01">
                      {nav.mega_submenu.map((m, i) => (
                        <li key={i}>
                          <Link href={`${m.link}`}>{m.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MainMenu
