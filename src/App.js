import React from 'react';
import './App.css';
import Header from './components/header';
import ProgressCircle from './components/ProgressCircle';
import ScrollDownChevron from './components/ScrollDownChevron';




function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url(/2ndmedicalwebsitebackground.jpeg), url(/medicalwebsitebackgroundv2.jpg)',  // Reordered the images
      backgroundRepeat: 'no-repeat, no-repeat',  // Separate repeat values for each image
      backgroundSize: '1450px 1000px, cover',  // Adjusted size for the top image
      backgroundPosition: 'center center, center -1250px',  // Separate position values for each image
      minHeight: '100vh'
    }}>
      <img src="/ExampleImage.png" alt="Example of a custom made protocol automation app" className="exampleImage" />
      <Header />
      <div className="content">
        <h1>
          Automatically Create <br/>Patient Treatment Plans
        </h1>
        <p>
        Enter patient details. <br /> <br /> Get a tailored treatment <br /> schedule instantly.
        </p>
        <ProgressCircle/>
        <ScrollDownChevron />
      </div>
      <div className="UISection">
        <div className="textBackground">
          <h1>
            Custom Made UI
          </h1>
          <p>
            Get an easy to use <br />interface made tailored to<br /> your practice
          </p>
        </div>
      </div>
    </div>
  );
}


export default App;

