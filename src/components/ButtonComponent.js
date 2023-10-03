import React from 'react';
import "./ButtonComponent.css";

function ButtonComponent() {
    const openSite = () => {
        window.open('https://www.nicucalcpdxfw.com', '_blank');
    };

    return (
        <button onClick={openSite} className="blueButton">
            Try the Pediatrix Fort Worth Calculator
        </button>
    );
}

export default ButtonComponent;
