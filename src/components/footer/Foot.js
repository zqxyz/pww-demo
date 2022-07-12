import Container from '../container/Container'
import './foot.css'

const Foot = () => {
  return (
    <Container
      bgcolor={'#1B3A61'}>
      <div id="foot">

        <div className="foot-column" id="foot-left">
          <div>South Carolina</div>
          <div>Revenu and Fiscal Affairs Office</div>
          <div id="foot-badge-container">
            <img
              id="foot-badge"
              src="images/Group 262.png"
            />
          </div>
        </div>

        <div className="foot-column" id="foot-middle">
          <ul>
            <li>
              <a href="#">
                Privacy Statement
              </a>
            </li>
            <li>
              <a href="#">
                FOIA
              </a>
            </li>
            <li>
              <a href="#">
                Disclosures and Reporting
              </a>
            </li>
            <li>
              <a href="#">
                Report Fraud
              </a>
            </li>
            <li>
              <a href="#">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#">
                Concact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="foot-column" id="foot-right">
          <h4 className="foot-header">
            Main Office
          </h4>
          <div className="foot-address">
            1000 Assembly St, Rember Dennis Building, Suite 421<br />
            Colubmia, SC 29201
          </div>

          <h4 className="foot-header">
            Geodetic Survey Section
          </h4>
          <div className="foot-address">
            5 Geology Rd<br />
            Colubmia, SC 29201
          </div>

          <h4 className="foot-header">
            Health and Demographics Division
          </h4>
          <div className="foot-address">
            1000 Assembly St, Rember Dennis Building, Suite 240<br />
            Colubmia, SC 29201
          </div>
        </div>

      </div>
    </Container>
  )
}

export default Foot