import React from 'react';

function CardHalf(props) {
  return (
    <div className="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
            <iframe height="340px" className="w-full rounded-t pb-4" src={props.videoUrl}>
            </iframe>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-xl">
            <a href="Nikkopascua.com" className="w-full text-blue-600 text-xs md:text-sm px-6">{props.name}</a>
            <p className="w-full font-bold text-xl text-gray-900 px-6">
               {props.tagLine}
            </p>
            <p className="text-gray-800 text-base px-6 mb-5">
                A webinar with <a className="text-blue-700" href="Nikkopascua.com">{props.name}</a>
            </p>
            <p className="text-gray-800 text-base px-6 mb-5">
               {props.text}
            </p>
        </div>
    </div>
  );
}

export default CardHalf;
