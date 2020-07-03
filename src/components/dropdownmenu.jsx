import React from "react";
import Avatar from 'react-avatar';


export default function DropDownMenu() {
    const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <Avatar size="40" className="rounded-full" round="20px" className="dropdown inline-block relative"  onClick = {() =>setShowMenu(!showMenu)}/>
           {showMenu ?
           <ul className="mr-2 absolute text-gray-700 pt-1 rounded fixed bg-white">
            <li class=""><a class="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Profile</a></li>
            <li class=""><a class="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Your Post's</a></li>
            <li class=""><a class="rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">New Post</a></li>
            <li class=""><a class="rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li>
           </ul>:null}       
        </>
  );
}

