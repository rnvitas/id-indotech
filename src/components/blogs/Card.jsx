import { Icon } from "@iconify/react";
import Link from "next/link";
import DateFormat from "../utils/DateFormat";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Card({ data }) {
  return (
    <>
      <div className="fl-blog col-lg-4 col-md-6">
        <article className="tf-card-article">
          <div className="card-media">
            <Link href={`/blogs/${data.id}`}>
              <img src={data.img} alt="" />
            </Link>
          </div>
          <div className="meta-info flex">
            <div
              className="item d-flex justify-content-center items-center "
              style={{ marginLeft: "-20px;" }}>
              <Icon
                className="mr-2"
                icon="lets-icons:time"
                width="24"
                height="24"
              />{" "}
              <DateFormat dateString={data.createdAt} />
            </div>
          </div>
          <div className="card-title">
            <h5>
              <Link href={`/blogs/${data.id}`}>{data.title}</Link>
            </h5>
          </div>
          <div className="card-bottom flex items-center justify-between">
            <div className="author flex items-center justify-between">
              <div className="avatar">
                <img src={`${basePath}/icon/cat-indotech.jpeg`} alt="Image" />
              </div>
              <div className="info">
                <span>Posted by:</span>
                <h6>Indotech Digital Group</h6>
              </div>
            </div>
            <Link className="link" href={`/blogs/${data.id}`}>
              <Icon icon="gg:arrow-top-right" width="24" height="24" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
