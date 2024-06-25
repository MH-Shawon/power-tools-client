import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaCubes, FaHandsHelping, FaShieldAlt, FaShippingFast, FaSmile, FaTag } from 'react-icons/fa';

const About = () => {
    return (
        <div  style={{ padding: '50px 50px', backgroundColor: '#f8f9fa' }}>
            <Container>
                <h2 style={{ marginBottom: '30px', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>About Us</h2>
                <Row>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaAward style={iconStyle} /> Quality Commitment</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    We offer a curated selection of top brands known for their reliability and performance. Each tool is chosen for its superior craftsmanship and durability.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaCubes style={iconStyle} /> Extensive Product Range</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    From cordless drills and impact wrenches to air compressors and vacuum cleaners, our comprehensive catalog covers all your power tool needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaTag style={iconStyle} /> Competitive Pricing</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    We believe in making quality tools accessible to everyone, offering competitive prices without compromising on quality.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaHandsHelping style={iconStyle} /> Expert Advice and Support</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    Our knowledgeable team is always ready to assist you. Whether you need help selecting the right tool or advice on maintenance, we're here to ensure a seamless shopping experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaShippingFast style={iconStyle} /> Fast and Reliable Shipping</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    Our efficient shipping process ensures your tools arrive quickly and safely, so you can get to work without delay.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaShieldAlt style={iconStyle} /> Secure Shopping</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    Your trust is our priority. Our website uses the latest security measures to protect your personal and payment information.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} style={{ marginBottom: '20px' }}>
                        <Card style={cardStyle}>
                            <Card.Body>
                                <Card.Title style={cardTitleStyle}><FaSmile style={iconStyle} /> Customer Satisfaction</Card.Title>
                                <Card.Text style={cardTextStyle}>
                                    We stand behind the quality of our products and services. If you're not completely satisfied with your purchase, our hassle-free return policy makes it easy to get the support you need.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: 'none'
};

const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#007bff',
    display: 'flex',
    alignItems: 'center'
};

const iconStyle = {
    marginRight: '10px'
};

const cardTextStyle = {
    fontSize: '1rem',
    color: '#555'
};

export default About;
