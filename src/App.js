import "./App.css";
import logo from "./Assets/logo.svg";
import heroimage from "./Assets/heroimg.png";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Accom from "./Components/Accommodation/Accom";
import accomImg1 from "./Assets/accom1.png";
import accomImg2 from "./Assets/accom2.png";
import accomImg3 from "./Assets/accom3.png";
import accomImg4 from "./Assets/accom4.png";
import checkMarkIcon from "./Assets/checkmarkIcon.svg";
import heartIcon from "./Assets/heartIcon.svg";
import starIcon from "./Assets/starIcon.svg";
import Vacation from "./Components/Vacation/Vacation";

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <Hero heroimage={heroimage} />
      <Accom
        accomImg1={accomImg1}
        accomImg2={accomImg2}
        accomImg3={accomImg3}
        accomImg4={accomImg4}
        checkMarkIcon={checkMarkIcon}
        heartIcon={heartIcon}
        starIcon={starIcon}
      />
      <Vacation />
    </>
  );
}

export default App;
