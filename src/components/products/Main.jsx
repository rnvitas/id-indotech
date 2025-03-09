"use client";
import Card from "@/app/products/Card";
import Modal from "@/components/ui/Modal";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data.data);
const fetchProducts = async (page, sort, search, categoryId) => {
  let url = `/api/products?page=${page}&limit=12&sort=${sort}&search=${search}`;
  if (categoryId) {
    url += `&categoryId=${categoryId}`;
  }
  const response = await axios.get(url);
  return {
    products: response.data.data,
    totalPages: response.data.totalPages,
    count: response.data.total,
  };
};

export default function Main() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [sort, setSort] = useState("LowPrice");
  const [activeCategory, setActiveCategory] = useState("category");
  const [activePrice, setActivePrice] = useState("price");

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: category } = useSWR(`/api/category`, fetcher);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", page, sort, search, categoryId],
    queryFn: () => fetchProducts(page, sort, search, categoryId),
  });
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
  // Fungsi untuk membuka modal dan mengatur produk yang dipilih
  const openModal = (product) => {
    if (product) {
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  // modal terbuka setelah produk ada
  useEffect(() => {
    if (
      products?.products &&
      products?.products.length > 0 &&
      selectedProduct
    ) {
      console.log("Selected product:", selectedProduct);
    }
  }, [products, selectedProduct]);

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSort(e.target.value);
  };

  const toggleCategory = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  const togglePrice = (sort) => {
    if (activePrice === sort) {
      setActivePrice(null);
    } else {
      setActivePrice(sort);
    }
  };

  return (
    <>
      <div className="flat-title-page">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading text-center">Explore Product</h1>
              <ul className="breadcrumbs flex justify-center">
                <li className="icon-keyboard_arrow_right">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section-5 artwork loadmore-12-item-1">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-3">
              <div className="widget-search mb-30">
                <form role="search" className="search-form relative">
                  <input
                    placeholder="Search products..."
                    type="search"
                    className="search-field style-1"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    title="Search for"
                  />
                  <span className="search search-submit pt-3" title="Search">
                    <Icon icon="stash:search" width="24" height="24" />{" "}
                  </span>
                </form>
              </div>
              <div className="widget-category-checkbox style-1 mb-30">
                <h5
                  className={activeCategory === "category" ? "active" : ""}
                  onClick={() => toggleCategory("category")}>
                  Category
                </h5>
                <div
                  className={`content-wg-category-checkbox ${
                    activeCategory === "category" ? "" : "hidden"
                  }`}>
                  <form action="#" className="mb-3">
                    <label>
                      All
                      <input
                        type="radio"
                        value={""}
                        checked={categoryId === ""}
                        onChange={handleCategoryChange}
                      />
                      <span className="btn-checkbox"></span>
                    </label>
                  </form>
                  {Array.isArray(category) &&
                    category.map((item) => (
                      <form action="#" className="mb-3">
                        <label>
                          {item.name}
                          <input
                            type="radio"
                            value={item.id}
                            checked={categoryId === item.id}
                            onChange={handleCategoryChange}
                          />
                          <span className="btn-checkbox"></span>
                        </label>
                      </form>
                    ))}
                </div>
              </div>
              <div className="widget-category-checkbox style-1 mb-30">
                <h5
                  className={activePrice === "price" ? "active" : ""}
                  onClick={() => togglePrice("price")}>
                  Price
                </h5>
                <div
                  className={`content-wg-category-checkbox ${
                    activePrice === "price" ? "" : "hidden"
                  }`}>
                  {" "}
                  {price.map((item) => (
                    <form action="#" className="mb-3" key={item.id}>
                      <label>
                        {item.price}
                        <input
                          type="radio"
                          value={item.value}
                          checked={sort === item.value}
                          onChange={handlePriceChange}
                        />
                        <span className="btn-checkbox"></span>
                      </label>
                    </form>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {Array.isArray(products?.products) &&
                products?.products.length > 0 ? (
                  products?.products.map((item) => (
                    <Card key={item.id} product={item} openModal={openModal} />
                  ))
                ) : (
                  <div>No products available</div>
                )}
              </div>

              <div className="mt-4 d-flex justify-content-center itmes-center gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-300">
                  Prev
                </button>
                <span className="d-flex justify-content-center items-center mx-4">
                  Page {page} of {products?.totalPages}
                </span>
                <button
                  onClick={() =>
                    setPage((prev) =>
                      prev < products?.totalPages ? prev + 1 : prev
                    )
                  }
                  disabled={page === products?.totalPages}
                  className="px-4 py-2 bg-gray-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
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
