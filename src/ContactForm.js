import React, {useState} from 'react'
import './ContactForm.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

function ContactForm() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="contact__formLanding ">
            <div className="gradient__canvasContact mb-4">
                <div className=" row canvas__contactInfo">
                    <div className="col-9 canvas__contactInfo__right">
                        <h2>Ready to take your business to the next level?<br/> Let’s talk.</h2>
                    </div>
                    <div className="col-sm-3 canvas__contactInfo__left">
                    <Button className="btn btn-lg " onClick={handleShow}>Contact Us</Button>
                    </div>
                   
                </div>
            </div>
        

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Let's Work Together!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input className="ContactForm__modalInput" type="text" placeholder="Email address"/>
        <input className="ContactForm__modalInput" type="text" placeholder="First Name"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    

        </div>
    )
}

export default ContactForm
