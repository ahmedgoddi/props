import React from 'react'
import logo from './logo.svg';
import './App.css';
import Introduction from './profile/Profile component/Introduction'
import imgSrc from "../src/images/man-profile.jpg";
import UserCard from './profile/Profile component/UserCard'


const MyBio =[
  {
    name: "ahmed goddi",
    age: 21,
    email: "ahmedmouda09@gmail.com",
    address: "Nabeul",
    isAuth: true,
  }
];

export default function App() {
  const alertName = (name) => alert(name);
  return(
    <div>
      <Introduction imgSrc={imgSrc} name="ahmed Goddi" />
      {MyBio.map((currentUser,i)=>(
      <UserCard key={i} user={currentUser} alertName={alertName} /> 
      ))}
    
      
    </div>
  );
}
  
