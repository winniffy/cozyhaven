import "./App.css";
import logo from "./Assets/logo.svg";
import heroimage from "./Assets/heroimg.png";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Accom from "./Components/Accommodation/Accom";

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <Hero heroimage={heroimage} />
      <Accom />
    </>
  );
}

export default App;
