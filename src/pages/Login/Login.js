import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const dispatch = useDispatch();
  // const {auth} = useSelector(state => state.default) ;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("hi");
    e.preventDefault();
    console.log(userData);
    dispatch(login(userData));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className={styles.loginpage}>
      <section className={styles.backGround}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
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
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                Login
              </h1>
              <div></div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    // value={setLoginData.email}
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 mb-4 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                {/* <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-300">
                    <a href="forgotpassword">Forgot Password ?</a>
                  </label>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-400">
                  Doesn't have an account?{" "}
                  <a
                    href="/signup"
                    className="font-medium hover:underline text-primary-500"
                  >
                    Create a new account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
