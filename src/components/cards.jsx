import React from 'react';
import CardFull  from './cardfull';
import CardHalf from './cardhalf';

function Cards() {
  return (
      <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-6">
        <CardFull />
        <div className="flex flex-wrap justify-between pt-12 mx-2">
         <CardHalf />
         <CardHalf />
        </div>
      </div>
  );
}

export default Cards;
