import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='banner'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-10 pl-5'>
            <div className='pt-10'>
                <h1 className='lg:text-7xl sm:text-3xl font-bold text-white'><span className='text-[#A78BFA]'>Welcome</span>  our Outsourcing Platform <span className='text-[#A78BFA]'>Career Plus!</span>  </h1>
                <p className='text-white mt-10 text-lg'>A Free Online Course On Growing A Successful Freelance Business - With Certificate. Alison Free Learning – Providing Opportunities To People Anywhere In The World Since 2007. Get Certified & Get Hired. No Enrolment Fees. 1000s Of Free Courses.</p>
            </div>
            <div className='bg-images'>
                
            </div>
        </div>
        </div>
    );
};

export default Home;