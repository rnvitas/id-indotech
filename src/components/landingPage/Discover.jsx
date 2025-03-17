"use client";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ParticleBackground from "./Particlebg";
import useSWR from "swr";
import axios from "axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Discover() {
  const { data, error } = useSWR(`${basePath}/api/banner`, fetcher);
  const banners = data?.banner || [];

  // console.log("banner:", data);

  if (error) return <div>Error loading banners</div>;
  if (!data) return <div>Loading...</div>;

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
                    {Array.isArray(banners) &&
                      banners.map((item, i) => (
                        <SwiperSlide key={i}>
                          <img src={item.img} alt={`Banner ${i}`} />
                        </SwiperSlide>
                      ))}
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
                    {Array.isArray(banners) &&
                      banners.map((item, i) => (
                        <SwiperSlide key={i}>
                          <img src={item.img} alt={`Banner ${i}`} />
                        </SwiperSlide>
                      ))}
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
                    {Array.isArray(banners) &&
                      banners.map((item, i) => (
                        <SwiperSlide key={i}>
                          <img src={item.img} alt={`Banner ${i}`} />
                        </SwiperSlide>
                      ))}
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
