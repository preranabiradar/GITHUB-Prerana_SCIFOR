import React from "react";
import "./AboutUs.css";
import JobP from "../images/jobp.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../navbar/Navbar";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="about-us-page">
        <Container>
          <h1 className="about-title">About Us</h1>

          <Row className="mb-5">
            <Col md={12}>
              <p className="about-intro">
                Welcome to <strong>JobPortal</strong>, your go-to platform for
                finding the best job opportunities tailored for you. Our mission
                is to connect talented individuals with top employers, bridging
                the gap between job seekers and their dream careers.
              </p>
            </Col>
          </Row>

          {/* Our Mission Section */}
          <Row className="mission-section mb-5">
            <Col md={6}>
              <h2 className="section-title">Our Mission</h2>
              <p className="section-content">
                At JobPortal, we strive to help job seekers from all backgrounds
                find meaningful employment by providing access to thousands of
                job opportunities. We aim to empower individuals and transform
                businesses by creating a seamless platform for recruitment and
                career growth.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={JobP}
                alt="Mission Image"
                className="img-fluid section-image"
              />
            </Col>
          </Row>

          {/* Our Team Section */}
          <Row className="team-section mb-5">
            <h2 className="section-title text-center">Meet Our Team</h2>
            <br />
            <p className="text-center section-content">
              We are a team of passionate individuals committed to your success.
            </p>
            <br />
            <Col md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>CEO & Founder</Card.Text>
                  <p className="team-bio">
                    John has over 20 years of experience in the tech industry
                    and is dedicated to creating better job solutions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <br />
            <Col md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>CTO</Card.Text>
                  <p className="team-bio">
                    Jane leads the tech team at JobPortal, driving innovation
                    and building a reliable platform for our users.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <br />
            <Col md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <Card.Body>
                  <Card.Title>Michael Lee</Card.Title>
                  <Card.Text>Head of Marketing</Card.Text>
                  <p className="team-bio">
                    Michael oversees all marketing efforts, ensuring that
                    JobPortal reaches a global audience.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Our Values Section */}
          <Row className="values-section mb-5">
            <h2 className="section-title">Our Core Values</h2>
            <br />
            <Col md={4}>
              <div className="value-box">
                <h3>Innovation</h3>
                <p>
                  We are continuously improving and implementing the latest
                  technologies to offer a cutting-edge platform.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="value-box">
                <h3>Integrity</h3>
                <p>
                  Honesty and transparency are at the core of everything we do,
                  ensuring trust between employers and job seekers.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="value-box">
                <h3>Empowerment</h3>
                <p>
                  We empower individuals to find careers that align with their
                  passion, skills, and goals.
                </p>
              </div>
            </Col>
          </Row>

          {/* Contact Us Section */}
          <Row className="contact-section">
            <Col md={12}>
              <h2 className="section-title">Contact Us</h2>
              <p className="section-content">
                If you have any questions or want to get in touch, feel free to{" "}
                <a href="mailto:support@jobportal.com">contact us</a> anytime.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;
