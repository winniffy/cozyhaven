import "./App.css";
import logo from "./Assets/logo.svg";
import heroimage from "./Assets/heroimg.webp";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Accom from "./Components/Accommodation/Accom";
import accomImg1 from "./Assets/accom1.webp";
import accomImg2 from "./Assets/accom2.webp";
import accomImg3 from "./Assets/accom3.webp";
import accomImg4 from "./Assets/accom4.webp";
import vacImg1 from "./Assets/vacay1.webp";
import vacImg2 from "./Assets/vacay2.webp";
import vacImg3 from "./Assets/vacay3.webp";
import vacImg4 from "./Assets/vacay4.webp";
import checkMarkIcon from "./Assets/checkmarkIcon.svg";
import heartIcon from "./Assets/heartIcon.svg";
import starIcon from "./Assets/starIcon.svg";
import Vacation from "./Components/Vacation/Vacation";
import Locations from "./Components/Locations/Locations";
import locationImg1 from "./Assets/location1.webp";
import locationImg2 from "./Assets/location2.webp";
import locationImg3 from "./Assets/location3.webp";
import locationImg4 from "./Assets/location4.webp";
import Perks from "./Components/Perks/Perks";
import wifi from "./Assets/wifi.svg";
import security from "./Assets/security.svg";
import netflix from "./Assets/netflix.svg";
import towel from "./Assets/towel.svg";
import dstv from "./Assets/dstv.svg";
import tv from "./Assets/tv.svg";
import sheet from "./Assets/sheet.svg";
import kitchen from "./Assets/meal.svg";
import Feel from "./Components/Feel/Feel";
import feelImg from "./Assets/feelathome.png";
import logoWhite from "./Assets/logowhite.svg";
import Faq from "./Components/Faq/Faq";
import Testimonial from "./Components/Testimonial/Testimonial";
import testiImg1 from "./Assets/testi1.png";
import testiImg2 from "./Assets/testi2.png";
import testiImg3 from "./Assets/testi3.png";
import testiImg4 from "./Assets/testi4.png";
import testiImg5 from "./Assets/testi5.png";
import testiImg6 from "./Assets/testi6.png";
import Footer from "./Components/Footer/Footer";

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
      <Vacation
        vacImg1={vacImg1}
        vacImg2={vacImg2}
        vacImg3={vacImg3}
        vacImg4={vacImg4}
        heartIcon={heartIcon}
        starIcon={starIcon}
      />
      <Locations
        locationImg1={locationImg1}
        locationImg2={locationImg2}
        locationImg3={locationImg3}
        locationImg4={locationImg4}
      />
      <Perks
        wifi={wifi}
        security={security}
        netflix={netflix}
        towel={towel}
        dstv={dstv}
        tv={tv}
        sheet={sheet}
        kitchen={kitchen}
      />
      <Feel logoWhite={logoWhite} feelImg={feelImg} />
      <Faq />
      <Testimonial
        testiImg1={testiImg1}
        testiImg2={testiImg2}
        testiImg3={testiImg3}
        testiImg4={testiImg4}
        testiImg5={testiImg5}
        testiImg6={testiImg6}
        starIcon={starIcon}
      />
      <Footer logo={logo} />
    </>
  );
}

export default App;
