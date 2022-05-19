import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
    <div className='fl w-100 pa2 ba'>
      <div className='flex justify-between'>
      <div className='f3 link dim i white pv2 '>
      <Link className='white pv2 ba br3 bg-dark-blue' to='/'>
      OPEN LIBRARY
      </Link>
      </div>
      <div className=''>
      <input type='search' name='search' placeholder='Type here' className='br2 pv2 ph2 mr2'></input>
      <Link to='/signin'>
      <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-blue" href="#0">Signin</a>
      <a class="f6 link dim ph3 pv2 mb2 br2 dib white bg-hot-pink" href="#0">SignOut</a>
      </Link>
      </div>  
      </div>
      </div>
    </div>
  )
}

export default Navigation