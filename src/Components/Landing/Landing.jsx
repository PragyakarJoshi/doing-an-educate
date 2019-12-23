import React from 'react';
import Button from '../Button';

function Landing() {
  return (
    <div className="landing">
      <div className="landing-content">
        <p className="title-text">The Future of Learning</p>
        <p className="subtitle-text">We help you build yourself for the future that you deserve</p>
        <Button text={'Learn More'} clickHandler={() => {}} />
      </div>
      <img src="images/svg/bottom.svg" className="img-bottom" alt="footer-svg" />
    </div>
  )
}

export default Landing;