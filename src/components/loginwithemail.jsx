import React from "react";

export default function LoginWithEmail(props) {
    const [password,setPassword] = React.useState(null);
    const [email,setEmail] = React.useState(null);
    const handelChange = (event)=>{
        setEmail(event.target.value);
    }
    
  return (
            <div className="p-8 flex flex-col text-center items-center">
                  <p className="my-4 text-black-600 text-4xl ">Sign in with email</p>
                  <p className="my-4 w-1/2 text-black-600 text-lg ">Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Your email
                    </label>
                    <input class=" border-b border-b-4 w-full py-2 px-3 text-gray-700 text-center leading-tight focus:outline-none focus:shadow-outline" value={email?email:""} id="username" type="text" onChange= {handelChange}/>
                  </div>
                   <div className="mx-8 mt-8">
                    <button className="pr-6 inline-block text-sm text-teal-700 px-4 py-2 leading-none  text-black mt-4 lg:mt-0" onClick={() => props.changeCount(1)}>
                        {'<'}All sign in options
                    </button>
                   </div>
            </div>
    );
}

