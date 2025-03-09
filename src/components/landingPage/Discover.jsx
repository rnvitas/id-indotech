"use client";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ParticleBackground from "./Particlebg";

export default function Discover() {
  return (
    <>
      <div className="tf-section action">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="action__body">
                <div className="tf-tsparticles">
                  <ParticleBackground />
                </div>
                <h2>Explore & Own Digital Excellence!</h2>
                <div className="flat-button flex">
                  <a href="#" className="tf-button style-2 h50 w190 mr-10">
                    Explore products{" "}
                    <Icon icon="gg:arrow-top-right" width="24" height="24" />
                  </a>
                </div>
                <div className="bg-home7">
                  <Swiper
                    loop={true}
                    slidesPerView={"auto"}
                    spaceBetween={14}
                    direction="vertical"
                    speed={10000}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="autoslider3reverse swiper-container ">
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>

                  <Swiper
                    loop={true}
                    slidesPerView={"auto"}
                    spaceBetween={14}
                    direction="vertical"
                    speed={10000}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      reverseDirection: true,
                    }}
                    modules={[Autoplay]}
                    className="autoslider4reverse swiper-container ">
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>

                  <Swiper
                    loop={true}
                    slidesPerView={"auto"}
                    spaceBetween={14}
                    direction="vertical"
                    speed={10000}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="autoslider3reverse swiper-container ">
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="/images/item-background/bg-action-1.png"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
