import './container.css'

const Container = ({ bgcolor, className, children }) => {
  const classN = (className) ? className : ''
  return (

    <div
      style={{ backgroundColor: bgcolor }}
    >
      <div
        className={`inner-container ${classN}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Container