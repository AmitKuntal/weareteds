import React from "react";

import SignUp from "./signup";
import LoginModel from './loginmodel';
import LoginWithEmail from './loginwithemail';
import SignUpWithEmail from './signupwithemail';

export default function Login() {
  const [showModal, setShowModal] = React.useState(true);
  const [modelCount, setModelCount]  = React.useState(3) ;

  const setModalCount = (count)=>{
    console.log("Count" +count)
    setModelCount(count)
  }

  console.log(showModal)
  return (
    <>
      <button
        className="pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
          Login
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 flex justify-center items-center my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                {modelCount === 1 ? <LoginModel changeCount ={setModalCount} />:
                 modelCount === 2 ? <SignUp  changeCount ={setModalCount}/>: 
                 modelCount === 3 ? <LoginWithEmail changeCount = {setModalCount} />: 
                 modelCount === 4 ? <SignUpWithEmail changeCount= {setModalCount} />:null}
                
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </>
  );
}

