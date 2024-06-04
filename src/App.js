// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// export default function App() {
//     return (
//         <BrowserRouter>
//             <Layout />
//             <Routes>
//                     <Route path="home" element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     {/* <Route path="*" element={<NoPage />} /> */}
//             </Routes>
//         </BrowserRouter>
//     );
// }

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ListUsers from "./users/ListUser";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="layout" element={<Layout />} />
                <Route path="*" element={<NoPage />} />
                <Route path="user" element={<ListUsers />} />

            </Routes>
        </BrowserRouter>
    );
}

