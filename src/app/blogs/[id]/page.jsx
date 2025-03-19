"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import DateFormat from "@/components/utils/DateFormat";
import Link from "next/link";
import { Icon } from "@iconify/react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const fetcher = (url) => axios.get(url).then((res) => res.data.blogs);
const fetcherEtc = (url) => axios.get(url).then((res) => res.data);

export default function DetailBlog() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useSWR(id ? `${basePath}/api/blogs/${id}` : null, fetcher);

  const { data: etcBlogs } = useSWR(
    `${basePath}/api/blogs?page=1&limit=4`,
    fetcherEtc
  );
  // console.log(fetcher);
  const otherBlogs = (etcBlogs?.data || []).filter(
    (item) => String(item.id) !== String(id)
  );

  // console.log(otherBlogs);
  // console.log(blog);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <div className="flat-title-page blog-detail mtt-5">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <ul className="breadcrumbs flex">
                <li className="icon-keyboard_arrow_right">
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tf-section tf-blog-detail pb-48">
        <div className="themesflat-container">
          <div className="row">
            <div className="wrapper col-md-8">
              <div className="inner-content mr-20">
                <h2 className="title-post">{blog.title} </h2>
                <div className="meta-post flex justify-between mt-10 items-center">
                  <div className="author flex items-center justify-between">
                    <div className="avatar">
                      <img
                        src={`${basePath}/icon/cat-indotech.jpeg`}
                        alt="Image"
                      />
                    </div>
                    <div className="info">
                      <span>Posted by:</span>
                      <h6>Indotech Digital Group</h6>
                    </div>
                  </div>
                  <div className="meta-info flex">
                    <div className="item date d-flex items-center">
                      <Icon icon="lets-icons:time" width="24" height="24" />
                      <DateFormat dateString={blog.createdAt} />
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="title">{blog.title}</div>
                <div className="image">
                  <img src={blog.img} alt="Image" />
                </div>
                <div
                  className="inner-post"
                  dangerouslySetInnerHTML={{ __html: blog.desc }}></div>
              </div>
            </div>

            {otherBlogs && otherBlogs.length > 0 && (
              <div className="side-bar col-md-4">
                <div className="widget widget-related-posts">
                  <h5 className="title-widget">Related Posts</h5>

                  {otherBlogs.map((item) => (
                    <div className="related-posts-item">
                      <div className="card-media">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card-content">
                        <h5>
                          <Link href={`/blogs/${item.id}`}>{item.title}</Link>
                        </h5>
                        <div className="item date d-flex items-center">
                          <Icon
                            className="mr-2"
                            icon="lets-icons:time"
                            width="24"
                            height="24"
                          />
                          <DateFormat dateString={item.createdAt} />{" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
