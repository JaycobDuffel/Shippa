import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'
import WholeMap from './components/Map'
import FAQPage from './components/FAQPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ContactUsPage from './components/ContactUsPage'
import AuthContextProvider from './contexts/authContext'
import ScrollToTop from './components/helpers/ScrollToTop'

// import { client } from "./elephantsql.js";


export default function App() {
  const [checkLogin, setCheckLogin] = useState(true)
  return (

    <Fragment>
     <AuthContextProvider checkLogin={checkLogin} setCheckLogin={setCheckLogin}>
      <Router>
        <ScrollToTop>
        <Nav checkLogin={checkLogin} setCheckLogin={setCheckLogin}/>
        <Switch>
          <Route path="/" exact component={WholeMap} />
          <Route path="/faq" exact component={FAQPage} />
          <Route path="/privacy" exact component={TermsOfServicePage} />
          <Route path="/contact" exact component={ContactUsPage} />
        </Switch>
        <Footer/>
        </ScrollToTop>
      </Router>
      </AuthContextProvider>
    </Fragment>
  );
}


