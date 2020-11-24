import React from 'react'
import './LandingServicesCards.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';

function LandingServicesCards() {
    return ( 
      <div className="m-0">
      
        <h3 className="col mx-auto" style={{borderBottom: "3px solid black",  fontFamily: "Playfair Display, serif"}}>What we do</h3>
        <div className="mt-4 ml-2 mr-2" style={{border: "15px solid white", borderRadius: "5px"}}>
            <Row>
      <Col sm="3" >
        <Card  className="LandingCardServices__cards" body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.
          With supporting text below as a natural lead-in to additional content.
          </CardText>
          {/* <Button>Go somewhere</Button> */}
          <div class="flip_card_back">
      <Link to='/home'>
      <FontAwesomeIcon icon={faInfo} className="LandingCardServices__info" />
    </Link>
        <h5 style={{marginTop:"2%"}}>Lorem ipsum dolor sit</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam sequi quia doloremque recusandae et. Lorem inpusum dolor.</p>
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
        <div className="LandingServices__blob">
          
          <div className="row ">
<div className="col LandingServicesBlob__left">
  <h2>Marketing</h2>
  <p>We drive awareness to your brand and help you connect with your audience in the right place and at the right time.</p>
  <Link to="/home" className='LandingServicesBlob__leftLink'>
  <p>View services </p>
  </Link>
</div>

<div className="col LandingServicesBlob__right">
  <h2>Creative</h2>
  <p>We create effective visual languages that can help you build your credibility, recognition, and competitiveness.</p>
  <Link to="/home" className='LandingServicesBlob__rightLink'>
  <p>View services </p>
  </Link>
</div>
        </div>
        </div>
        </div>
    )
}

export default LandingServicesCards
