import React , {useContext, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from '../../providers/UserContextProvider';

function LoginPage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        alert("Logged in Successfully")
        navigate('/createprofile')
      }else{
        alert("Login Failed")
      }
    }
    catch(error){
      console.error("Error during login",error)
      if(error.message==='Failed to fetch'){
        alert("Failed to connect to the server. Please check your internet connectivity")
      }
      else{
        alert("Login Failed")
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center md:min-h-screen bg-pink-200 md:w-[40%]">
        <div className="md:hidden">
          <img src="12.png" alt="Mobile Image" className="w-full h-auto" />
        </div>
        <div className="hidden md:block">
          <div className='flex flex-col pl-20 text-bold text-3xl text-rose-950'>
            <div>
              A Creative life is an Amplified life.
            </div>
            <div>
            </div>
          </div>
          <img src="10.png" alt="Desktop Image" className="w-auto h-auto" />
          <div className='flex justify-center p-0 text-rose-950'>
            Art made by Sameer
          </div>
        </div>

      </div>
      <div className="w-full md:w-[60%] bg-white rounded-lg shadow-lg p-16 md:p-20 lg:p-40 relative">
        <div className="absolute top-0 right-0 mr-8 mt-8 hidden md:block">
          Not a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to='/signup'>
            Sign Up
            </Link>
            </span>
        </div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold pb-10 text-gray-800">
            Sign In to Imajinn
          </h1>
          {/* <p className="text-red-500">Username has already been taken</p> */}
        </div>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center mb-6">
              We are glad to have you back. Keep Imajinning!
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
        </form>
        <div className="mt-3 md:hidden">
          Not a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
          <Link to='/signup'>
            Sign Up
            </Link>
          </span>
        </div>
        <p className="text-gray-600 mt-4 text-sm text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  )
}

export default LoginPage