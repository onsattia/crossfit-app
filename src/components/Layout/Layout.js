import React from 'react';
import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Navbar authUser={props.authUser}/>

        <main>
            {props.children}
        </main>

    </Aux>
);

export default layout;