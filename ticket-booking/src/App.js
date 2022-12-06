// import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './Components/About';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Payment from './Components/Payment';

import { useState ,useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Paysuccess from './Components/Paysuccess';
import Booked from './Components/Booked';

function App()  {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  // const getUser=async ()=>{
  //   const response = await fetch(`localhost:5000/api/auth/getuser`, {
  //     method: 'GET', 
  
  //     headers: {
  //       'auth-token':localStorage.getItem('token')
  //     ,
  //     },

  //   });
  //   //eslint-disable-next-line
  //   const json=response.json(); 
  
  //  const newName=json.name;
  //  setnames(newName);
  //  console.log(json);
  //  console.log(response);
  // }
  useEffect(() => {
    
    console.log('hi')
    if(localStorage.getItem('token')){
      // getUser();
    }

    const getUser=async ()=>{
      const response = await fetch(`https://stadium-ticket-booking-production.up.railway.app/api/auth/getuser`, {
        method: 'GET', 
    
        headers: {
          'auth-token':localStorage.getItem('token')
        ,
        },
  
      });

      //eslint-disable-next-line

      const json=await response.json();

      console.log(response);
      console.log(json);
      setNames(json.name)
      setEmail(json.email)
    }
    
    getUser();
  }, [])

  
  
  return (
    <Router>

    <div className='bg-white'>
    {/* <Login/> */}
        <Switch>
          <Route exact path="/">
          <Navbar name={names}/>
           <Home/>
           <About/>
              <Events/>
              <Footer/>
                 {/* <Signup/> */}
          </Route>
         
          <Route exact path="/login" >
            <Login/>
          </Route>
          <Route exact path="/signin" >
            <Signup/>
          </Route>
          <Route exact path="/payment" >
            <Payment name={names} email={email}/>
          </Route>
          <Route exact path="/paysuccess"  >
            <Paysuccess name={names}/>
          </Route>
          <Route exact path="/booked" >
                 <Booked name={names}/>
     
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
