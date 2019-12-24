import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    src: PropTypes.string
  })
}

function Card(props) {

  const { title, info, src } = props.info;
  
  return (
    <div className="card">
      <div className="img-container">
        <img src={src} className="img-card" alt={title}/>
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{info}</p>
    </div>
  )
}

export default Card;