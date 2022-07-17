import Container from '../container/Container'
import './popular.css'

const Popular = () => {
  return (
    <Container
      bgcolor={'#FFFFFF'}
      className='pad-top'
    >
      <h1 className="header-style-3">
        Popular Services and Links
      </h1>

      <ul className="columns-3">
        <li>
          <a href="#"
            className='bold-link'>
            Overview of the South Carolina State Budget
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Employer Contribution Trends
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Appropriate and Bills Acts
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Overview of the South Carolina State Budget
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Employer Contribution Trends
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Appropriate and Bills Acts
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Overview of the South Carolina State Budget
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Employer Contribution Trends
          </a>
        </li>
        <li>
          <a href="#"
            className='bold-link'>Executuve Budget Office State Agency Budget Plans (Requests)
          </a>
        </li>
      </ul>

    </Container>
  )
}

export default Popular