import React from 'react'
import './navigation.css'
import NavMenu from './NavMenu'
import NavMenuCompact from './NavMenuCompact'
import useCurrentWidth from '../utilities/screenWidth'

const Navigation = () => {
  const [menuCollapsed, setMenuCollapsed] = React.useState(true)
  const [searchPopUpCollapsed, setSearchPopUpCollapsed] = React.useState(true)

  const navigationRef = React.useRef()

  // Close menu when clicking outside of menu area
  React.useEffect(() => {
    const onBodyClick = event => {
      if (navigationRef.current.contains(event.target)) {
        return
      }
      setMenuCollapsed(true)
      setSearchPopUpCollapsed(true)
    }

    document.body.addEventListener(
      'click', onBodyClick, { capture: true }
    )

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  // Use screen size to choose menu component
  const width = useCurrentWidth()
  const sizeAppropriateNavMenu = () => {
    if (width < 993) return <NavMenuCompact />
    return <NavMenu />
  }

  const toggleSearchPopUp = () => {
    setSearchPopUpCollapsed(!searchPopUpCollapsed)
  }

  // Body
  return (
    <div ref={navigationRef}>
      <nav>
        <button
          id="nav-menu-button"
          type="button"
          aria-label='Expands primary navigation menu'
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        >
          {(menuCollapsed)
            ? <svg className='nav-menu-button-icon'
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5
                0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0
                1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
                1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            : <svg className='nav-menu-button-icon'
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5
                0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146
                5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          }
          <div id="nav-menu-button-text">
            {(menuCollapsed) ? 'MENU' : 'CLOSE'}
          </div>
        </button>

        {/* Search */}
        <div
          id="nav-search-btn-ctr"
          aria-expanded={(!searchPopUpCollapsed) ? 'true' : 'false'}
        >
          <button
            id="nav-search"
            type='button'
            onClick={toggleSearchPopUp}
            aria-expanded={(!searchPopUpCollapsed) ? 'true' : 'false'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>

        <div
          id="search-pop-up-box"
          aria-expanded={(!searchPopUpCollapsed) ? 'true' : 'false'}
        >
          <input
            type="text"
            id="search-pop-up-box-input"
            placeholder='Enter search term'
          />
          <button
            type='button'
            id='search-pop-up-box-button'
          >
            Search
          </button>
        </div>

        {/* Nav bar links */}
        <ul id='nav-horizontal-menu-list'>
          <li>
            <a href='#'>
              About Us
            </a>
          </li>
          <li>
            <a href='#'>
              Events
            </a>
          </li>
          <li>
            <a href='#'>
              Boards & Committees
            </a>
          </li>
        </ul>



        <div id="insignia">
          <img src="/images/RFA Logo Final.png" />
        </div>

        <div id="site-title">
          <h1 id="site-title-primary">
            South Carolina <br />
            Revenue and Fiscal Affairs Office
          </h1>
          <div id="site-title-secondary">
            Transforming data into solutions for South Carolina
          </div>
        </div>

      </nav>



      <div id="nav-menu-drawer" data-menu-collapsed={(menuCollapsed) ? 'true' : 'false'}>
        {sizeAppropriateNavMenu()}
      </div>

    </div>
  )
}

export default Navigation