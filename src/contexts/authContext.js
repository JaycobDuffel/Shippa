import React, { createContext, useState, useContext } from 'react';
import _ from 'lodash';

export const AuthContext = createContext();

const users = [
  {
    "id": 1,
    "name": "Shippa",
    "email": "test@example.com",
    "password": "12345"
  },
  {
    "id": 2,
    "name": "Shippa",
    "email": "test2@example.com",
    "password": "12345"
  }
]

const AuthContextProvider = (props) => {

  //destructure values from the app context
  const authUser = JSON.parse(localStorage.getItem('authUser'))

  const login = (email, password) => {
    const newUser = { email, password }
    users.map((user) => {
      if(user.email === email && user.password === password) {
        localStorage.setItem('authUser', JSON.stringify(user)) // make sure to remove on logout
        console.log('success')
      }
    })
  };

  return (
    <AuthContext.Provider value={{authUser, login}}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;