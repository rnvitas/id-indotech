import PriceFormat from "@/components/utils/PriceFormat";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Card({ data, openModal }) {
  return (
    <>
      <div className="tf-card-box style-1">
        <div className="card-media">
          <a href="#">
            <img src={data.img} alt="" />
          </a>

          <div className="button-place-bid">
            <button
              onClick={() => openModal(data.id)}
              data-toggle="modal"
              data-target="#popup_bid"
              className="tf-button">
              <span>Buy Now</span>
            </button>
          </div>
        </div>
        <h5 className="name">
          <Link href={`/products/${data.id}`}>{data.title}</Link>
        </h5>
        <div className="author flex items-center">
          <div className="avatar">
            <img src="/icon/cat-indotech.jpeg" alt="Image" />
          </div>
          <div className="info">
            <span>Category:</span>
            <h6>{data.Category?.name}</h6>
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
          <h6 className="price gem">
            IDR <PriceFormat price={data.price} />
          </h6>
        </div>
      </div>
    </>
  );
}
