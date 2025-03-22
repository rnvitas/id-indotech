import { Icon } from "@iconify/react";
import Link from "next/link";
import PriceFormat from "../utils/PriceFormat";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CardProduct({ product, openModal }) {
  return (
    <>
      <div
        data--delay="0s"
        className=" fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="tf-card-box style-1">
          <div className="card-media">
            <a href={`/products/${product.id}`}>
              <img src={product.img} alt="" />
            </a>

            <div className="button-place-bid">
              <button
                onClick={() => openModal(product.id)}
                data-toggle="modal"
                data-target="#popup_bid"
                className="tf-button"
                style={{ cursor: "pointer" }}>
                <span>Buy Now</span>
              </button>
            </div>
          </div>
          <h5 className="name">
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </h5>
          <div className="author flex items-center">
            <div className="avatar">
              <img src={`${basePath}/icon/cat-indotech.jpeg`} alt="Image" />
            </div>
            <div className="info">
              <span>Category:</span>
              <h6>
                <Link href={`/products/${product.id}`}>
                  {product.Category?.name}
                </Link>
              </h6>
            </div>
          </div>
          <div className="divider"></div>
          <div className="meta-info flex items-center justify-between">
            <span className="text-bid">
              {" "}
              <Icon
                icon="famicons:pricetag-outline"
                width="14"
                height="14"
                style={{ color: "#fffbfb" }}
              />{" "}
              Price
            </span>
            <h6 className="price gem d-flex justify-content-start align-items-center gap-2">
              IDR <PriceFormat price={product.price} />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
