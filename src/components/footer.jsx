import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {connect} from 'react-redux';



function Footer(props) {
  return (
        <div className="flex items-center bg-teal-700 p-8 h-full text-lg">
            <div className="container mx-auto flex flex-row items-center" >
                <div className="w-2/3">
                    <a className="text-white hover:text-gray-200" href="#"><img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} /></a>
                </div>
                <ul className="lg:w-1/3 flex md:w-full">
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
            </div>
        </div>
  );
}

const mapStateToProps =(state)=>{
    return{
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        changeName:()=>{dispatch({})}
    }
}
  

export default connect(mapStateToProps,mapDispatchToProps)(Footer);
