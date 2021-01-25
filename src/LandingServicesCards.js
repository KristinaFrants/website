import React from 'react'
import './LandingServicesCards.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faRocket, faUsers,faSearchDollar } from '@fortawesome/free-solid-svg-icons'; 

function LandingServicesCards() {
    return ( 
      <div className="m-0">
        <h3 className="col mx-auto" style={{borderBottom: "3px solid black",  fontFamily: "Playfair Display, serif"}}>How can we help?</h3>
        <div className="mt-4 ml-2 mr-2 row_cards" style={{border: "15px solid white", borderRadius: "5px"}}>
            <Row className ="">
            <Col sm="3" >
              <Card  className="LandingCardServices__cards" body>
                <CardTitle tag="h5"><b>CI/CD</b></CardTitle>
                <CardText>
                  In software engineering, CI/CD or CICD generally refers to the combined practices of continuous integration and either continuous delivery or deployment. 
                </CardText>
                {/* <Button>Go somewhere</Button> */}
              <div class="flip_card_back">
                <Link to='/home'>
                  <FontAwesomeIcon icon={faDiceD20} className="LandingCardServices__info" />
                </Link>
                  <h5 style={{marginTop:"2%"}}><b>Continuous Integration</b></h5>
                <p> CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, testing and deployment of applications.</p>
              </div>
            </Card>
          </Col>
          <Col sm="3" >
              <Card  className="LandingCardServices__cards" body>
                <CardTitle tag="h5"><b>PWA</b></CardTitle>
                <CardText>
                A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript.
                </CardText>
                {/* <Button>Go somewhere</Button> */}
              <div class="flip_card_back">
                <Link to='/home'>
                  <FontAwesomeIcon icon={faRocket} className="LandingCardServices__info" />
                </Link>
                  <h5 style={{marginTop:"2%"}}><b>Progressive WebApp</b></h5>
                <p>A progressive web application is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.</p>
              </div>
            </Card>
          </Col>
          <Col sm="3" >
              <Card  className="LandingCardServices__cards" body>
                <CardTitle tag="h5"><b>SCRUM</b></CardTitle>
                <CardText>
              Scrum Team is working together to deliver the required product increments. The Scrum framework encourages a high level of communication among team members.
                </CardText>
                {/* <Button>Go somewhere</Button> */}
              <div class="flip_card_back">
                <Link to='/home'>
                  <FontAwesomeIcon icon={faUsers} className="LandingCardServices__info" />
                </Link>
                  <h5 style={{marginTop:"2%"}}><b>Development and Marketing</b></h5>
                <p>Our development is always SEO friendly and follows best market practices to attract and retain visitors via beutiful User Experience and appeling visual composition.</p>
              </div>
            </Card>
          </Col>
          <Col sm="3" >
              <Card  className="LandingCardServices__cards" body>
                <CardTitle tag="h5"><b>R&amp;D</b></CardTitle>
                <CardText>
              Research and Development activities are conducted continuasly to generate new knowledge in order to improve existing products as well as develop new ones.
                </CardText>
                {/* <Button>Go somewhere</Button> */}
              <div class="flip_card_back">
                <Link to='/home'>
                  <FontAwesomeIcon icon={faSearchDollar} className="LandingCardServices__info" />
                </Link>
                  <h5 style={{marginTop:"2%"}}><b>Research and Development</b></h5>
                <p>R&amp;D is an essential function for businesses. Launching new offerings or improving existing ones is a way to remain competitive and make profit on today's Market.</p>
              </div>
            </Card>
          </Col>
          
          </Row>
        </div>
        <div className="LandingServices__blob">
          
            <div className="row ">
              <div className="col LandingServicesBlob__left">
                <h2>Creative Marketing</h2>
                <p>Will drive awareness to your brand using creatinve solutions and help you connect with your audience in the right place and at the right time by implemnting smart tactics and strategies.</p>
                <div className="button_container">
                    <Link to="/home" className='LandingServicesBlob__leftLink'>
                      <p>View services </p>
                    </Link>
                </div>
              </div>

              <div className="col LandingServicesBlob__right">
                <h2>Scalable Development</h2>
                <p>You'll receive a scalable solution for your Website, PWA or Application so that your business is capable of growing and will perfoem well under an increased or expanding workload. </p>
                <div className="button_container">
                   <Link to="/home" className='LandingServicesBlob__rightLink'>
                     <p>View services </p>
                   </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default LandingServicesCards
