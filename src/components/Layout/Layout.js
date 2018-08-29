import React from 'react';
import Aux from '../../hoc/Aux';
import Navigationbar from '../Navbar/Navbar';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Navigationbar authUser={props.authUser}/>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;