/* This is a JavaScript React code that defines the main component of a web application. It imports
necessary modules and components from the React library and other files in the project. The `App`
function returns a JSX element that defines the structure of the web application using React Router
to handle routing. The `BrowserRouter` component wraps the entire application and provides the
routing functionality. The `Navbar` and `Themes` components are custom components that are used to
display a navigation bar and themes respectively. The `Routes` component defines the routes of the
application and the `Route` components define the components to be rendered for each route. The
`index` route is the default route that renders the `Home` component. The `path` attribute of the
`Route` components specifies the URL path for each route. Finally, the `export default` statement
exports the `App` component to be used in other parts of the application. */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
