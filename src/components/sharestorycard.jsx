import React from 'react';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';

function ShareStoryCard() {
  return (
        <div className="bg-white-200 w-full text-xl p-4 md:text-2xl text-gray-800 leading-normal rounded-t">
            <div className="flex flex-wrap h-full  bg-white rounded overflow-hidden shadow-xl">
                <div className="h-full md:w-1/2 bg-black rounded-t rounded-b-none overflow-hidden shadow-xl">
                    <img className="h-full w-full shadow" src="https://www.weareteds.com/media_speaker.jpg"/> 
                </div>
            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink mb-3">
                <div className="w-full text-xl font-bold text-gray-900 pt-6 px-6">
                    Looking for speakers
                </div>
                <div className="w-full text-base text-gray-900 pt-6 px-6">
                 We are a group of travellers and creatives organising webinars for the community.
                </div>
                <div className="w-full text-base text-gray-900 pt-6 px-6">
                    Share your travel stories and experience with us, Speak with TEDS!
                </div>
                <p className=" pt-4 px-6"><a className="bg-blue-500 text-base font-bold hover:bg-blue-700 text-white py-2 px-4 rounded shadow-xl py-2 px-4" href="#">Share Your Story</a></p>
            </div>
        </div>
       </div>
  );
}

export default ShareStoryCard;
