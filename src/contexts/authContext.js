import React, { createContext } from 'react';

export const AuthContext = createContext();



// const users = [
//   {
//     "id": 1,
//     "name": "Shippa",
//     "email": "test@example.com",
//     "password": "12345"
//   },
//   {
//     "id": 2,
//     "name": "Shippa",
//     "email": "test2@example.com",
//     "password": "12345"
//   }
// ]

const getUsers = async () => {
  const data = await fetch("http://localhost:5000/users", {
    headers: { "Content-Type": "application/json"},
  })
  const users = await JSON.stringify(data)
  return users
}

const users = getUsers()
console.log(users)


const AuthContextProvider = (props) => {
  
  
  //destructure values from the app context
  const authUser = JSON.parse(localStorage.getItem('authUser'))

  const signup = (name, email, password, confirmPassword) => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const newUser = {name, email, password}
        // users.push(newUser)
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
      if (email === '' || password === '') {
        alert('Please fill out the mandatory fields')
      } else if(user.email === email && user.password === password) {
        localStorage.setItem('authUser', JSON.stringify(user))
      } else {
        alert('username or password are not correct')
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