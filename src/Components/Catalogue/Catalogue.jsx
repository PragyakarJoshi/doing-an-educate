import React from 'react';
import PropTypes from 'prop-types';

import CourseCard from '../UI Components/CourseCard';
import FinalOption from '../UI Components/CourseCard/FinalOption';

Catalogue.propTypes = {
  courses: PropTypes.array.isRequired
};

function Catalogue(props) {

  const { courses } = props;

  return (
    <div className="catalogue-section">
      <div className="catalogue-container">
        <p className="section-title">Catalogue</p>
        <p className="section-subtitle">We cover various fields to ensure your all-round growth</p>
        <div className="course-container">
          {courses.map((course) => {
            const {id, name, image} = course;
            return (
              <CourseCard 
                key={id} 
                name={name}
                image={image}
              />
            )
          })}
          <FinalOption />
        </div>
      </div>
    </div>
  );
}

export default Catalogue;