import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Login from './login';


function Navbar() {
    
  return (
        <nav className="flex items-center bg-teal-700 p-4 pl-8 pr-8 h-full text-lg">
            <ul className="container mx-auto flex items-center" >
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#"><img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} /></a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#">Home</a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#">Past Webinars</a>
                </li>
                <li className="mr-6">
                    <FontAwesomeIcon icon={faFacebook} color={'white'} size={'lg'}/>
                </li>
                <li className="mr-6">
                    <FontAwesomeIcon icon={faInstagram} color={'white'} size={'lg'}/>
                </li>
            </ul>
            <div className="pr-8">
                <Login/>
            </div> 
        </nav>
  );
}

export default Navbar;
