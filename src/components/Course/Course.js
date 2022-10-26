import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
    const {title,picture,id}=course;
  return (
    <div>
      <div className="card card-compact w-auto shadow-xl">
        <figure>
          <img className="h-52" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary"><Link to={`/courseDetail/${id}`}> See More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
