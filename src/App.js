// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState }  from 'react'
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
          setAlert({
            msg : message,
            type : type
          })
          setTimeout(() => {
            setAlert(null);
            
          },1000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; 
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return(
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
    <TextForm showAlert = {showAlert} heading="Enter the Text analyze" mode={mode}/>
    {/* <About/> */}
    </div>

    {/* <Navbar/> */}
    </>
        
  );
}

export default App;
