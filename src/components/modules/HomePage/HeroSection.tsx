/** @format */

import heroImg from "../../../assets/images/login.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../pages/slider/slide.css";
// import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <section className="slider_section ">
            <div
              id="customCarousel1"
              className="carousel slide"
              data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container ">
                    <div className="row md:flex justify-between items-center px-4 md:px-20">
                      <div className="detail-box text-start md:w-1/2 text-white">
                        <h1 className="text-4xl mb-2">
                          Your Ride, Anytime,{" "}
                          <span className="text-primary">Anywhere</span>
                        </h1>
                        <p>
                          Book rides instantly with trusted drivers. Fast,
                          reliable, and hassle-free travel – all in one
                        </p>
                        <p>
                          Experience seamless travel with real-time tracking and
                          secure payments
                        </p>
                        <div className="mt-5">
                          <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="text-sm bg-primary">
                            <Link to={"/ride"}>Book a Ride</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="flex-1 py-5">
                        <div className="img-box">
                          <img
                            className="rounded-full"
                            src={heroImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
