import React from 'react';
import './Home.css';
import { Table, Grid, Row, Image, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import withAuthorization from '../../hoc/withAuthorization';

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
                <Row>
                   <Table striped bordered condensed hover>
                        <caption>PLANNING</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td rowSpan="10"></td>
                                <td>Skill Level</td>
                            </tr>
                            <tr>
                                <td>10:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>Mobility</td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr> 
                                <td colSpan="6"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>16:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>17:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20:00</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td>WOD</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Grid>
        )
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(home);