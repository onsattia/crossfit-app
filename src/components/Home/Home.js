import React from 'react';
import './Home.css';
import { Grid, Row, Image, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

// import withAuthorization from '../../hoc/withAuthorization';

const home = () => {
        return (
            <Grid>
                <Row>
                    <Col xs={8} md={6}>
                        <Image src={logo} rounded />
                    </Col>
                    <Col xs={8} md={6}>
                        <h3>OPENING HOURS</h3>
                        <ul>
                            <li><strong>Monday-Friday: </strong>10h to 12h - 15h to 20h</li>
                            <li><strong>Saturday: </strong>Rest Day</li>
                            <li><strong>Sunday: </strong>9h to 11h</li>
                        </ul>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://d1s2fu91rxnpt4.cloudfront.net/mainsite/w20180830/thumbnail/a461ae6b35857d6_717970.jpg" />
                    </Col>
                    <Col xs={8} md={4}>
                        <h4>Thursday</h4>
                        <p>
                            For time:<br />
                            21 squat snatches<br />
                            42 push-ups<br />
                            15 squat snatches<br />
                            30 push-ups<br />
                            9 squat snatches<br />
                            18 push-ups
                        </p>
                        <p>
                            Men: 75 lb.<br />
                            Women 55 lb.
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <p><strong>Scaling</strong><br />
                        This couplet is light and fast. Reduce the loading and aim to complete the snatches unbroken. Try to break the push-ups into as few large sets as possible. Intermediate athletes can complete this as prescribed.</p>

                        <p><strong>Beginner Option</strong><br />
                        For time:<br />
                        <strong>15</strong> squat snatches<br />
                        <strong>30 knee</strong> push-ups<br />
                        <strong>12</strong> squat snatches<br />
                        <strong>24 knee</strong> push-ups<br />
                        <strong>9</strong> squat snatches<br />
                        <strong>18 knee</strong> push-ups</p>

                        <p>Men: <strong>45 lb.</strong><br />
                        Women <strong>35 lb.</strong></p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://d1s2fu91rxnpt4.cloudfront.net/mainsite/w20180821/thumbnail/3b9c551aca4cb15_717853.jpg" />
                    </Col>
                    <Col xs={8} md={4}>
                        <h4>Saturday</h4>
                        <p><strong>Rest Day</strong></p>
                    </Col>
                </Row>
            </Grid>
        )
}

// const authCondition = (authUser) => !!authUser;

export default home;