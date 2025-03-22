"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Card from "./Card";
import Link from "next/link";
import { Icon } from "@iconify/react";
import axios from "axios";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import PriceFormat from "@/components/utils/PriceFormat";

const fetcher = (url) => axios.get(url).then((res) => res.data.product);
const fetcherOther = (url) => axios.get(url).then((res) => res.data.data);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Detail() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(id ? `${basePath}/api/products/${id}` : null, fetcher);

  const { data: etcProducts } = useSWR(
    `${basePath}/api/products/?page=1&limit=6`,
    fetcherOther
  );
  const otherProducts = etcProducts?.filter(
    (item) => String(item.id) !== String(id)
  );

  // Fungsi untuk membuka modal dan mengatur produk yang dipilih
  const openModal = (id) => {
    if (id) {
      setSelectedProduct(id); // Mengirimkan seluruh objek produk
      setShowModal(true);
    }
  };

  // modal terbuka setelah produk ada
  useEffect(() => {
    if (id && id.length > 0 && selectedProduct) {
      console.log("Selected product:", selectedProduct);
    }
  }, [id, selectedProduct]);

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="mtt-5">
        <div className="tf-section-2 product-detail">
          <div className="themesflat-container">
            <div className="row">
              <div className=" fadeInLeft col-md-6">
                <div className="tf-card-box style-5 mb-0">
                  <div className="card-media mb-0">
                    <a href="#">
                      <img src={product.img} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="  infor-product">
                  <div className="text">
                    Indotech Digital Group{" "}
                    <Icon
                      icon="bitcoin-icons:verify-filled"
                      width="24"
                      height="24"
                      style={{ color: "#DDF247" }}
                    />
                  </div>

                  <h2>{product.title}</h2>
                  <div className="flex justify-content-between mb-30">
                    <div className="author flex items-center">
                      {" "}
                      <div className="avatar">
                        <img
                          src={`${basePath}/icon/cat-indotech.jpeg`}
                          alt="Image"
                        />
                      </div>
                      <div className="info">
                        <span>Category:</span>
                        <h6>{product.Category?.name}</h6>
                      </div>
                    </div>

                    <div className="meta mb-20 cursor-pointer">
                      <Link
                        href={product.url}
                        className="meta-item view"
                        target="_blank">
                        <Icon
                          icon="fluent:preview-link-16-regular"
                          width="16"
                          height="16"
                        />
                        View Apps
                      </Link>
                    </div>
                  </div>
                </div>

                {/* tag */}
                {/* <div className="infor-product mb-30 ">
                  <h6 className="text">#Custom Price #test</h6>
                </div> */}

                <div className="product-item time-sales">
                  <h6>
                    <Icon
                      icon="famicons:pricetag-outline"
                      width="20"
                      height="20"
                      className="mr-3"
                      style={{ color: "#dcdcdc" }}
                    />{" "}
                    Price
                  </h6>

                  <div className="content">
                    <div className="text">Current price (IDR)</div>
                    <div className="flex justify-between">
                      <p>
                        <PriceFormat price={product.price} />
                        <span></span>
                      </p>
                      <button
                        onClick={() => openModal(id)}
                        className="d-flex justify-content-center items-center w216 block h50 px-5">
                        Buy Now{" "}
                        <Icon
                          icon="gg:arrow-top-right"
                          width="24"
                          height="24"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" fadeInRight product-item description col-12 mt-5">
                <h6>
                  <Icon
                    icon="material-symbols:page-info-outline-rounded"
                    width="24"
                    height="24"
                    style={{ color: "#dcdcdc" }}
                    className="mr-3"
                  />
                  Description
                </h6>
                <i className="icon-keyboard_arrow_down"></i>
                <div className="content">
                  <p dangerouslySetInnerHTML={{ __html: product.desc }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {otherProducts && otherProducts.length > 0 && (
          <div className="tf-section-2 featured-item style-bottom">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-section pb-20">
                    <h2 className="tf-title ">Related Products</h2>
                    <Link
                      href={`/products`}
                      className="d-flex justify-content-center align-items-center gap-5">
                      More Products
                      <Icon icon="si:arrow-right-fill" width="22" height="22" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <Swiper
                    className="featured pt-10 swiper-container carousel"
                    modules={[Navigation, Pagination]}
                    loop={false}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".slider-next",
                      prevEl: ".slider-prev",
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                      768: { slidesPerView: 2, spaceBetween: 30 },
                      1024: { slidesPerView: 3, spaceBetween: 30 },
                      1300: { slidesPerView: 4, spaceBetween: 30 },
                    }}>
                    {otherProducts.map((item) => (
                      <SwiperSlide key={item.id}>
                        <Card data={item} openModal={openModal} />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                    <div className="slider-next swiper-button-next"></div>
                    <div className="slider-prev swiper-button-prev"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
    </>
  );
}
