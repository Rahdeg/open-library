import React from 'react'
import { useState,useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'



const Signin = () => {

  const [formValid, setFormValid] = useState(false);

  const [form, setForm] = useState({
  
          email: "",
          password: ""
      });
  
    useEffect(() => {
        if (
        form.email !== '' &&
        form.password !== '') 
        {
          setFormValid(true)
        } else {
          setFormValid(false)
        }
  
  
  }, [form])
  
  
      const handlesubmit=(e)=>{
        e.preventDefault();
        sessionStorage.setItem('deriveinput',JSON.stringify({...form}))
        toast.success(`Welcome to the library ${form.name}`)
        setTimeout(() => {
          window.location='/dashboard'
        }, 2000);
       
        
        }
  
      const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  

  return (
    <div>
    <ToastContainer />
    <main class="pa4 black-80 ">
  <form class="measure center" onSubmit={handlesubmit}>
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0 mt6">
      <legend class="f4 fw6 ph0 mh0 tc white ">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6 white" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" onChange={handleChange}/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6 white" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={handleChange}/>
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer white"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input class="b ph3 pv2 input-reset center ba b--black bg-transparent grow pointer f6 flex" 
       className= {formValid?"auth_signup-active":"auth_signup-submit"} type="submit" value="Sign in" disabled={!formValid}/>
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black  db white">Sign up</a>
      <a href="#0" class="f6 link dim black db white">Forgot your password?</a>
    </div>
  </form>
</main>
    
    </div>
  )
}

export default Signin