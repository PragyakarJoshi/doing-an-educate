import React from 'react';
import CourseCard from '../UI Components/CourseCard';
import FinalOption from '../UI Components/CourseCard/FinalOption';

function Catalogue(props) {

  const { courses } = props;

  return (
    <div class="catalogue-section">
      <div class="catalogue-container">
        <p class="section-title">Catalogue</p>
        <p class="section-subtitle">We cover various fields to ensure your all-round growth</p>
        <div class="course-container">
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