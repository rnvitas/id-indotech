"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import CardProduct from "../ui/CardProduct";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import Modal from "../ui/Modal";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";
const fetcherCategory = (url) => axios.get(url).then((res) => res.data.data);
const fetcherProducts = (url) => axios.get(url).then((res) => res.data.data);

export default function Product() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("lowPrice");
  const [categoryId, setCategoryId] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: category } = useSWR(
    `${basePath}/api/category/`,
    fetcherCategory
  );

  const {
    data: products,
    error,
    isLoading,
  } = useSWR(
    categoryId
      ? `${basePath}/api/products?page=${page}&limit=8&sort=${sort}&categoryId=${categoryId}`
      : `${basePath}/api/products?page=${page}&limit=8&sort=${sort}`,
    fetcherProducts
  );

  const price = [
    {
      id: 1,
      price: "Price:Low to High",
      value: "lowPrice",
    },
    {
      id: 2,
      price: "Price:High to Low",
      value: "highPrice",
    },
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Fungsi untuk membuka modal dan mengatur produk yang dipilih
  const openModal = (product) => {
    if (product) {
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  // modal terbuka setelah produk ada
  useEffect(() => {
    if (products && products.length > 0 && selectedProduct) {
      console.log("Selected product:", selectedProduct);
    }
  }, [products, selectedProduct]);

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <motion.div
        variants={animations.fadeUp}
        initial="hidden"
        whileInView="visible">
        <div className="tf-section-3 discover-item">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading-section pb-30">
                  <h2 className="tf-title">Digital Products</h2>
                  <Link
                    href={`/products`}
                    className="d-flex justify-content-center align-items-center gap-5">
                    More Products
                    <Icon icon="si:arrow-right-fill" width="22" height="22" />
                  </Link>
                </div>
              </div>
              <div className="col-md-12 pb-30">
                <div className="tf-soft flex items-center justify-between">
                  <div className="soft-left">
                    <div
                      className="dropdown"
                      onClick={() => toggleDropdown("category")}>
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <Icon
                          icon="iconamoon:category-thin"
                          width="24"
                          height="24"
                        />
                        <span className="inner ">Category</span>
                        <Icon
                          className="ml-auto"
                          icon="eva:arrow-down-fill"
                          width="24"
                          height="24"
                          style={{ color: "#ffffffff" }}
                        />
                      </button>
                      <div
                        className={`dropdown-menu ${
                          activeDropdown == "category" ? "active" : ""
                        }`}
                        aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">
                          <div
                            className="sort-filter active"
                            onClick={() => setCategoryId("")}>
                            <span>All</span>
                            <span className="icon-tick">
                              <span className="path2"></span>
                            </span>
                          </div>
                        </a>
                        {Array.isArray(category) &&
                          category.map((item) => (
                            <a className="dropdown-item" key={item.id}>
                              <div
                                className="sort-filter active"
                                onClick={() => setCategoryId(item.id)}>
                                <span>{item.name}</span>
                                <span className="icon-tick">
                                  <span className="path2"></span>
                                </span>
                              </div>
                            </a>
                          ))}
                      </div>
                    </div>

                    <div
                      className="dropdown"
                      onClick={() => toggleDropdown("price")}>
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <Icon
                          icon="iconamoon:category-thin"
                          width="24"
                          height="24"
                        />
                        <span className="inner ">Price Range</span>
                        <Icon
                          className="ml-auto"
                          icon="eva:arrow-down-fill"
                          width="24"
                          height="24"
                          style={{ color: "#ffffffff" }}
                        />
                      </button>
                      <div
                        className={`dropdown-menu ${
                          activeDropdown == "price" ? "active" : ""
                        }`}
                        aria-labelledby="dropdownMenuButton">
                        {price.map((item) => (
                          <a className="dropdown-item" key={item.id}>
                            <div className="sort-filter active">
                              <span onClick={() => setSort(item.value)}>
                                {item.price}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {Array.isArray(products) &&
                products.map((item) => (
                  <CardProduct
                    key={item.id}
                    product={item}
                    openModal={openModal}
                  />
                ))}
            </div>
          </div>
        </div>
      </motion.div>
      {showModal && selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}{" "}
    </>
  );
}
