import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route exact path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
