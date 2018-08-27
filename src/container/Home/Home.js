import React, { Component } from 'react';
import classes from './Home.css';
import Aux from '../../hoc/Aux';
import logo from '../../assets/images/logo.png';

class Home extends Component {
    componentWillMount(){
        console.log('componentWillMount')
    }
    render () {
        return (
            <Aux className={classes.Home}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className={classes.right}>
                        <h2 className={classes.h1}>OPENING HOURS</h2>
                        <ul>
                            <li><strong>Monday-Friday: </strong>10h to 12h - 15h to 20h</li>
                            <li><strong>Saturday: </strong>Rest Day</li>
                            <li><strong>Sunday: </strong>9h to 11h</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.table}>
                   <table>
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
                                <td colSpan="6" className={classes.space}></td>
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
                    </table>
                </div>
            </Aux>
        )
    }
}

export default Home;