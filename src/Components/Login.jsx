import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema, signupSchema } from "../Utility/ValidationSchema";
import axios from 'axios'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: isSignup ? signupSchema : loginSchema,
    onSubmit: (values) => {
      
      formik.resetForm()
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F9F7F7]">
      <div className="bg-white shadow-lg flex flex-col lg:flex-row max-w-4xl mx-4 lg:mx-0 w-full lg:w-2/3">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-[#112D4E] text-white flex flex-col justify-center p-8 lg:p-12">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">
            Connect with professionals and grow your network
          </h1>
          <p className="mb-6 text-sm lg:text-base">
            Join our platform to connect, share, and grow your career with like-minded professionals.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-[#DBE2EF] flex flex-col justify-center p-8 lg:p-12">
          <h2 className="text-lg font-medium mb-8 text-gray-500">
            {isSignup ? "Sign up to connect with professionals" : "Login to the community world"}
          </h2>
          <form onSubmit={formik.handleSubmit}>
            {isSignup && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                  className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Full Name"
                />
                {formik.touched.userName && formik.errors.userName && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.userName}</div>
                )}
              </div>
            )}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email Address"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder={isSignup ? "Create a Password" : "Enter Password"}
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#3F72AF] text-white w-full py-3 rounded hover:bg-[#112D4E] transition-colors"
            >
              {isSignup ? "Join Now" : "Log in"}
            </button>
          </form>
          <div className="text-center mt-4">
            <p
              onClick={() => setIsSignup(!isSignup)}
              className="text-gray-500 hover:underline cursor-pointer"
            >
              {isSignup ? "Already have an account? Login" : "New to the community? Sign Up"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
