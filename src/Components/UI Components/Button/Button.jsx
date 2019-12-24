import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  clickHandler: PropTypes.func.isRequired
};

function Button(props) {

  const { text, size, clickHandler } = props;
  
  const sizeClass = (size = 'medium') => {
    switch(size.toLowerCase()) {
      case 'small':
        return 'btn-sm'
      case 'medium':
        return 'btn-md'
      case 'large':
        return 'btn-lg'
      default:
        return 'btn-md'
    }
  }

  return (
    <span 
      className={`btn ${sizeClass(size)}`} 
      onClick={clickHandler}
    >
      {text}
    </span>
  )
}


export default Button;