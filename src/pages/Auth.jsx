import { useState } from "react";
import {useSignIn, useSignup} from '../utils/useOrderApi'

export function Auth() {
  const [isRegist, setIsRegist] = useState(false);

  const { signup, errMsg: errMsgRegist } = useSignup();
  const { signin, errMsg: errMsgSignIn } = useSignIn();
  // console.log(errMsg)


  function handleRegist(e){
    e.preventDefault()
    const {name_reg,email_reg,password_reg} = e.target
    signup({email:email_reg.value,password:password_reg.value,name:name_reg.value})
  }

  function handleSignIn(e){
    e.preventDefault()
    const {email,password} = e.target
    signin({email:email.value,password:password.value})
  }

  return (
    <div className="bg-cyan-400 w-full h-full flex justify-center items-center">
      <div className="bg-slate-200 w-full mx-4 sm:w-1/2 justify-center items-center flex flex-col py-10">
        {!isRegist ? (
          <>
            <form action="" className="w-full justify-center items-center flex" onSubmit={handleSignIn}>
              <div className="flex flex-col md:w-1/2">
                <h1 className="my-3 text-lg font-bold text-primary-500">
                  Sign in
                </h1>
                <label htmlFor="email" className="text-sm">
                  email
                </label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password" className="text-sm">
                  password
                </label>
                <input type="password" name="password" id="password" />
                <button className="bg-primary-400 my-3">Submit</button>
                
              </div>
            </form>
            <button
              onClick={() => setIsRegist((curstate) => !curstate)}
              className="text-xs"
            >
              register
            </button>
            <span>{errMsgSignIn}</span>
          </>
        ) : (
          <>
            <form
              action=" "
              className="w-full justify-center items-center flex"
              onSubmit={handleRegist}
            >
              <div className="flex flex-col md:w-1/2">
                <h1 className="my-3 text-lg font-bold text-primary-500">
                  Register
                </h1>
                <label htmlFor="name_reg" className="text-sm">
                  name
                </label>
                <input type="text" name="name_reg" id="name_reg" />
                <label htmlFor="email_reg" className="text-sm">
                  email
                </label>
                <input type="email" name="email_reg" id="email_reg" />
                <label htmlFor="password_reg" className="text-sm">
                  password
                </label>
                <input type="password" name="password_reg" id="password_reg" />
                <button className="bg-primary-400 my-3">Submit</button>
              </div>
            </form>
            <button
              onClick={() => setIsRegist((curstate) => !curstate)}
              className="text-xs"
            >
              sign in
            </button>
            <span>{errMsgRegist}</span>
          </>
        )}
      </div>
    </div>
  );
}
