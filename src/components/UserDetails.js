import React from 'react'
import './userdetail.css'
const UserDetails = ({userdeatail}) => {
    const user=userdeatail
    console.log(user[0]?.name)
  return (
    <div>
       <div className="user-details">
      <div className="user-info">
        <div className="user-name" style={{fontWeight:700}}>{user[0]?.name}</div>
        <div className='username-info'>

        <div className="username" style={{fontWeight:700}}>{user[0]?.username}</div>
        <div className="catch-phrase">{user[0]?.company.catchPhrase}</div>
        </div>
      </div>
      <div className="user-contact">
        <div className="user-address" style={{display:"flex",flexWrap:"wrap"}}>
          <div>{user[0]?.address.street},</div>
          <div>{user[0].address.suite},</div>
          <div>{user[0].address.city}</div>
        </div>
        <div className="user-contact-info">
          <div>Email: {user[0]?.email}</div>
          <div className='phone'>Phone: {user[0]?.phone}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetails
