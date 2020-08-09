import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../src/App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'
import WholeMap from './components/Map'
import FAQPage from './components/FAQPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ContactUsPage from './components/ContactUsPage'
import AuthContextProvider from './contexts/authContext'
import ScrollToTop from './components/helpers/ScrollToTop'
import Distance from './components/NewOrder/Distance';
import Messaging from './components/Chat/Messaging.js';
import Shipments from './components/UserProfile/Shipments';
import { render } from '@testing-library/react';
// import ChatWindow from './components/Chat/ChatWindow'
// import Chat from './components/Chat/TestMessage.js';
import Invoices from './components/UserProfile/Invoices'
import HomePage from './components/HomePage'

export default function App() {
  const [checkLogin, setCheckLogin] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: 53.544388, 
    lng: -113.490929 
});

  const handleOpen = (name) => {
    setShowChat(name);  
  }

  const handleClose = () => {
    setShowChat(false);
  }


  return (
    <Fragment>
     <AuthContextProvider checkLogin={checkLogin} setCheckLogin={setCheckLogin}>
      <Router>
        <ScrollToTop>
        <Nav checkLogin={checkLogin} setCheckLogin={setCheckLogin}/>
        <Switch>
          <Route path="/" exact component={() => <><WholeMap className="map" setShowChat={handleOpen} showChat={showChat} coordinates={coordinates} setCoordinates={setCoordinates} /> 
          <HomePage /> </>}  />
          <Route path="/faq" exact component={FAQPage} />
          <Route path="/privacy" exact component={TermsOfServicePage} />
          <Route path="/contact" exact component={ContactUsPage} />
          <Route path="/shipments" exact component={Shipments} />
          <Route path="/invoices" exact component={Invoices} />
        </Switch>
        {/* <ChatWindow /> */}
        {/* <Distance /> */}

        {showChat  ? <Messaging setShowChat={handleClose} showChat={showChat} /> : ''}
        <Footer/>
        </ScrollToTop>
      </Router>
      </AuthContextProvider>
    </Fragment>
  )
}


