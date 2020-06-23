import React from 'react';

function CardHalf() {
  return (
    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
            <iframe height="340px" className="w-full rounded-t pb-4" src="https://www.youtube.com/embed/R7DwiuU6Wwg">
            </iframe>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-xl">
            <a href="Nikkopascua.com" className="w-full text-blue-600 text-xs md:text-sm px-6">Nikko Pascua</a>
            <p className="w-full font-bold text-xl text-gray-900 px-6">
                Step up your stay-home-story with Food Photography
            </p>
            <p className="text-gray-800 text-base px-6 mb-5">
                A webinar with <a className="text-blue-700" href="Nikkopascua.com">Nikko Pascua</a>
            </p>
            <p className="text-gray-800 text-base px-6 mb-5">
                Nikko Pascua is a Filipino Photographer based in Sunny Singapore 
                specialising in food &amp; beverage photography. He is an Art Director 
                at Food News Agency where he has worked on brands like Asia's 50 Best
                 Restaurants, the Singapore Cocktail Festival, JW Marriott South Beach 
                 Singapore, Westholme, the Jigger &amp; Pony Group, among others.
            </p>
        </div>
    </div>
  );
}

export default CardHalf;
