import React, {  useState } from 'react'



import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';




// npm start to run react project 
import Main from './Main';

export default function App() {


  return (
    <>
      <Main/>
    </>
  );
}



//if you are using jsx in react you can only return one element at a time
//we must wrap our jsx into one tag like <> </> and it is called jsx fragment(<></>)