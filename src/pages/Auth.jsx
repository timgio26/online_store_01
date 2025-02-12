import { useState } from "react";
import { useSignIn, useSignup} from '../utils/useOrderApi'
import { useNavigate } from "react-router";

export function Auth() {
  const [isRegist, setIsRegist] = useState(false);

  const { signup, errMsg: errMsgRegist } = useSignup();
  const { signin, errMsg: errMsgSignIn } = useSignIn();

  const nav = useNavigate()


  function handleRegist(e){
    e.preventDefault()
    const {name_reg,email_reg,password_reg} = e.target
    signup({email:email_reg.value,password:password_reg.value,name:name_reg.value})
  }

  function handleSignIn(e){
    e.preventDefault()
    const {email,password} = e.target
    signin({email:email.value,password:password.value},{onSuccess:()=>nav('/')})
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full mx-4 sm:w-1/2 justify-center items-center flex flex-col py-10">
        {!isRegist ? (
          <>
            <form action="" className="w-full justify-center items-center flex" onSubmit={handleSignIn}>
              <div className="flex flex-col w-full sm:w-1/2">
                <h1 className="my-3 text-lg font-bold text-primary-500">
                  Sign in
                </h1>
                <label htmlFor="email" className="text-sm">
                  email
                </label>
                <input type="email" name="email" id="email" className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
                <label htmlFor="password" className="text-sm">
                  password
                </label>
                <input type="password" name="password" id="password" className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                <button className="mt-3 bg-primary-400 w-full py-1 rounded-3xl text-white h-8 md:h-10 hover:bg-primary-500 transition-colors">Submit</button>
                
              </div>
            </form>
            <div className="my-5 text-xs">
              no account?  {" "}
            <button
              onClick={() => setIsRegist((curstate) => !curstate)}
              className=""
              >
              register here
            </button>
              </div>
            <span>{errMsgSignIn}</span>
          </>
        ) : (
          <>
            <form
              action=" "
              className="w-full justify-center items-center flex"
              onSubmit={handleRegist}
            >
              <div className="flex flex-col w-full md:w-1/2">
                <h1 className="my-3 text-lg font-bold text-primary-500">
                  Register
                </h1>
                <label htmlFor="name_reg" className="text-sm">
                  name
                </label>
                <input type="text" name="name_reg" id="name_reg" className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                <label htmlFor="email_reg" className="text-sm">
                  email
                </label>
                <input type="email" name="email_reg" id="email_reg" className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                <label htmlFor="password_reg" className="text-sm">
                  password
                </label>
                <input type="password" name="password_reg" id="password_reg" className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"/>
                <button className="mt-3 bg-primary-400 w-full py-1 rounded-3xl text-white h-8 md:h-10 hover:bg-primary-500 transition-colors">Submit</button>
              </div>
            </form>
            <div className="my-5 text-xs">
              have account? {" "}
            <button
              onClick={() => setIsRegist((curstate) => !curstate)}
              >
              sign in
            </button>
              </div>
            <span>{errMsgRegist}</span>
          </>
        )}
      </div>
    </div>
  );
}
