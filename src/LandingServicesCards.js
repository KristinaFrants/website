import React from 'react'
import './LandingServicesCards.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo,faSyncAlt } from '@fortawesome/free-solid-svg-icons'; 

function LandingServicesCards() {
    return ( 
      <div className="m-0">
        <h3 className="col mx-auto" style={{borderBottom: "3px solid black",  fontFamily: "Playfair Display, serif"}}>How can we help?</h3>
        <div className="mt-4 ml-2 mr-2" style={{border: "15px solid white", borderRadius: "5px"}}>
            <Row>
            <Col sm="3" >
              <Card  className="LandingCardServices__cards" body>
                <CardTitle tag="h5"><b>CI/CD</b></CardTitle>
                <CardText>
                  In software engineering, CI/CD or CICD generally refers to the combined practices of continuous integration and either continuous delivery or deployment. 
                </CardText>
                {/* <Button>Go somewhere</Button> */}
              <div class="flip_card_back">
                <Link to='/home'>
                  <FontAwesomeIcon icon={faSyncAlt} className="LandingCardServices__info" />
                </Link>
                  <h5 style={{marginTop:"2%"}}><b>Continuous Integration</b></h5>
                <p> CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, testing and deployment of applications.</p>
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
                <h2>Creative Marketing</h2>
                <p>We drive awareness to your brand and help you connect with your audience in the right place and at the right time.</p>
                <Link to="/home" className='LandingServicesBlob__leftLink'>
                <p>View services </p>
                </Link>
              </div>

              <div className="col LandingServicesBlob__right">
                <h2>Scalable Development</h2>
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
