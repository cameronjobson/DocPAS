import React, { useState, useEffect, useCallback } from "react";
import "./header.css"; // assuming you have a CSS file named Header.css
import SkewedNavbar from './SkewedNavbar'; // Ensure you provide the correct relative path to SkewedNavbar.js


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
<div className={visible ? "custom-header visible" : "custom-header hidden"}>
    <img src={`${process.env.PUBLIC_URL}/bannerlogo.png`} alt="Banner Logo" className="banner-logo" />
<SkewedNavbar />
</div>
  );
};

export default Header;
