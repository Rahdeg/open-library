import React from 'react'
import { Link } from 'react-router-dom'
import chart1 from './5e62f6f4dad6467a6ba6a589_pie sample 3.jpeg'
import chart3 from './i_Bowling-Stats-in-a-Cricket-Match-Line-Graph_full.jpg'
import chart4 from './i_Most-Frequently-Used-Visuals-Pie-Chart_full.jpg'


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
      <div className='flex flex-wrap'>
     <div> <img src={chart1} alt='ff'/></div>
     
     <div className='w-100'>
     <img className='w-50' src={chart3} alt='ff'/>
     <img className='w-50' src={chart4} alt='ff'/>
     </div>
     
      </div>
      
   
     

      
      </div>
      
      </div>
    )
  }
export default Dashboard
