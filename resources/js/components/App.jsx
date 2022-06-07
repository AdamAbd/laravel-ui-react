import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import Welcome from "./Welcome";
// import About from "./About";
import Blog from "./Blog";

function App() {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <br />
                <Link to={"about"}>About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="about" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default App;
