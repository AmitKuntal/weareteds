import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Login from './login';


function Navbar() {
    
  return (
      <div className="bg-teal-700 flex justify-center">
        <nav className="container flex items-center bg-teal-700 p-4 h-full sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:pl-2 md:pl-2 lg:pl-8">
            <div className="sm:mr-2 md:mr-2 lg:mr-6 xl:mr-6">
                    <a className="text-white hover:text-gray-200" href="#"><img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} /></a>
            </div>
            <ul className="sm:w-1/2 md:w-full flex items-center" >
                <li className="mr-2">
                    <a className="text-white hover:text-gray-200" href="#">Home</a>
                </li>
                <li className="mr-2">
                    <a className="text-white hover:text-gray-200" href="#">Past Webinars</a>
                </li>
                <li className="mr-2">
                    <FontAwesomeIcon icon={faFacebook} color={'white'} size={'lg'}/>
                </li>
                <li className="mr-2">
                    <FontAwesomeIcon icon={faInstagram} color={'white'} size={'lg'}/>
                </li>
            </ul>
            <div className="sm:pr-0 md:pr-0 lg-pr-8 xl-pr-8">
                <Login/>
            </div> 
        </nav>
        </div>
  );
}

export default Navbar;
