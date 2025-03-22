// import Image from "next/image";
import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Card({ data, openModal }) {
  return (
    <>
      <div className="tf-card-box">
        <div className="card-media">
          <a href={`${basePath}/products/${data.id}`}>
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
