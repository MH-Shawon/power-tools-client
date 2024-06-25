import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='p-5 bg-light'>
            <Container>
                <h2 className='mb-5 text-4xl font-bold text-center'>About Us</h2>
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Why Choose Us?</Card.Title>
                                <Card.Text>
                                    <strong>Quality Commitment:</strong> We offer a curated selection of top brands known for their reliability and performance. Each tool is chosen for its superior craftsmanship and durability.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Extensive Product Range</Card.Title>
                                <Card.Text>
                                    From cordless drills and impact wrenches to air compressors and vacuum cleaners, our comprehensive catalog covers all your power tool needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Competitive Pricing</Card.Title>
                                <Card.Text>
                                    We believe in making quality tools accessible to everyone, offering competitive prices without compromising on quality.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Expert Advice and Support</Card.Title>
                                <Card.Text>
                                    Our knowledgeable team is always ready to assist you. Whether you need help selecting the right tool or advice on maintenance, we're here to ensure a seamless shopping experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Fast and Reliable Shipping</Card.Title>
                                <Card.Text>
                                    Our efficient shipping process ensures your tools arrive quickly and safely, so you can get to work without delay.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Secure Shopping</Card.Title>
                                <Card.Text>
                                    Your trust is our priority. Our website uses the latest security measures to protect your personal and payment information.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} className="mb-4">
                        <Card className="shadow-sm h-100">
                            <Card.Body>
                                <Card.Title>Customer Satisfaction</Card.Title>
                                <Card.Text>
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

export default About;
