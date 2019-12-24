import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UI Components/Button';

Landing.propTypes = {
  tagline: PropTypes.string.isRequired
};

function Landing(props) {
  
  const { tagline } = props;

  return (
    <div className="landing">
      <div className="landing-content">
        <p className="title-text">{tagline}</p>
        <p className="subtitle-text">We help you build yourself for the future that you deserve</p>
        <Button text={'Learn More'} size={'large'} clickHandler={() => {}} />
      </div>
      <img src="images/svg/bottom.svg" className="img-bottom" alt="footer-svg" />
    </div>
  )
}

export default Landing;