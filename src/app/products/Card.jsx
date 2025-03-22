"use client";

import PriceFormat from "@/components/utils/PriceFormat";
import { Icon } from "@iconify/react";
import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function card({ product, openModal }) {
  return (
    <>
      <div data--delay="0s" className=" fadeInUp col-lg-4 col-md-6">
        <div className="tf-card-box style-4">
          <div className="author flex items-center">
            <div className="avatar">
              <img src={`${basePath}/icon/cat-indotech.jpeg`} alt="Image" />
            </div>
            <div className="info">
              <span>Category:</span>
              <h6>
                <Link href={`/products/${product.id}`}>
                  {product.Category?.name}
                </Link>{" "}
              </h6>
            </div>
          </div>
          <div className="card-media">
            <Link href={`/products/${product.id}`}>
              <img src={product.img} alt="Product" />
            </Link>
          </div>
          <h5 className="name">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h5>
          <div className="meta-info flex items-center justify-between">
            <div>
              <span className="text-bid">Price</span>
              <h6 className="price gem">
                IDR <PriceFormat price={product.price} />
              </h6>
            </div>

            <div className="button-place-bid">
              <button
                href="#"
                className="px-3 py-3 d-flex items-center justify-content-center"
                style={{ background: "#DDF247", borderRadius: "10px" }}
                onClick={() => openModal(product.id)}>
                <Icon
                  icon="prime:cart-arrow-down"
                  width="24"
                  height="24"
                  style={{ color: "#000000" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
