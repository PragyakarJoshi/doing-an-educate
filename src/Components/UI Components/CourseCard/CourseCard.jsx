import React from 'react';

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