import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { useSelector, useDispatch } from "react-redux"
import { register } from "../../redux/actions/authActions"

const Signup = () => {

  const initialState = { username: '', email: '', password: '' }
  const [userData, setUserData] = useState(initialState);
  const {email, password, username} = userData 
  const dispatch = useDispatch();
  // const {auth} = useSelector(state => state.default) ;
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    console.log("hi") ;
    e.preventDefault() ;
    console.log(userData) ;
    dispatch(register(userData));
  }

  const handleChangeInput = (e) => {
    console.log("hi") ;
    const {name, value} = e.target 
    setUserData({...userData, [name]:value})
  }

  return (
    <div>
      <section className={styles.backGround}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className={styles.glassBox}>
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <Link
                to="/"
                className="flex justify-center items-center my-6 text-2xl font-semibold text-white"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Bull Traders
              </Link>
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                  Create your Free Account
                </h1>
                <div></div>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      value={userData.email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      onChange={(e) => handleChangeInput(e)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Password
                    </label>
                    <input
                    value={password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e)=> handleChangeInput(e)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      value={username}
                      onChange = {(e)=> handleChangeInput(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
