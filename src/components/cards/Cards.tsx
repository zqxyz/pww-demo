import Container from '../container/Container'
import Card from './Card'

const Cards = () => {
  return (
    <Container
      bgcolor={'#E1E5EA'}
      className={'card-set pad-top'}
    >
        <div className="card-row">
          <Card
            key={0}
            label="Data & Research"
            path="#"
            image="/images/Data-Research-Icon.svg"
            altText="Data and Research"
          />
          <Card
            key={1}
            label="Geography & Mapping"
            path="#"
            image="/images/Geography-Icon.svg"
            altText="Data and Research"
          />
        </div>
        <div className="card-row">
          <Card
            key={2}
            label="Programs & Services"
            path="#"
            image="/images/Programs-Icon.svg"
            altText="Programs & Services"
          />
          <Card
            key={3}
            label="Legislative Fiscal Impacts"
            path="#"
            image="/images/Legislative-Icon.svg"
            altText="Legislative Fiscal Impacts"
          />
        </div>
    </Container>
  )
}

export default Cards