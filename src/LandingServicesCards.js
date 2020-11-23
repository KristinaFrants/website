import React from 'react'
import './LandingServicesCards.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function LandingServicesCards() {
    return ( 
      <div className="m-0">
        <div className="ml-2 mr-2" style={{border: "15px solid white", borderRadius: "5px"}}>
            <Row>
      <Col sm="3" >
        <Card  className="LandingCardServices__cards" body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
          <div class="flip_card_back">
      <h5>Lorem ipsum dolor sit .</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam sequi quia doloremque recusandae et, placeat tempora dolorum quibusdam.</p>
    </div>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card className="LandingCardServices__cards" body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
        </div>
        </div>
    )
}

export default LandingServicesCards
