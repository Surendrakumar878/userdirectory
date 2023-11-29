import React from 'react';
import './UserCard.css'
import { Link } from 'react-router-dom';
const UserCard = ({ user,posts }) => {
  
 

  const datapost=posts.filter((e)=>e.userId==user.id)
  return (
      <Link to={`user/${user.id}`} >
    <div className="user-card" >
      <div className="user-info">
        <div className="user-name"> Name :{user.name}</div>
        <div className="post-count">Posts: {datapost.length} </div>
      </div>
    </div>
      </Link>
  );
};

export default UserCard;
