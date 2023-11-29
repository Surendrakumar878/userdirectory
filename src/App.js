import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, unstable_HistoryRouter, Routes } from 'react-router-dom';
import UserCard from './components/UserCard';
import UserProfile from './components/UserProfile';
// import UserCard from './UserCard';
// import UserProfile from './UserProfile';

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
// const history=unstable_HistoryRouter()
  useEffect(() => {
    // Fetch users
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      // console.log(response.data)
    }).catch((e)=>{
      console.log(e)
    })

    // Fetch posts
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
      // console.log("post",response.data)
    }).catch((e)=>{
      console.log(e)
    })
  }, []);

  return (
    <Routes>
     
        <Route path="/"  element={ <div className="people-directory" style={{width:"90%",margin:"auto"}} >
          <div style={{fontSize:"20px",fontWeight:600,textAlign:"center"}} > Directory</div>
            {users?.map((user) => (
              <UserCard key={user.id} posts={[...posts]}  user={user}  />
            ))}
          </div>} >
         
        </Route>
        <Route path="/user/:userId" element={ <div className="people-directory" style={{width:"90%",margin:"auto"}} >
          
              <UserProfile posts={[...posts]}  users={[...users]}  />
          
          </div>}>
          {/* Render UserProfile component with user details */}
        </Route>
  
    </Routes>
  );
};

export default App;
