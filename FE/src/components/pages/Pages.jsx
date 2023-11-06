import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../common/header/Header';
import Home from '../home/Home';
import Details from '../details/details';
import Signin from '../signin/Signin';
import Shop from '../Shop/Shop';
import Genre from '../Genre/Genre';
import Cart from '../Cart/Cart';
import Footer from '../common/footer/Footer';
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:slug' component={Details} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/genre/:id' component={Genre} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
