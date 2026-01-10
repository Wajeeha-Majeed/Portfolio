import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// icons
import webIcon from "../assets/services/responsive-image.png";
import landingIcon from "../assets/services/service-img2.png";
import uiIcon from "../assets/services/service-img3.png";

const servicesData = [
  {
    title: "Responsive Website Design",
    description:
      "Clean, modern and mobile-friendly websites that work perfectly on all devices.",
    icon: webIcon,
  },
  {
    title: "Landing Page Creation",
    description:
      "High-converting landing pages with clean UI and clear structure.",
    icon: landingIcon,
  },
  {
    title: "UI Components & Interactivity",
    description:
      "Interactive UI components using JavaScript for better user experience.",
    icon: uiIcon,
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <Container>
        <h1 className="section-title fw-bold">What Services I Offer</h1>
        <div className="container-fluid fw-normal" style={{ display: 'flex', justifyContent: 'center', fontSize: '18px', margin: '20px 0' }}>
          <p>Explore the services I offer to enhance and transform your website.</p>
        </div>
        <Row className="g-4 mt-5">
          {servicesData.map((service, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card data-aos="fade-up" className="service-card">
                <Card.Body>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="service-icon"
                  />
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
