import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import maasaiHero from "../../../img/maasai-hero2.jpg";
import carousel1 from "../../../img/carousel1-Maasai-pic1.jpg";
import carousel2 from "../../../img/carousel1-Maasai-pic2.jpg";
import carousel3 from "../../../img/carousel1-Maasai-pic3.jpg";
import separator from "../../../img/heading-separator.png";

const Maasai = () => {
  return (
    <div className="pagesBackground">
      <div className="main-content">
        <div
          className="page-hero pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            backgroundImage: `url(${maasaiHero})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="container">
            <div className="text-on-image col-xl-6 col-md-8 col-sm-11 col-11">
              <h2 className="page-title">MAASAI CULTURAL VISITS</h2>
              <img className="separator1 " src={separator}></img>
              <h3 className="page-subtitle">
                Traditions, ceremonies and ancient knowledge
              </h3>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- Description--------------------------------------------------- */}

        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-xl-6 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile ">
                <div className="pageDescriptionContainerRigth  pt-md-4 pb-0 pb-md-4">
                  <h2 className="description-title">APPROACH THE REALITY</h2>
                  <div className="description-content">
                    <p className="description-content">
                      At Safari Adventure we are fascinated with the Maasai
                      culture and we are concerned about the importance of
                      having a full comprehension of its traditions and
                      ceremonies, oral history, rituals and ancient knowledge.
                      We have a deep respect for the Maasai tribe and admire how
                      they have proudly kept their customs and how they coexist
                      with the surrounding nature while keeping it intact.
                    </p>
                    <p className="description-content">
                      During your stay at Safari Adventure you will get as close
                      to the Maasai culture as you wish, presented by local
                      people who will share their traditions.
                    </p>
                  </div>
                  <div className="row justify-content-center mt-4 p-3">
                  <Link to="/Contact">
                          <button
                            type="button"
                            className="btn btn-cream col-12 "
                          >
                            BOOK WITH US
                          </button>
                        </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- Carousel--------------------------------------------------- */}

            <div className="col-xl-6 order-xl-1">
              <div className="card ">
                <div className="">
                  <div className=" border-0   pb-0 ">
                    <div className="carouselContainerLeft">
                      <Carousel>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------Aditional footer for spacing----------------------------------------- */}
      <footer className="footer"></footer>
    </div>
  );
};

export default Maasai;
