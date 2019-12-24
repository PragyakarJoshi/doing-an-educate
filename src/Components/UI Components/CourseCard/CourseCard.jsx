import React from 'react';

function CourseCard(props) {

  const {title, src} = props;

  return (
    <div className="course" style={{ backgroundImage: `url(${src})` }}>
      <div className="overlay">
        <p className="course-name">{title}</p>
      </div>
    </div>
  );
}

export default CourseCard;