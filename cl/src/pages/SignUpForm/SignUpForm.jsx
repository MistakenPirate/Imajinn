import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:"",
    username: "",
    email:"",
    password: "",

  });


  const [isTermsChecked,setIsTermsChecked] = useState(false)

  const handleChange = (e) => {
    if(e.target.type === 'checkbox'){
      setIsTermsChecked(e.target.checked)
    }
    else{
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isTermsChecked){
      alert("Please accept the Terms and Conditions before proceeding")
      return
    }
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // console.log(response)
    
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert("Registered Successfully");
        navigate('/createprofile')
        window.location.reload()
      } else {
        // console.log(response)
        alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      if(error.message == "Failed to fetch"){
        alert("Failed to connect to the server. Please check your internet connectivity")
      }
      else{
        alert("Registration Failed");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="flex flex-col justify-center md:min-h-screen bg-orange-300 md:w-[40%]">
        <div className="md:hidden">
          <img src="11.png" alt="Mobile Image" className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:block">
          <div className='flex flex-col pl-20 text-bold text-4xl text-rose-950'>
            <div>
              Discover the world's top
            </div>
            <div>
              Designers and Creatives.
            </div>
          </div>
          <img src="8.png" alt="Desktop Image" className="w-auto h-auto" />
          <div className='flex justify-center p-0 text-rose-950'>
            Logo made by Sameer
          </div>
        </div>
      </div>
       <div className="w-full md:w-[60%] bg-white rounded-lg shadow-lg p-16 md:p-20 lg:p-40 lg:pt-16 relative">
         <div className="top-0 right-0 mr-8 mt-8 hidden md:block absolute">
           Already a member?{" "}
           <span className="text-purple-700 cursor-pointer hover:underline">
             <Link to='/login'>
             Sign In
             </Link>
             </span>
         </div>
         <div className="mb-4">
           <h1 className="text-3xl font-bold pb-10 text-gray-800">
             Sign up to Imajinn
           </h1>
           {/* <p className="text-red-500">Username has already been taken</p> */}
         </div>
         <form onSubmit={handleSubmit}>
           <div className="md:flex justify-between">
             <div className="mb-4 md:mr-2">
               <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="mb-4 md:ml-2">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="6+ Characters"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="flex items-center mb-6">
            <input 
            type="checkbox" 
            id="terms" 
            className="mr-2 leading-tight" 
            checked={isTermsChecked}
            onChange={handleChange}
            />
            <label htmlFor="terms" className="text-gray-700">
              Creating an account means you're okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-3 md:hidden">
          Already a member?{" "}
          <span className="text-purple-700 cursor-pointer hover:underline">
            <Link to='/login'>
              Login
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

export default SignUpForm