import React from 'react'
import withAuthorization from '../../hoc/withAuthorization';
const members = (props) => (
    <div>
        <h1>List of Members</h1>
    </div>
);

const authCondition = (authUser) => !!authUser 
//  && authUser.role === 'ADMIN';;

export default withAuthorization(authCondition)(members);