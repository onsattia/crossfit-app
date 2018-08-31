import React from 'react';
import Aux from '../../hoc/Aux';
import { Grid } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Navbar authUser={props.authUser}/>
        <Grid>
            <main>
                {props.children}
            </main>
        </Grid>
    </Aux>
);

export default layout;