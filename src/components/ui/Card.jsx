// import Image from "next/image";
import Link from "next/link";

export default function Card({ data, openModal }) {
  return (
    <>
      <div className="tf-card-box">
        <div className="card-media">
          <a href="#">
            <img src={data.img} alt="" />
          </a>
          <span className="wishlist-button icon-heart"></span>
          <div className="featured-countdown">
            <span
              className="js-countdown"
              data-timer="7500"
              data-labels="d,h,m,s"></span>
          </div>
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
        <div className="meta-info text-center">
          <h5 className="name">
            <Link href="nft-detail-2.html">{data.title}</Link>
          </h5>
          <h6 className="price gem">
            <i className="icon-gem">{data.Category?.name}</i>
          </h6>
        </div>
      </div>
    </>
  );
}
