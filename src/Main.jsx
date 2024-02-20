import React, { useState } from 'react';
import DarkModeNavbar from './Components/DarkModeNavbar';
import Alert from './Components/Alert';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import TextForm from './Components/TextForm';
export default function Main() {


  
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("dark");

  const [alert, setAlert] = useState(null);


  const [text, setText] = useState("Enter your text");


  
  const toggleMode = () => {

      if (mode === 'light') {
          setMode('dark');
          setColor('white');
          showAlert("Dark mode has been enabled", "success");
          document.body.style.backgroundColor = 'black';

      }
      else {
          setMode('light');
          setColor('black');
          showAlert("Dark mode has been disabled", "success");
          document.body.style.backgroundColor = 'white';
      }
  }
  const showAlert = (message, type) => {
      console.log("show alert is called");
      setAlert({
          msg: message,
          type: type
      },
          setTimeout(() => {
              setAlert(null);
          },2000)
      )
  }



  return (
    <>
    <BrowserRouter>

       <DarkModeNavbar mode={mode} color={color} toggle={toggleMode} />
       <Alert alrt={alert} />


       <Routes>
        
        <Route path="/About" element={<><About/></>} />

        <Route path="/" element={<><TextForm title="TextUtils" mode={mode} showAlert={showAlert}  /></>} />
       </Routes>
    
    </BrowserRouter>


    </>
  )
}


