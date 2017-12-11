import React, { Component } from 'react';

function formatName(user){
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Calvin',
    lastName: 'Settachatgul',
};

function getGreeting(user){
    if( user ){
        return <h1> Hello, {formatName(user)}!</h1>
    }
    return <h1> Hello, Stranger!</h1>
}

const userElement = (
    <div className="User">
        {getGreeting(user)};
    </div>
);

class User extends Component {
  render() {
    return userElement;
  }
}

export default User;

