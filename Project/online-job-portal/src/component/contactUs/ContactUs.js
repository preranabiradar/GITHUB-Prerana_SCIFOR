import React, { useState } from "react";
import "./ContactUs.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us-page">
        <Container>
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-description">
            Have any questions or need assistance? We’re here to help. Let us
            know how we can assist you.
          </p>

          <Col className="contact-info-section mb-5">
            <Row md={4} className="contact-info">
              <FaEnvelope className="contact-icon" />
              <h4>Email Us</h4>
              <p>support@jobportal.com</p>
            </Row>
            <br />

            <Row md={4} className="contact-info">
              <FaPhoneAlt className="contact-icon" />
              <h4>Call Us</h4>
              <p>+123 456 7890</p>
            </Row>
            <br />
            <Row md={4} className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <h4>Visit Us</h4>
              <p>123 JobPortal St., Tech City, USA</p>
            </Row>
          </Col>

          <Row className="mb-5">
            <Col md={8} className="mx-auto">
              {!submitted ? (
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Form.Group controlId="formName" className="mb-4">
                    <Form.Label className="floating-label">
                      Your Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      placeholder=" "
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Label className="floating-label">
                      Your Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      placeholder=" "
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label className="floating-label">
                      Your Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      rows={5}
                      placeholder=" "
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="submit-button"
                  >
                    Send Message
                  </Button>
                </Form>
              ) : (
                <div className="thank-you-message">
                  <h2>Thank you for contacting us!</h2>
                  <p>We’ll get back to you soon.</p>
                </div>
              )}
            </Col>
          </Row>

          {/* Google Maps Embed */}
          <Row className="map-section">
            <Col md={12}>
              <iframe
                title="JobPortal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8364040834816!2d-122.40184838519833!3d37.79366727975725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dbf4b5e7%3A0xa62f67f6e10bfbeb!2sTech%20City%20St.%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1634289182751!5m2!1sen!2s"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="google-map"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
