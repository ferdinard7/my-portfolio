import React, { useContext } from "react";
import Intro from "./intro/Intro";
import About from "./about/About";
import ProductList from "./productList/ProductList";
import Contact from "./contact/Contact";
import Toggle from "./toggle/Toggle";
import { ThemeContext } from "./context";


function App() {

    const theme = useContext(ThemeContext);
    const darkMode =theme.state.darkMode;

    return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
    
    </div>
    )
}


export default App;