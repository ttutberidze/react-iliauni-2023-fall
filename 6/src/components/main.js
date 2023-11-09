// import Home from "./home";
// import Posts from "./posts";
// import {Route, Routes, createBrowserRouter} from 'react-router-dom';
// import SinglePost from "./singlePost";

import { Outlet } from "react-router-dom";

const Main = () => (
    <div className='main'>
        <Outlet />
        {/* <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId/:slug" element={<SinglePost />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes> */}
    </div>
)

export default Main;