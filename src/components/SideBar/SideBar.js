import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    return (
        <div>
            <Link to={`/courseDetail/${course.id}`}>
                <button className="btn btn-outline btn-primary btn-wide mt-5">{course.title}</button>
            </Link>
           
        </div>
    );
};

export default SideBar;