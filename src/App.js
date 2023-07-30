
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import{
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
              setAlert(null);              
          },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(10 10 10)";
      showAlert("Dark mode is enable","success");

    }
   
    else{
      setMode('light');
       document.body.style.backgroundColor = "#dadadf";
       showAlert("Light mode is enable ","success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}

        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForms
          showAlert={showAlert}
          heading="TextManipulator-Word Counter, Character Counter "
          mode={mode}
        />
        <About mode={mode} />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
