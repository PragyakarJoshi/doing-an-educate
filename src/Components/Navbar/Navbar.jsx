import React, { useState, useEffect} from 'react';

function Navbar() {

  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true)
    } else {
      setOnTop(false)
    }
  }

  return (
    <nav className={onTop ? null : 'small'}>
      <div className="logo">
        <a href="#home"><img src="images/logo/logo-full.png" alt="" className="img-logo"/></a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#about">Home</a></li>
          <li><a href="#catalogue">Catalogue</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#talk" className="btn-bg">Talk to us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;