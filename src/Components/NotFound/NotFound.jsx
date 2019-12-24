import React from 'react';
import PropTypes from 'prop-types';

NotFound.propTypes = {
  message: PropTypes.string
}

function NotFound(props) {

  const { message } = props;

  return (
    <div className="notfound-container">
      <div className="img-container">
        <img src={'images/svg/notfound.svg'} className="img-card" alt={'Not Found'} />
      </div>
      <br /><br />
      <span className="notfound-title">{message}</span>
    </div>
  );

}

export default NotFound;