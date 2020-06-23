import React from 'react';


function CardFull() {
  return (
    <div>
        <div className="mx-0 sm:mx-6">
            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                <div className="flex flex-wrap h-full bg-white rounded overflow-hidden shadow-xl">
                    <div className="w-full md:w-2/3 rounded-t">
                        <img src={require('./../mico_gonzales.jpeg')} className="h-full w-full shadow"/>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink mb-3">
                        <div className="w-full text-xl text-gray-900 pt-6 px-6">
                            Storytelling Through Colors
                        </div>
                        <p className="w-full text-xl text-gray-900 pt-6 px-6">
                         A webinar about Color Grading with 
                         <a className="text-blue-700" target="_blank" href="https://instagram.com/micopreset?igshid=dxrj79g3g2am">Mico Gonzales</a>
                        </p>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            In this webinar, 
                            <a className="text-blue-700" target="_blank" href="https://instagram.com/micopreset?igshid=dxrj79g3g2am">Mico</a> 
                            will be sharing with us his knowledge and skills about his art of telling stories through colors - his photography journey as well as his techniques in color grading. Join us in this webinar and online discussion with Mico Gonzales.
                        </p>
                        <p class="text-base px-6 mb-5 md:lg">
                            <strong>30th May 2020 (Saturday), 9PM (GMT+8)</strong>
                        </p> 
                        <p className="px-6"><a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-xl py-2 px-4" href="#">Register Now</a></p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  );
}

export default CardFull;
