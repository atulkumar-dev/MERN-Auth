import { useState } from "react";
import Input from "../components/Input"


export default function Login() {

  //state to manage error to print in paragraph tag
  const[error, setError] = useState("")

  //state to manage user entered data in an object called "data"
  const[data, setData]= useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  //function called when user submit form
  function handleSubmit(event){

    //prevent default form submission behavior which refreshes the page
    event.preventDefault();
    
    //reset error state to clear previous errors when user submits again
    setError("");

    //check if password is less than 4 characters
    if(data.password.length<4){
      setError("Password should be greater than 4 characters")
    }

    //check if passwords match
    if(data.password !== data.confirmPassword){
      setError("Passwords don't match")
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

              {/* Display error message in a paragraph tag if there is an error */}
              {error && (<p className=" text-red-800 text-sm">{error}</p>)}

              <button type="submit"  className='bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold px-4 py-2 transition w-full rounded-md'>
                Sign In  
              </button>
              
            </form>

          </div>

        </div>
      </div>
    </>

)
 
}

