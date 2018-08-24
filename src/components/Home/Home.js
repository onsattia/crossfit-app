import React, { Component, Fragment } from 'react';
import './Home';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="Home_card">
                    <img src="img_avatar.png" alt="Avatar" />
                    <div class="container">
                        <h4><b>WOD</b></h4> 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;