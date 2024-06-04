import React from "react";
import axios from "axios";

export default class ListUser extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({ users: res && res.data && res.data.data ? res.data.data : []

    });
  }

  render() {
    let { users } = this.state;
    return (
      <div>
        <h1>List of Users</h1>
        <div>
            {users && users.length >0 && users.map((user, index) => {
                return(
                    <div key={index}>
                        {index +1} - {user.first_name} {user.last_name}
                    </div>
                )   
            })
            }
        </div>
      </div>
    );
  }
}