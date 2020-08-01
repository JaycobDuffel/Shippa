import React from 'react';
import { AppBar } from '@material-ui/core';
import Login from './Login.js'
import Signup from './Signup.js'

export default function Nav() {
    return (
    
        <div>
            <AppBar>

                <Login to="./Login.js"> Login </Login>
                <p> Register </p>
                <div> </div>
            </AppBar>
           
        </div>
    )
}