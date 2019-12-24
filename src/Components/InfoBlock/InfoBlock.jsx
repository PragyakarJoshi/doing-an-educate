import React from 'react';
import Card from '../UI Components/Card';

function InfoBlock({ infos }) {
  return (
    <div className="about-section">
      <div className="about-container">
        <p className="section-title">Why choose us?</p>
        <p class="section-subtitle">Our system of Improvised Learning ensures your complete growth</p>
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