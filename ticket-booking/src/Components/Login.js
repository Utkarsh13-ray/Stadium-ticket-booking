import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { BsPersonFill } from 'react-icons/bs';
import signin from './signin-image.jpg'
import { RiLockPasswordFill } from 'react-icons/ri';
import {

  Link
} from "react-router-dom";
export default function Login(props) {
  let history=useHistory();
  const [Credentials, setCredentials] = useState({email:"",password:""});
  const handleSubmit=async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
          method: 'POST', 
      
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:Credentials.email,Password:Credentials.password})
        });
        const json=await response.json(); 
        console.log(json);
        if(json.success){
            //redirect
            localStorage.setItem('token',json.authtoken);
            history.push('/');
            window.location.reload();
            setTimeout(() => {
              alert("Logged in successfully")
            }, 2000); 
            // props.showAlert("Logged in successfully","green");

        }else{
            //  props.showAlert("Invalid credentials","red");
            setTimeout(() => {
              alert("Invalid credentials")
            }, 1000); 
      
        }
  }
  const onChange=(e)=>{
      setCredentials({...Credentials,[e.target.name]:e.target.value})
     }
  return (
    <div className='flex items-center w-full h-[50rem]  bg-gray-200 justify-center'>
    <div className='flex flex-col lg:flex-row bg-white w-2/3 h-2/3 rounded-md justify-around items-center' >
    <div className='flex-col justify-center items-center space-y-4'>
               <img src={signin} alt=""></img>
               <Link to='/signin' className=''>New user?Create new account</Link>
          </div>
          <div className='flex-col justify-center items-cente space-y-10 '>
                     <div className='text-3xl font-bold'> Sign In</div>
                     {/* <div className='flex text-gray-300 h-10 w-56 bg-white items-center   align-middle'>
                 <div className='pl-2 text-xl'><input className='focus:outline-none'  size="10" type={'text'} placeholder='Email here'></input></div>
              </div> */}
              
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-56 items-center   align-middle'>
                <BsPersonFill/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'email'} placeholder='User Email' onChange={onChange} name="email" id="email" aria-describedby="emailHelp"></input></div>
              </div>
              </div>
              <div className='flex border-b-black border-b-2 py-2 my-2'>
                <div className='flex  h-4 w-56 items-center   align-middle'>
                <RiLockPasswordFill/>
                 <div className='pl-2 text-l=md'><input className='focus:outline-none active:text-black'  size="12" type={'Password'} placeholder='password' onChange={onChange} name="password" id="password"></input></div>
              </div>
              </div>
           
              <div className='flex bg-blue-300 w-20 h-10 items-center justify-center rounded-md'>
                <button className='text-center' onClick={handleSubmit}>Log in</button>
              </div>
          </div>
         
    </div>
    </div>
  )
}
