import React from 'react';

function CardWithText(props) {
  return (
            <div className="flex flex-wrap h-full  bg-white rounded overflow-hidden shadow-xl p-6 mb-6">
            <div className="w-full flex flex-col text-center flex-grow flex-shrink mb-3">
                <div className="w-full text-4xl font-bold text-gray-900 pt-6 px-6">
                {props.title}
                </div>
                <div className="w-full text-xl text-gray-900 pt-6 px-6">
                {props.text}
                </div>
            </div>
        </div>
  );
}

export default CardWithText;
