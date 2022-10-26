import React from 'react';
import {useLoaderData} from "react-router-dom";
import Course from '../Course/Course';
import SideBar from '../SideBar/SideBar';
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div class="flex mx-10 my-10">
  <div class="flex-auto lg:w-1/4 md:hidden lg:block sm:hidden hidden mr-8">
     {
        courses.map(course=><SideBar key={course.id} course={course}></SideBar>)
     }
  </div>
  <div class="flex-auto w-3/4 ...">
     <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2'>
     {
        courses.map(course=><Course key={course.id} course={course}></Course>)
     }
     </div>
  </div>
</div>
    );
};

export default Courses;