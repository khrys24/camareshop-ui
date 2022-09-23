import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../css/ContactUs.css";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_4rdxq6w";
const TEMPLATE_ID = "template_9egfotn";
const USER_ID = "fuKqh5zVBD6TMEqcx";

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });

  };

  const [result, setResult] = useState(null);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
      .then(function(){ 
        window.location.reload();
        }
     );
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
      
    })
    
    e.target.reset();
    
    
  };

  
  return (
    <div>
      <h2>Contact Us</h2>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail} style={{width:"60%", margin: 'auto'}}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId="name">
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              placeholder="Enter your full name"
              onChange={onInputChange}
              required
            />
         
          </Form.Group>
          <Form.Group as={Col} controlId="email">
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={onInputChange}
              required
            />
          </Form.Group>
        </Row>
        
        <Form.Group controlId="subject">
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
            required
            className='mb-3'

          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
            required
          />
        </Form.Group>

        <Button type="submit" className='mt-3' style={{backgroundColor: '#9c27b0'}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

