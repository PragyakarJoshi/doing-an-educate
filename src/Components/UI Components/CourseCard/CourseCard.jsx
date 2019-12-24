import React from 'react';
import PropTypes from 'prop-types';

CourseCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

function CourseCard(props) {

  const {name, image} = props;

  return (
    <div className="course" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <p className="course-name">{name}</p>
      </div>
    </div>
  );
}

export default CourseCard;