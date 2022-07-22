import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Portofolio from "./pages/Portofolio";
import CreatePost from "./pages/CreatePost";

function App() {
    return (
        <main className="bg-white">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/portofolio" element={<Portofolio />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blogs/create" element={<CreatePost />} />
                    <Route path="/edit/:slug" element={<CreatePost />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
