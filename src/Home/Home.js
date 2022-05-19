import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
    <div className='bg '>
    <div className=''>
    <h1 className='blue mt0 tc pv3 f-headline'>
    WELCOME TO OPEN LIBRARY
    </h1>
    <h3 className='blue mt0 tc pv1 f-headline'>
    WHERE DREAMS ARE ACHEIVABLE
    </h3>
    <div className='center tc'>
    <Link to='/signin'>
    <a class="f6 link dim ph5 pv4 br3 w8 mb2 dib white bg-dark-blue" href="#0">Explore the library</a>
    </Link>
    </div>
    
   
    
    </div>
    </div>
   
  )
}

export default Home