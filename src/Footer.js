import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="Footer">
            {/* Footer */}
          <footer className="page-footer font-small mdb-color pt-4 mt-4 mb-4">
            {/* Footer Links */}
            <div className="container text-center text-md-left">
              {/* Footer links */}
              <div className="row text-center text-md-left mt-3 pb-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Eduard Chiticari</h6>
                  <p>Full Stack web Developer with experience working in Agile enviroment. 
                    Been working remotely since 2015 and am familiar with most up to date software and CMS  systems. </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Projects</h6>
                    <p>
                      <Link to="/home">StraussandRamm</Link>
                    </p>
                    <p>
                      <Link to="#!">Kiri.bio</Link>
                    </p>
                    <p>
                      <Link to="#!">StarWars Clone</Link>
                    </p>
                    <p>
                      <Link to="#!">Jecto.PRO</Link>
                    </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Social Profiles</h6>
                  <p>
                    <a href="/home">GitHub</a>
                  </p>
                  <p>
                    <a href="#!">LinkedIn</a>
                  </p>
                  <p>
                    <a href="#!">Facebook</a>
                  </p>
                  <p>
                    <a href="#!"></a>
                  </p>
                </div>
                {/* Grid column */}
                <hr className="w-100 clearfix d-md-none" />
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <FontAwesomeIcon icon={faHome} className="mr-3" /> Hallandale Beach, Fl 33008, US</p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className=" mr-3" /> eduard.kitikari@gmail.com</p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className=" mr-3" /> + 1 571 606 06 06</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Footer links */}
              <hr />
              {/* Grid row */}
              <div className="row d-flex align-items-center">
                {/* Grid column */}
                <div className="col-md-7 col-lg-8">
                  {/*Copyright*/}
                  <p className="text-center text-md-left">© 2021 Copyright:
                    <a href="#">
                      <strong> @EDUARD</strong>
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-5 col-lg-4 ml-lg-0">
                  {/* Social buttons */}
                  <div className="text-center text-md-right">
                    <ul className="list-unstyled list-inline">
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <FontAwesomeIcon icon={faFacebook} className="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <FontAwesomeIcon icon={faTwitter} className="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <FontAwesomeIcon icon={faGooglePlus} className="" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1">
                          <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
            {/* Footer Links */}
          </footer>
          {/* Footer */}
        </div>
    )
}


export default Footer
