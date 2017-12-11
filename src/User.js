import React, { Component } from 'react';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Calvin',
    lastName: 'Settachatgul',
};

const userElement = (
    <div className="User">
        <h1>
            Hello, {formatName(user)}!
        </h1>
    </div>
);

class User extends Component {
  render() {
    return userElement;
  }
}

export default User;

