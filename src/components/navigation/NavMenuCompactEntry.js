const NavMenuCompactEntry = ({
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