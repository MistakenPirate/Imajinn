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
    <div className="flex flex-col items-center md:flex-row min-h-screen w-full overflow-hidden border ">
      <div className="flex flex-col items-center justify-center md:min-h-screen bg-pink-100 w-full ">
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
      <div className="w-screen bg-white rounded-lg shadow-lg p-20 md:p-36 relative ">
        <div className="absolute top-0 right-0 mr-8 mt-4 hidden md:block">
          Already a member?{" "}
          <span className="text-purple-700 cursor-pointer">Sign in</span>
        </div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800 pb-5">
            Sign up to Imajinn
          </h1>
          {/* <p className="text-red-500">Username has already been taken</p> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex justify-between mb-2 w-full">
            <div className="">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold md:text-left md:pl-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-xl w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="m-2"></div>
            <div className="">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold md:text-left md:pl-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="appearance-none rounded-xl w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 md:text-left md:pl-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-xl w-full md:max-w[90%]  py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2 md:text-left md:pl-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-xl py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline w-full md:max-w[90%]"
            />
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="mr-2 leading-tight" />
            <label htmlFor="terms" className="text-gray-700">
              Creating an account means you're okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </div>
          <div className="flex items-center justify-center md:justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="mt-3 md:hidden">
          Already a member?{" "}
          <span className="text-purple-700 cursor-pointer">Sign in</span>
        </div>
        <p className="text-gray-600 mt-4 text-sm text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
