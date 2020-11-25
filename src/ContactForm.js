import React, {useState} from 'react'
import './ContactForm.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function ContactForm() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        
        <div className="contact__formLanding ">
            <div className="gradient__canvasContact mb-4">
                <div className=" row canvas__contactInfo">
                    <div className="col-9 canvas__contactInfo__right">
                        <h2>Ready to take your business to the next level?<br/> Let’s talk.</h2>
                    </div>
                    <div className="col-sm-3 canvas__contactInfo__left">
                    <Button className="" variant="outline-light" size="lg" block onClick={handleShow}>Contact Us</Button>
                    </div>
                   
                </div>
            </div>
        

            <Modal

        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
          <div className="modal__contactForm">
        <Modal.Header closeButton >
          <Modal.Title className="modal__contactTitle" >Let's Work Together!</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Control className="ContactForm__modalInput" type="text" placeholder="Email address" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        <Form.Control className="ContactForm__modalInput" type="text" placeholder="First Name" required/>
        <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button onClick={handleSubmit} type="submit" variant="secondary" size="lg" block >Submit</Button>
        </Modal.Footer>
          <p>We respect privacy. We don't spam</p>
        </div>
      </Modal>
    

        </div>
        
    )
}

export default ContactForm
