"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Card from "../ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Icon } from "@iconify/react";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function Hero() {
  const { data } = useSWR(`/api/banner`, fetcher);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const banners = data?.banner || [];
  // console.log(banners);
  // Fungsi untuk membuka modal dan mengatur produk yang dipilih
  const openModal = (product) => {
    if (product) {
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  // modal terbuka setelah produk ada
  useEffect(() => {
    if (banners && banners.length > 0 && selectedProduct) {
      console.log("Selected product:", selectedProduct);
    }
  }, [banners, selectedProduct]);

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flat-pages-title">
        <div className="widget-bg-line">
          <div className="wraper">
            <div className="bg-grid-line y bottom">
              <div className="bg-line"></div>
            </div>
          </div>
        </div>
        <div className="themesflat-container w1490">
          <div className="row">
            <div className="col-12 pages-title">
              <div className="content">
                <h1 data--delay="0s" className=" fadeInUp">
                  Indotech Digital Group
                </h1>
                <p className=" fadeInUp" data--delay="0.1s">
                  We are a tech company specializing in software development,
                  digital marketing, social media management, video production,
                  and fintech innovation—serving industries from education to
                  finance. 🚀
                </p>
                <div
                  data--delay="0.2s"
                  className="  fadeInUp flat-button flex justify-center">
                  <Link
                    href={`/products/`}
                    className="tf-button style-1 h50 w190 mr-16">
                    All collections{" "}
                    <Icon icon="gg:arrow-top-right" width="24" height="24" />
                  </Link>
                  {/* <a href="#" className="tf-button style-1 h50 w190 active">
                    All collections
                    <Icon icon="gg:arrow-top-right" width="24" height="24" />
                  </a> */}
                </div>
              </div>
              <div className="icon-background">
                <img
                  className="absolute item1"
                  src="/assets/item1.png"
                  alt=""
                />
                <img
                  className="absolute item2"
                  src="/assets/item2.png"
                  alt=""
                />
                <img
                  className="absolute item3"
                  src="/assets/perspective_matte-248-128x128.png.png"
                  alt=""
                />
                {/* <Image className="absolute item4" src={item4} alt="" /> */}
                <img
                  className="absolute item5"
                  src="/assets/perspective_matte-447-128x128.png.png"
                  alt=""
                />
                <img
                  className="absolute item6"
                  src="/assets/item1.png"
                  alt=""
                />
                <img
                  className="absolute item7"
                  src="/assets/item5.png"
                  alt=""
                />
                <img
                  className="absolute item8"
                  src="/assets/item5.png"
                  alt=""
                />
              </div>

              <div className="relative pt-40 ">
                <Swiper
                  modules={[Navigation, Pagination, EffectCoverflow]}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides={true}
                  freeMode={true}
                  watchSlidesProgress={true}
                  grabCursor={true}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 15,
                    stretch: 10,
                    // depth: 1,
                    modifier: 1,
                    scale: 0.9,
                    slideShadows: false,
                  }}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className}">${index + 1}</span>`,
                  }}
                  navigation={{
                    nextEl: ".next-3d",
                    prevEl: ".prev-3d",
                  }}
                  breakpoints={{
                    500: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 },
                  }}
                  className="swiper swiper-3d-7">
                  {Array.isArray(banners) &&
                    banners.length > 0 &&
                    banners.map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide">
                        <Card data={item} openModal={openModal} />
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination pagination-number"></div>
                <div className="swiper-button-next next-3d over"></div>
                <div className="swiper-button-prev prev-3d over"></div>
              </div>

              {/* <div className="swiper-button-next next-3d over"></div>
                <div className="swiper-button-prev prev-3d over"></div> */}
            </div>
          </div>
        </div>
      </div>

      {showModal && selectedProduct && (
        <Modal
          data={selectedProduct}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
    </>
  );
}
