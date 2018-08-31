import React, { Component } from 'react';
import withAuthorization from '../../hoc/withAuthorization';
import AuthUserContext from '../../AuthUserContext';
import { Grid } from 'react-bootstrap';
import { db } from '../../firebase';

class Members extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        users: null,
      };
    }
  
    componentDidMount() {
      db.onceGetUsers().then(snapshot =>
        this.setState({ users: snapshot.val() })
      );
    }
  
    render() {  
        const { users } = this.state;
        return (
          <AuthUserContext.Consumer>
            {authUser =>
              <Grid>
                  { !!users && <UserList users={users} /> }
              </Grid>
            }
          </AuthUserContext.Consumer>
        );
    }
  }
  
  const UserList = ({ users }) =>
    <div>
        {Object.keys(users).map(key =>
          <div key={key}>
            {users[key].username}
          </div>
        )}
    </div>

  const authCondition = (authUser) => !!authUser;
  
  export default withAuthorization(authCondition)(Members);