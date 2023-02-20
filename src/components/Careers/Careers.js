import './Careers.css'
import React from 'react'
import ToyotaCareer from '../../assets/images/toyota-career.jpg'
import { Col, Row } from 'react-bootstrap'
import CareerTable from '../Career-Table/CareerTable'
const Careers = () => {
  return (
    <div className = 'Careers'>
        <Row className = 'career-head-top'>
            <img src = {ToyotaCareer} className = "AboutCareerImg"></img>
            <Row className = "career_text">
                <div className = 'career_heading'>LAMBTON TRAINING PROGRAM</div>
                <div className = 'career-desc-para'>
                    <Col md = {4}>
                        Jump Start your Career at Toyota Canada.
                    </Col>
                </div>
            </Row>
        </Row>
        <Row className = 'section2'>
            <div className = 'section2inner'>
                <h3 className = 'sec2heading'>The Lambton Training Program is Toyota Canada Inc.’s rotational development program for ambitious, motivated and passionate new grads who are looking for meaningful and challenging work.</h3>
                <p className = 'sec2desc'>This program will give you the opportunity to explore your potential and fuel a unique career path at the largest automotive manufacturer in Canada and one of the most trusted brands in the world. Through this program, you will develop the expertise and skills needed to be successful in roles at Toyota Canada that will continue to grow and advance your career.</p>
            </div>
        </Row>
        <Row className = 'Details'>
            <div className = 'Back_ground'>
                <Col size = {12} md = {8} sm = {12} className = "Back-Desc">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus sem, sagittis sed lacus in, molestie euismod magna. Donec eleifend porta erat, vitae lacinia lorem consectetur non. Quisque malesuada sapien sed tempus posuere. Nunc convallis tellus eu lectus varius gravida. Quisque a nulla ac felis vestibulum facilisis et porta erat. Nunc vitae ante vestibulum, luctus turpis ut, dignissim odio. Ut rhoncus et augue pulvinar pellentesque. Quisque sollicitudin nisi sed ultrices aliquam.</p> */}
                
                

                    <div class="large-col-6 medium-col-6 small-col-4 phone-col-4 Ignition">
                        <h3 className = "heading-4">
                        The Lambton Training Program offers a one of a kind opportunity to:
                        </h3>
                        <ul className = "bullet-list">
                            <li>Learn more about Toyota’s Canadian operations;</li>
                            <li>Develop a deep understanding of our business and industry;</li>
                            <li>Gain a broad base of experiences;</li>
                            <li>Get yourself into gear for a successful career at Toyota!</li>
                        </ul>
                        <p className = "bold igni-desc">
                            Program Description
                        </p>
                        <p>
                            The program looks after the first 3 years of your career at Toyota Canada. During the program, you will be rotated through:
                        </p>
                        <ul className = "bullet-list">
                            <li>Key opportunities in your identified stream (business or technical)</li>
                            <li>Cross functional &amp; stretch assignments</li>
                        </ul>
                    </div>
                </Col>
            </div>
        </Row>

        <Row>
            <div className = 'Table-Outer-Head'>
                Customized Career Opportunities
            </div>
        </Row>
        <div className="contain">
            <CareerTable/>
        </div>
    </div>
  )
}

export default Careers