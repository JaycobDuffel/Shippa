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

  const signup = (name, email, password, confirmPassword) => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const newUser = {name, email, password}
        users.push(newUser)
        login(email, password)
      } else {
        alert('Passwords do not match')
      }
    } else {
      alert('Please fill out the mandatory fields')
    }
  }

  const login = (email, password) => {
    users.map((user) => {
      if(user.email === email && user.password === password) {
        localStorage.setItem('authUser', JSON.stringify(user))
      }
    })
  };

  const logout = () => {
    localStorage.removeItem('authUser')
  };

  return (
    <AuthContext.Provider value={{authUser, login, logout, signup}}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;