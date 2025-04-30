import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [validated, setValidated] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    // Mock submission - in a real app, you'd send this to your backend
    setSubmitMessage({ 
      type: "success", 
      text: "Thank you for your message. We'll get back to you shortly!"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setValidated(false);
  };
  
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center mb-5">
            Have questions about InventPro? We're here to help! Fill out the form below
            and our team will get back to you as soon as possible.
          </p>
        </Col>
      </Row>
      
      {submitMessage && (
        <Row className="mb-4">
          <Col>
            <Alert variant={submitMessage.type}>
              {submitMessage.text}
            </Alert>
          </Col>
        </Row>
      )}
      
      <Row>
        <Col lg={6} className="mb-4">
          <div className="contact-info p-4 bg-light rounded">
            <h3 className="mb-4">Get in Touch</h3>
            
            <div className="mb-4">
              <h5>Office Address</h5>
              <p className="mb-0">123 Inventory Lane</p>
              <p className="mb-0">Suite 456</p>
              <p>Business District, NY 10001</p>
            </div>
            
            <div className="mb-4">
              <h5>Contact Information</h5>
              <p className="mb-0"><strong>Email:</strong> support@inventpro.com</p>
              <p className="mb-0"><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday - Friday, 9AM - 5PM EST</p>
            </div>
            
            <div>
              <h5>Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="/" className="text-decoration-none">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="/" className="text-decoration-none">
                  <i className="bi bi-twitter fs-4"></i>
                </a>
                <a href="/" className="text-decoration-none">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="/" className="text-decoration-none">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
        
        <Col lg={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="contactName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              
              <Col md={6} className="mb-3">
                <Form.Group controlId="contactEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3" controlId="contactSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-4" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your message"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your message.
              </Form.Control.Feedback>
            </Form.Group>
            
            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;