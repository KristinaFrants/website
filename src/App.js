import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import Checkout from '../src/profile/Checkout'
import Login from '../src/profile/Login'
import Payment from './profile/Payment'
import Orders from '../src/profile/Orders'
import Landing from './Landing'
import EachProduct from './EachProduct'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Footer from './Footer';
import NavigationBar from "./Navbar"
import ScrollToTop from "./scrollToTop";


const promise = loadStripe('pk_test_51HgyLuHo57i5kpMGKKELqDAn1MfzNVis10VKnHUKlGamTwWRqp2Z9ueMQkasFygNqvPhHYUkwTRJ8plm51xtB1xL00oihmOVPM');



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser) {
        //the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <ScrollToTop>
        <NavigationBar/>
          <Switch>

          <Route path="/orders">
            <Orders/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Elements stripe= {promise} >
              <Payment/>
            </Elements>
          </Route>

          <Route path="/eachProduct/:id">
            <EachProduct/>
          </Route>

          {/*Default Route*/}
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/">
            <Landing/>
          </Route>

          </Switch>
        <Footer/>
      </ScrollToTop>
    </div>
    </Router>
  );
}

export default App;
