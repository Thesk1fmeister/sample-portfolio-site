import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import MyServices from "./pages/MyServices";
import NavBar from "./pages/NavBar";
import Portfolio from "./pages/Portfolio";
import Rezume from "./pages/Rezume";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <div className="first-block">
        <NavBar />
        <Main />
      </div>
      <Portfolio />
      <Rezume />
      <AboutMe />
      <Testimonial />
      <MyServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
