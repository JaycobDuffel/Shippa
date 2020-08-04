import React, { createContext } from 'react';

export const AuthContext = createContext();


//get all users from database, return as array
const getUsers = async () => {
  const data = await fetch("http://localhost:5000/users", {
    headers: { "Content-Type": "application/json"},
  }).then( async (response) => {
    const users = await response.json()
    return users
  })
  return data
}
//get a user based on inputted email and return
const getUser = async (email) => {
  const users = await getUsers()
  
  const loginUser = users.filter((user) => {
    return user.email === email
  })

  return loginUser[0]
}


const AuthContextProvider = (props) => {

  //destructure values from the app context
  const authUser = JSON.parse(localStorage.getItem('authUser'))

  const signup = async(name, email, password, confirmPassword) => {
    await getUser()
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        login(email, password)
      } else {
        alert('Passwords do not match')
      }
    } else {
      alert('Please fill out the mandatory fields')
    }
  }


  const login = async (email, password) => {    
    if (email === '' || password === '') {
     alert('Please fill out the mandatory fields')
   } 

    const user = await getUser(email)
    if(user) {
      localStorage.setItem('authUser', JSON.stringify(user))
      props.setCheckLogin(true)
    } else if (!user) {
      alert('username or password are not correct')
    }
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