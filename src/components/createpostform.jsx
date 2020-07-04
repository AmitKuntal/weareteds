import React from 'react';

function CreatePostForm() {
  return (
      <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-6 mb-6">
        <div className="mx-0 sm:mx-6">
            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
                <div className="flex flex-wrap h-full justify-center bg-white rounded overflow-hidden shadow-xl">
                <form className="bg-white shadow-md w-2/3 rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Post Title" />
                    </div>
                    <div className="mb-6">
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 overflow-hidden text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="content" type="text" placeholder="Write your blog here"
                    rows={20} />
                    </div>
                    <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-red-700 text-black  py-2 px-4 border border-red-800 rounded text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" type="button">
                        Cancel
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" type="button">
                        Save
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" type="button">
                        Draft
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
  );
}

export default CreatePostForm;
