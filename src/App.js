import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - LightMode";

    }
  }
  return(
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
      </Switch> */}
      </div>
      {/* </Router> */}
      {/* <About/> */}
    </>
  );
}

export default App;
