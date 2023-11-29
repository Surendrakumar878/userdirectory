import React from 'react'

const UserDetails = ({userdeatail}) => {
    const user=userdeatail
    console.log(user[0].name)
  return (
    <div>
       <div className="user-details">
      <div className="user-info">
        <div className="user-name">{user[0].name}</div>
        <div className="username">{user[0].username}</div>
        <div className="catch-phrase">{user[0].company.catchPhrase}</div>
      </div>
      <div className="user-contact">
        <div className="user-address">
          <div>{user[0].address.street},</div>
          {/* <div>{user[0].address.suite},</div> */}
          {/* <div>{user[0].address.city}</div> */}
        </div>
        <div className="user-contact-info">
          <div>Email: {user[0].email}</div>
          <div>Phone: {user[0].phone}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserDetails
