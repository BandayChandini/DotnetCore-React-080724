import React from "react";
<<<<<<< HEAD
import {BrowserRouter,Routes,Route} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Blogs from "./Pages/blogs";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import Blogs from "./Pages/blogs";
import Contact from "./Pages/contact";
>>>>>>> 2cb043374f380c150701ef97bcbe22af3ff2a8ef
import NoPage from "./Pages/nopage";
import Layout from "./Pages/layout";
function App() {
  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    
      <Route path="*" element={<NoPage/>}/>
      
    </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 2cb043374f380c150701ef97bcbe22af3ff2a8ef
    </>
  );
}

export default App;
