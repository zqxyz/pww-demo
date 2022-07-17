import React from 'react'

type Props = {
  sectionCollapsed: boolean,
  handleCollapseToggle: (event: React.MouseEvent<Element>) => void,
  id: string,
  title: string,
  children: JSX.Element | JSX.Element[]
}

const NavMenuCompactEntry: React.FC<Props> = ({
  sectionCollapsed,
  handleCollapseToggle,
  id,
  title,
  children
}) => {

  return (
    <>
      <button
        type='button'
        className='compact-menu-toggle'
        id={id}
        onClick={handleCollapseToggle}
        aria-expanded={!sectionCollapsed}
      >
        {title}
        <img
          src={(sectionCollapsed)
            ? '/images/inline-icons/expand.svg'
            : '/images/inline-icons/collapse.svg'}
          className="icon-right" />
      </button>
      <ul
        className="nav-secondary-ul"
        aria-expanded={!sectionCollapsed}
      >
        {children}
      </ul>
    </>
  )
}

export default NavMenuCompactEntry