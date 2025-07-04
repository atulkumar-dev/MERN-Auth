import { useState } from "react";
import Input from "../components/Input"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router";


export default function Signin() {


  const navigate = useNavigate();

  //state to manage user entered data in an object called "data"
  const[data, setData]= useState({
    username:"",
    password:"",
  })

  //function called when user submit form
  async function handleSubmit(event){

    //prevent default form submission behavior which refreshes the page
    event.preventDefault();

    try{
        const response = await fetch("http://localhost:80/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

    const result = await response.json()

    if(result.success){
      console.log(result.message)
      toast.success(result.message)
      localStorage.setItem("email",result.email)
      localStorage.setItem("username",result.username)
      setTimeout(() => {navigate("/profile");},2000);

    }
    else{
      console.log(result.message)
      toast.error(result.message)
    }
  }

  catch(err){
    console.log("Error logging in")
    toast.error("Error logging in")
  }  

  }


return (
     <>
      <div className='flex items-center justify-center min-h-screen '>
  <div className='flex w-full max-w-4xl h-96 bg-white rounded-lg shadow-2xl overflow-hidden'>

          {/* Left Side */}
          <div className='w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center p-10'>
            <h2 className='text-4xl font-extrabold mb-6'>Come join us!</h2>
            <p className='text-center mb-6 text-sm leading-relaxed'>
              We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
            </p>
            <button className='bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-5 py-2 rounded-full transition'>
              Don't have an account? <a href="/signup">Signup</a>
            </button>
          </div>

          {/* Right Side */}
          <div className='w-1/2 p-10'>
            <h2 className='text-gray-800 font-bold text-center text-3xl mb-6'>Sign In</h2>

            <form className='space-y-4' onSubmit={handleSubmit}>
              <Input placeholder="Username"
              onChange={(event)=>{
                setData({...data, username: event.target.value})
              }}
              />
              <Input placeholder="Password"
              onChange={(event)=>{
                setData({...data, password: event.target.value})
              }}
              type="password"/>

          

              <button type="submit"  className='bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold px-4 py-2 transition w-full rounded-md'>
                Sign In  
              </button>
              
            </form>

          </div>

        </div>
        <ToastContainer/>
      </div>
    </>

)
 
}

