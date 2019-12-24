import React from 'react';
import PropTypes from 'prop-types';

import Card from '../UI Components/Card';

InfoBlock.propTypes = {
  infos: PropTypes.array.isRequired
};

function InfoBlock(props) {

  const { infos } = props;

  return (
    <div className="about-section">
      <div className="about-container">
        <p className="section-title">Why choose us?</p>
        <p className="section-subtitle">Our system of Improvised Learning ensures your complete growth</p>
        <br /><br />
        {infos.map((info) => {
          const { id, ...rest } = info;
          return (
            <Card key={id} info={rest} />
          )
        })}
      </div>
    </div>
  );
}

export default InfoBlock;