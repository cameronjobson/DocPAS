import React from 'react';
import './App.css';
import Header from './components/header';
import ProgressCircle from './components/ProgressCircle';




function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url(/medicalwebsitebackgroundv2.jpg)', 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center -1250px',
      minHeight: '100vh'
    }}>
      <img src="/ExampleImage.png" alt="Example of a custom made protocol automation app" className="exampleImage" />
      <Header />
      <div className="content">
        <h1>
          Automatically Create Patient Treatment Plans
        </h1>
        <p>
        Enter patient details. <br /> <br /> Get a tailored treatment <br /> schedule instantly.
        </p>
        <ProgressCircle/>
      </div>
      <div className="UISection">
        <h1>
          Custom Made UI
        </h1>
        <p>
          Get an easy to use <br />interface made tailored to<br /> your practice
        </p>
      </div>
    </div>
  );
}


export default App;

