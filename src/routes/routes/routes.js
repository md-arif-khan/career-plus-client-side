
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home'
import Courses from '../../components/Courses/Courses';
import Faq from '../../components/Faq/Faq';
import Blog from '../../components/Blog/Blog';
export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])
