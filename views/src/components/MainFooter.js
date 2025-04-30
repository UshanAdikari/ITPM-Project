import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <Container className='main-footer' fluid>
      <Row>
        <Col sm={3} className='shop-summary'>
          <h2>INVENTPRO</h2>
          <p>InventPro is a comprehensive inventory management system designed to streamline stock control, track product movement, 
            optimize reorder points, and provide real-time analytics for businesses seeking efficient supply chain management and improved operational workflows.</p>
        </Col>
        <Col sm={2}>
          <h2>Policy Info</h2>
          <ul>
            <li>
              <Link to='/privacy-policy'>Privacy policy</Link>
            </li>
            <li>
              <Link to='/terms-of-sale'>Terms of sale</Link>
            </li>
            <li>
              <Link to='/terms-of-use'>Terms of use</Link>
            </li>
            <li>
              <Link to='/report-product'>Report product</Link>
            </li>
            <li>
              <Link to='/policies'>Some policy</Link>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <h2>Company</h2>
          <ul>
            <li>
              <Link to='/about-us'>About us</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/introduction'>Introduction</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact-us'>Contact us</Link>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <h2>Business</h2>
          <ul>
            <li>
              <Link to='/sell-with-us'>Sell with us</Link>
            </li>
            <li>
              <Link to='/advertisement'>Advertisement</Link>
            </li>
            <li>
              <Link to='/terms-of-use'>Terms of use</Link>
            </li>
            <li>
              <Link to='/affiliate'>Affliciate sys</Link>
            </li>
            <li>
              <Link to='/deal-of-the-day'>Deal of the day</Link>
            </li>
          </ul>
        </Col>
        <Col sm={3}>
          <h2>Subscribe</h2>
          <div className='signup'>
            <div className='title'>
              <span className='signup-icon'>S</span>
              <p>Sign up for our Newsletter</p>
            </div>
            <Link to='/newsletter-signup' className='signup-1b'>
              SIGN UP
            </Link>
            <br />
            <Link to='/update-preferences' className='signup-2b'>
              Update your preferences »
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainFooter;