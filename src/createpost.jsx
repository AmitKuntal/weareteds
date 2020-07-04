import React from 'react';
import Navbar from './components/navbar';
import CreatePostForm from './components/createpostform';
import Footer from './components/footer';

function CreatePost() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <CreatePostForm />
      <Footer />
    </div>
  );
}

export default CreatePost;
