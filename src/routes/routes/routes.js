
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home'
import Courses from '../../components/Courses/Courses';
import Faq from '../../components/Faq/Faq';
import Blog from '../../components/Blog/Blog';
import CourseDetail from '../../components/CourseDetail/CourseDetail';
import CheckOut from './../../components/CheckOut/CheckOut';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
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
                element:<Courses></Courses>,
                loader:async ()=>{
                    return fetch('http://localhost:5000/courses')
                }
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courseDetail/:id',
                element:<CourseDetail></CourseDetail>,
                loader:({params})=>{
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                }
            },
            {
                path:'/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }

        ]
    }
])
