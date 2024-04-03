import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="flex flex-col items-center justify-center md:min-h-screen bg-pink-100 w-50 md:w-full ">
        {/* <div className="">
        <img src="1.png" alt="" />
        </div>
        <div className="absolute">
          Discover the world's top Designers & Creatives.
        </div> */}
        <div className="md:hidden">
          <img src="5.png" alt="Mobile Image" className="w-full h-auto" />
        </div>
        <div className="hidden md:block">
          <img src="1.png" alt="Desktop Image" className="w-full h-auto" />
        </div>
      </div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Sign up to Imajinn
          </h1>
          {/* <p className="text-red-500">Username has already been taken</p> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex">
            <div className="mb-4 md:mr-3">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 md:ml-3">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="mr-2 leading-tight" />
            <label htmlFor="terms" className="text-gray-700">
              Creating an account means you're okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="text-gray-600 mt-4 text-sm text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
