import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from '../common/header/Header'
import Home from "../home/Home"
import Details from '../details/details'
import Footer from '../common/footer/Footer'
import Signin from "../signin/Signin"
import Signup from "../signup/Signup"
import SignupEmail from "../signupwithemail/SignupEmail"

const Pages = () => {
  return (<>
  <Router>
    <Header />
    <Switch>
     <Route exact path='/' component={Home} /> 
     <Route exact path='/signin' component={Signin} /> 
     <Route exact path='/signup' component={Signup} /> 
     <Route exact path='/signupemail' component={SignupEmail} /> 
        <Route exact path='/' component={Home} /> 
     <Route exact path='/details/:id' component={Details} /> 
    </Switch>
    <Footer />
    </Router>
  </>
  )
}

export default Pages
