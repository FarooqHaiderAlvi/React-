import React, { useCallback, useState } from 'react'

import TextForm from './Components/TextForm';
import DarkModeNavbar from './Components/DarkModeNavbar';
import Alert from './Components/Alert';
import About from './Components/About'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



// npm start to run react project 


export default function App() {


  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("dark");

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      setColor('white');
      showAlert("Dark mode has been enabled", "success");

    }
    else {
      setMode('light');
      setColor('black');
      showAlert("Dark mode has been disabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }

    )
  }


  return (
    <>
      <Router>
        <DarkModeNavbar mode={mode} color={color} toggle={toggleMode} />

        <Alert alrt={alert} />

        <Routes>
      <Route path="/About" element={<About />} />


      <Route path="/" element={<TextForm />} />
      {/* Other routes */}
    </Routes>
      </Router>

    </>
  );
}



//if you are using jsx in react you can only return one element at a time
//we must wrap our jsx into one tag like <> </> and it is called jsx fragment(<></>)