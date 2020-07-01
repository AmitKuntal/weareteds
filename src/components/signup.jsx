import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGoogle,faApple, faTwitter, faFacebook, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core"

export default function SignUp() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <button
        className="pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
          SignUp
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
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
                <div className="p-8 flex flex-col text-center">
                <p className="my-4 text-black-600 text-4xl ">Join Us</p>
                  <div className="mx-8 mt-6">
                    <button className="w-56 pr-6 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faGoogle} color={'black'} size={'lg'} className="mr-2"/> Sign in with Google
                    </button>
                   </div>
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faFacebook} color={'black'} size={'lg'} className="mr-2"/>Sign in with Facebook
                    </button>
                   </div>
                   <div className="mx-8 mt-6">
                    <button className="w-56 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                    <FontAwesomeIcon icon={faMailchimp} color={'black'} size={'lg'} className="mr-2"/>   Sign in with Email
                    </button>
                   </div>
                   <div className="mx-8 mt-8">
                   Already have an account?
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0">
                        Sign in
                    </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-white"></div>
        </>
      ) : null}
    </>
  );
}