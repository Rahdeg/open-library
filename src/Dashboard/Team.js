import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Team = () => {

  const [customers, setcustomers] = useState([])

    useEffect(() => {
      fetch('https://fakerapi.it/api/v1/persons?_quantity=6')
      .then(response=>response.json())
      .then(user=>{
        if (user) {
          toast.success('Team loaded successfully')
          setcustomers(user.data)
        } else {
          toast.error('no data found')
        } 
      })
        .catch(err=>{
          toast.error('something went wrong')
          })

    }, [])

    console.log(customers)

    let Details=sessionStorage.getItem('deriveinput')
  let getDetails=JSON.parse(Details)
  return (
    <div className='fl w-100 pa2'>
    <div className='fl w-20 pa2 ba br4 kck white h-100 '>
      <div className='tc'>
      <h2>WELCOME {getDetails.emial} </h2>
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
      <div className='tc'>
      <ToastContainer />
      <h1 className='white'>TEAMS</h1>
      <div class="pa4 ">
    <div class="overflow-auto">
      <table class="f6 w-100 mw8 center tc" cellspacing="0">
        <thead className='ba br3 tc' >
          <tr>
            <th class="fw6 bb b--black-20 pv2 tc pb3 pr3 ck ">Fullname</th>
            <th class="fw6 bb b--black-20 pv2 tc pb3 pr3 ck">Email</th>
            <th class="fw6 bb b--black-20 pv2 tc pb3 pr3 ck">Phone no</th>
            <th class="fw6 bb b--black-20 pv2 ml2 tc pb3 pr3 ck">Gender</th>
            <th class="fw6 bb b--black-20 pv2 tc pb3 pr3 ck">Images</th>
          </tr>
        </thead>
        <tbody class="lh-copy">
        {customers? customers.map((customer,idx)=>(
          <tr key={idx}>
          <td class="pv3 pr3 bb b--black-20">
              <p className='white'>
                      <span>{customer.firstname}</span>
  
                      <span>  {customer.lastname}</span> 
              </p>
          </td>
          <td class="pv3 pr3 bb b--black-20 white">{customer.email}</td>
          <td class="pv3 pr3 bb b--black-20 white">{customer.phone}</td>
          <td class="pv3 pr3 bb b--black-20 white">{customer.gender}</td>
          <td class="pv3 pr3 bb b--black-20 white"><img className='tl center w-25 br2' src={customer.image} alt='nn' /></td>
        </tr>
        )) : <hi>loading</hi>
      }
          
        </tbody>
      </table>
    </div>
  </div>
  
      </div>
      
    
    
    </div>
  )
}

export default Team