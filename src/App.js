import React from 'react';
import './App.css';
import Header from './components/header';
import ProgressCircle from './components/ProgressCircle';
import ScrollDownChevron from './components/ScrollDownChevron';
import ButtonComponent from './components/ButtonComponent';




function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url(/lightblueEnhanced.jpg), url(/2ndmedicalwebsitebackground.jpeg), url(/whitewebsitebackgroundekg.jpeg)',
      backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
      backgroundSize: '1450px 950px, 1450px 1000px, 1450px 1450px',
      backgroundPosition: 'center 1640px, center 820px, center 0px', // Placed the third image right below the second
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
        <ButtonComponent />
        <ProgressCircle/>
        <ScrollDownChevron />
      </div>
      <div className="UISection">
        <img src="/customUserInterfaceImage.png" alt="Example of Custom UI" className="UserInterfaceImage"/>
    <h1 className="customBackgroundH1">
        Custom Made UI
    </h1>
    <p className="customBackgroundP">
        Get an easy to use <br />interface made tailored to<br /> your practice
    </p>
</div>
<div className="mobileFriendly">
  <h1 className="customBackgroundMobileH1">
    Mobile Friendly
  </h1>
  <p className="customBackgroundMobileP">
        Easy to access <br />when rounding on <br /> patients
    </p>
</div>
    </div>
  );
}



export default App;

