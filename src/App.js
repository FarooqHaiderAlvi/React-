import React from 'react';
import FrontPage from './Components/FrontPage';







function App() {
  return (
    <>
       
       <FrontPage/>

      {/* <div >
        <Navbar title="Self" />
        <div className="container my-3">



        </div>

      </div> */}
    </>
  );
}

export default App;

//if you are using jsx in react you can only return one element at a time
//we must wrap our jsx into one tag like <> </> and it is called jsx fragment(<></>)