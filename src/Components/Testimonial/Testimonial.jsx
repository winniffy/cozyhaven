import React from "react";
import "./Testimonial.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = ({
  testiImg1,
  testiImg2,
  testiImg3,
  testiImg4,
  testiImg5,
  testiImg6,
}) => {
  const centerSlidePercentage = window.innerWidth <= 500 ? 100 : 33.5;

  return (
    <motion.section className="testi_section">
      <h4 className="testi_header">Happy Clients, Happy Stay</h4>
      <p className="testi_subtext">
        Read reviews and feedbacks from our satisfied clients about their
        experience with our services.
      </p>

      {/* testimonial carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      >
        {/* carousel slide 1 */}
        <div className="carousel_box carousel_box-3">
          <img src={testiImg4} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Amaka King</h4>
                <p className="carousel_box-position">Data Analyst, LAG</p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>4.8</b> (190)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              The platform has a really user-friendly interface and I find it
              really easy to navigate. It makes managing my money stress-free.
            </p>
          </article>
        </div>

        {/* carousel slide 2 */}
        <div className="carousel_box carousel_box-4">
          <img src={testiImg5} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Oyin Felix</h4>
                <p className="carousel_box-position">Product Designer, PHC</p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>4.2</b> (85)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              I really appreciate the security measures that the platform has in
              place. I feel confident that my personal and financial info is
              safe when I use the platform.
            </p>
          </article>
        </div>

        {/* carousel slide 3 */}
        <div className="carousel_box carousel_box-1">
          <img src={testiImg2} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Seun Sally</h4>
                <p className="carousel_box-position">Realtor, CRP</p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>5.0</b> (120)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              I really appreciate the security measures that the platform has in
              place. I feel confident that my personal and financial info is
              safe when I use the platform.
            </p>
          </article>
        </div>

        {/* carousel slide 4 */}
        <div className="carousel_box carousel_box-2">
          <img src={testiImg3} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Ruveyda Chris</h4>
                <p className="carousel_box-position">
                  Business Developer, TURK
                </p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>4.5</b> (150)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              I've been really happy with the investment options that the
              platform offers. They have helped me grow my wealth over time.
            </p>
          </article>
        </div>

        {/* carousel slide 5 */}
        <div className="carousel_box carousel_box-6">
          <img src={testiImg1} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Hannah Bells</h4>
                <p className="carousel_box-position">FE Developer, NYC</p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>5.0</b> (230)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              The platform has a really user-friendly interface and I find it
              really easy to navigate. It makes managing my money stress-free.
            </p>
          </article>
        </div>

        {/* carousel slide 6 */}
        <div className="carousel_box carousel_box-5">
          <img src={testiImg6} alt="testimonial 1" />
          {/* carousel inner box */}
          <article className="carousel_box-inner">
            <div className="carousel_box-flex">
              <div className="carousel_box-name-container">
                <h4 className="carousel_box-name_text">Ahmed Oscar</h4>
                <p className="carousel_box-position">Photographer, ABJ</p>
              </div>
              <span className="carousel_box-rating_flex">
                <StarIcon className="carousel_box-rating_icon" />
                <p className="carousel_box-rating_text">
                  <b>4.0</b> (116)
                </p>
              </span>
            </div>
            <p className="carousel_box-subtext">
              The platform has a really user-friendly interface and I find it
              really easy to navigate. It makes managing my money stress-free.
            </p>
          </article>
        </div>
      </Carousel>
    </motion.section>
  );
};

export default Testimonial;
