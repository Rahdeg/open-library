import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Bookstore from './Dashboard/Bookstore'
import Team from './Dashboard/Team'
import Home from './Home/Home'
import Signin from './Signin/Signin'
import 'tachyons'
import Protected from './Authentication/Protected'
import Dashboard from './Dashboard/Dashboard'
import Navigation from './Navigation/Navigation'
import Clients from './Dashboard/Clients'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <div>
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
   
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />

        <Route element={<Protected/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/bookstore" element={<Bookstore/>} />
        </Route>
             
      </Routes>
     
  </BrowserRouter>,

    </div>
  )
}

export default App