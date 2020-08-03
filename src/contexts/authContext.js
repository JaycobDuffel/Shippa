import React, { createContext } from 'react';

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
    users.map((user) => {
      if(user.email === email && user.password === password) {
        localStorage.setItem('authUser', JSON.stringify(user))
        console.log('success')
      }
    })
  };

  const logout = () => {
    localStorage.removeItem('authUser')
  };

  return (
    <AuthContext.Provider value={{authUser, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;