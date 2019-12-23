import React from 'react';

function Button(props) {

  const { text, clickHandler } = props;
  
  return (
    <span className="btn-sp" onClick={clickHandler}>
      {text}
    </span>
  )
}

export default Button;