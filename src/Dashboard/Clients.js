import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Clients = () => {
    const [books, setbooks] = useState([]);
    const url= "https://fakerapi.it/api/v1/companies?_quantity=12"

    useEffect(() => {
      axios.get(url)
      .then(response=>{
        if (response.status===200) {
          toast.success('CLients loaded successfully')
          setbooks(response.data.data)
        } else {
          toast.error('no data found')
        }
      })
      .catch(err=>{
        toast.error('something went wrong')
        })

    }, [])
    
    console.log(books)
  

    let Details=sessionStorage.getItem('deriveinput')
    let getDetails=JSON.parse(Details)
  return (
    <div className=' fl w-100 pa2'>
    <div className='fl w-20 pa2 ba br4 kck white h-100 '>
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
   
    <div className='tc flex flex-wrap'>
    <ToastContainer />
   
    {
      books? books.map((book,idx)=>(

        <article class="mw5  center ck br3 pa3 pa4-ns mv3 ba  b--black-10 w-25 mr2 " key={idx} >
                <div class="tc">
                <img src={book.image} class="br-100 h3 w3 dib" alt="Pho of a kitty staring at you"/>
              
                  <hr class="mw3 bb bw1 b--black-10"/>
                </div>
                <p class="lh-copy measure center white f6 black-70">
                {book.name}
                </p>
                <p class="lh-copy measure white center f6 black-70">
                {book.phone}
              </p>
              <p class="lh-copy measure white center f6 black-70">
              {book.vat}
              </p>
              <p class="lh-copy measure  white center f6 black-70">
              {book.country}
              </p>
              </article>

      )):null
    }
                
        

    

    </div>
    
    </div>
  )
}

export default Clients