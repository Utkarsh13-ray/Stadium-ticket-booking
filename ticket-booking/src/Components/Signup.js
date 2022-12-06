import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BsPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { RiLockPasswordLine} from 'react-icons/ri';
import { HiLocationMarker} from 'react-icons/hi';
import signup from './signup-image.jpg'
import {

  Link
} from "react-router-dom";


export default function Signup() {
  let history=useHistory();
  const [Credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""});
  const handleSubmit=async (e)=>{
      e.preventDefault();
      const {name,email,password,cpassword}=Credentials;
      if(cpassword===password){
      const response = await fetch("https://stadium-ticket-booking-production.up.railway.app/api/auth/createuser", {
          method: 'POST', 
      
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name,email,Password:password})
        });
        const json=await response.json(); 
        console.log(json);
        if(json.success){
            //redirect
            localStorage.setItem('token',json.authtoken);
            history.push('/');
            window.location.reload();
            setTimeout(() => {
              alert("Registered successfully")
            }, 2000); 
            // props.showAlert("Account created successfully","success");
        }else{
            //  console.log("Invalid credentials","danger");
            setTimeout(() => {
              alert("Invalid credentials")
            }, 1000); 
      
        }
  }

   else{
 console.log("password and confirm password are not same");
}
  }
  const onChange=(e)=>{
      setCredentials({...Credentials,[e.target.name]:e.target.value})
     }
  return (
    <div className='flex items-center w-full h-[80rem]  bg-gray-200 justify-center'>
    <div className='flex flex-col lg:flex-row bg-white w-2/3 h-2/3 rounded-md justify-around items-center' >
          <div className='flex-col justify-center items-cente space-y-10 '>
                     <div className='text-3xl font-bold'>User Sign Up</div>
                     {/* <div className='flex text-gray-300 h-10 w-56 bg-white items-center   align-middle'>
                 <div className='pl-2 text-xl'><input className='focus:outline-none'  size="10" type={'text'} placeholder='Email here'></input></div>
              </div> */}
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-56 items-center   align-middle'>
                <BsPersonFill/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'text'} placeholder='Your name'  onChange={onChange } minLength={5} required name="name" id="name"></input></div>
              </div>
              </div>
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-56 items-center   align-middle'>
                <MdEmail/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="20" type={'email'} placeholder='Email' onChange={onChange } minLength={5} required name="email" id="email"></input></div>
              </div>
              </div>
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-56 items-center   align-middle'>
                <RiLockPasswordFill/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'Password'} placeholder='password' onChange={onChange} minLength={5} required  name="password" id="password"></input></div>
              </div>
              </div>
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-60 items-center   align-middle'>
                <RiLockPasswordLine/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'password'} placeholder='Confirm password'onChange={onChange} minLength={5} required  name="cpassword" id="cpassword"></input></div>
              </div>
              </div>
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-60 items-center   align-middle'>
                <HiLocationMarker/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'text'} placeholder='City'></input></div>
              </div>
              </div>
           
             
              <div>
                
              <input type="checkbox" id="scales" name="scales" checked/>
             <label for="scales"> agree all statements in Terms of service</label>
              </div>
              <div onClick={handleSubmit}className='flex bg-blue-300 w-20 h-10 items-center justify-center rounded-md'>
                <button className='text-center' >Submit</button>
              </div>
          </div>
          <div className='flex-col justify-center items-center '>
               <img src={signup} alt=""></img>
               <Link to='/login' className=''>Already a member</Link>
          </div>
    </div>
    </div>
  )
}
