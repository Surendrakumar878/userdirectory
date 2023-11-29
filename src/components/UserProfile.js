import React, { useState } from 'react';
import "./UserProfile.css"
import Clock from './Clock';

import UserDetails from './UserDetails';
import { Link, useParams } from 'react-router-dom';
const UserProfile = ({ users,posts, onBackClick }) => {
  const {userId}=useParams()
  console.log(users,userId)

  const datapost=posts.filter((e)=>e.userId==userId)
  const userdeatail=users.filter((e)=>e.id==userId)
  console.log(posts)
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePostClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="user-profile">

    
      <div className="clock-section">
        <Link to="/" >
    <button> Back </button>
        </Link>
        <Clock/>
      
      </div>

      {/* <UserDetails  userdeatail={[...userdeatail]}/> */}
      {/* Rest of the user details */}
      {/* Back button */}
      {/* Post section */}
      <div className="post-section">
        {datapost?.map((post) => (
          <div key={post.id} className="post-card"  onClick={handlePostClick}>
            <div className="post-title">{post.title}</div>
            <div className="post-content">{post.body}</div>
            
          </div>
        ))}
      </div>
      {/* Post Popup */}
      {isPopupOpen && (
        <div className="post-popup" onClick={handlePostClick}>
          {/* Popup content */}

        <div style={{backgroundColor:"white", width:"50%",height:"50%" }} > pop  </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
