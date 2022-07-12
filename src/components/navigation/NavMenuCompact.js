import React from 'react'
import NavMenuCompactEntry from './NavMenuCompactEntry'

const NavMenu = () => {

  const initialState = {
    "data-and-research": true,
    "legislative-financial-impacts": true,
    "geography-and-mapping": true,
    "programs-and-services": true
  }
  const [sectionCollapsed, setSectionCollapsed] = React.useState(initialState)

  const handleCollapseToggle = (e) => {
    console.log(sectionCollapsed[e.target.id])
    setSectionCollapsed({
      ...initialState,
      [e.target.id]: !sectionCollapsed[e.target.id]
    })
  }

  return (
    <div id="nav-menu">
      

      <div id="focal-nav-menu" className="nav-menu-column">
      <input
            type="text"
            id='compact-nav-search-input'
            placeholder='Enter search term'
          />
          <button
            type='button'
            id='compact-nav-search-button'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        <ul className="nav-primary-ul">
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">
              News & Events
            </a>
          </li>
          <li>
            <a href="#">
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#">
              Boards & Committees
            </a>
          </li>
        </ul>
      </div>



      <div id="nav-menu-collapsable-sections">
        <NavMenuCompactEntry
          sectionCollapsed={sectionCollapsed['data-and-research']}
          handleCollapseToggle={handleCollapseToggle}
          id='data-and-research'
          title='Data & Research'
        >
          <li>
            <a href="#">
              Economy
            </a>
          </li>
          <li>
            <a href="#">
              State Finances
            </a>
          </li>
          <li>
            <a href="#">
              Education
            </a>
          </li>
          <li>
            <a href="#">
              Healthcare
            </a>
          </li>
          <li>
            <a href="#">
              Local Government
            </a>
          </li>
          <li>
            <a href="#">
              Population and Demographics
            </a>
          </li>
          <li>
            <a href="#">
              State Register Calculations
            </a>
          </li>
          <li>
            <a href="#">
              Presentations
            </a>
          </li>
        </NavMenuCompactEntry>

        <NavMenuCompactEntry
          sectionCollapsed={sectionCollapsed['legislative-financial-impacts']}
          handleCollapseToggle={handleCollapseToggle}
          id='legislative-financial-impacts'
          title='Legislative Financial Impacts'
        >
          <li>
            <a href="#">
              Current General Assembly Session
            </a>
          </li>
          <li>
            <a href="#">
              Previous General Assembly Session Forms
            </a>
          </li>
        </NavMenuCompactEntry>

        <NavMenuCompactEntry
          sectionCollapsed={sectionCollapsed['geography-and-mapping']}
          handleCollapseToggle={handleCollapseToggle}
          id='geography-and-mapping'
          title='Geography & Mapping'
        >
          <li>
            <a href="#">
              Transportation Carrier Network (Uber)
            </a>
          </li>
          <li>
            <a href="#">
              SC Real Time Network
            </a>
          </li>
          <li>
            <a href="#">
              SC State GIS
            </a>
          </li>
          <li>
            <a href="#">
              Maps
            </a>
          </li>
          <li>
            <a href="#">
              Interactive Mapping
            </a>
          </li>
          <li>
            <a href="#">
              Statewide Aerial Imagery
            </a>
          </li>
        </NavMenuCompactEntry>

        <NavMenuCompactEntry
          sectionCollapsed={sectionCollapsed['programs-and-services']}
          handleCollapseToggle={handleCollapseToggle}
          id='programs-and-services'
          title='Programs & Services'
        >
          <li>
            <a href="#">
              Precinct Demographics and Redistricting
            </a>
          </li>
          <li>
            <a href="#">
              State 911 Program
            </a>
          </li>
          <li>
            <a href="#">
              Data Services and Online Solutions
            </a>
          </li>
          <li>
            <a href="#">
              Geodetic Survey
            </a>
          </li>
          <li>
            <a href="#">
              Fiscal Analysis
            </a>
          </li>
          <li>
            <a href="#">
              2020 Census
            </a>
          </li>
        </NavMenuCompactEntry>

      </div>
    </div>
  )
}

export default NavMenu