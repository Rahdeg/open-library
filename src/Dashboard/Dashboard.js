import React from 'react'
import Barchart from '../Chart/barchart'
import { Link } from 'react-router-dom'
import Doughnut from '../Chart/doughnutchart'
import Piechart from '../Chart/piechart'
import Linechart from '../Chart/linechart'





const Dashboard = () => {
    let Details=sessionStorage.getItem('deriveinput')
    let getDetails=JSON.parse(Details)
    return (
      <div className='fl w-100 pa2 '>
      <div className='fl w-20 pa2 ba br4 kck  white h-100 '>
      <div className='tc'>
      <h2>WELCOME {getDetails.email} </h2>
      </div>
      <hr/>
      <div className='tc'>
      <Link to='/dashboard'>
      <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white kc" href="#0">Dashboard</a>
      </Link>
      </div>
      <div className='tc'>
      <Link to='/team'>
      <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white ck" href="#0">Team Members</a>
      </Link>
      </div>
      <div className='tc'>
     <Link to='/bookstore'>
     <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white ck" href="#0">Bookstore</a>
     </Link>
      </div>
      <div className='tc'>
      <Link to='/clients'>
      <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white ck" href="#0">Clients</a>
      </Link>
      </div>
      <div className='tc'>
      <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white ck" href="#0">RLT</a>
      </div>
      <div className='tc'>
      <a class="f4 link dim ph3 tc pv3 mb4 ba br3 w5 dib white ck" href="#0">Notification</a>
      </div>
      <div className='mt6 tc'>
      <a class="f4 link dim ph3 tc pv3 mb2 ba br3 w5 dib white ck" href="#0">UPGRADE TO PRO</a>
      </div>
      
      </div>
      <div className='fl w-80 pa2 ba br4  h-100 '>
      <div className='flex flex-wrap ph1 ml4 mr5'>
      <Doughnut/>
      <Barchart/>
      <Piechart/>
      <Linechart/>
     
     
      </div>
      
      </div>
      
      </div>
    )
  }
export default Dashboard
