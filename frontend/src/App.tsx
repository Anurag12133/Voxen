import "./App.css";
import { Signin } from "./Pages/Signin";
import { Signup } from "./Pages/Signup";
import { Blog } from "./Pages/Blog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Blogs } from "./Pages/blogs";
import { Publish } from "./Pages/Publish";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
