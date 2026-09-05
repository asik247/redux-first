import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {path:"/",Component:Root,children:[
        {index:true,Component:Home},
        {path:'/about',Component:About},
        {path:'/projects',Component:Projects},
        {path:'/contact',Component:Contact},
    ]}
])
export default router