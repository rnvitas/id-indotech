"use client";
import { Icon } from "@iconify/react";
import Card from "./Card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const fetchBlogs = async (page, search) => {
  let url = `${basePath}/api/blogs?page=${page}&limit=6`;
  if (search) {
    url += `&search=${search}`;
  }

  const response = await axios.get(url);
  return {
    blogs: response.data.data,
    totalPages: response.data.totalPages,
    count: response.data.total,
  };
};
export default function Main() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs", page, search],
    queryFn: () => fetchBlogs(page, search),
  });
  // console.log(blogs);
  return (
    <>
      <div className="flat-title-page">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <h1 className="heading text-center">Blog</h1>
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

      <div className="tf-section tf-grid-blog pb-80">
        <div className="themesflat-container">
          <div className="d-flex justify-content-center items-center mb-30">
            <div className="widget-search">
              <form role="search" className="search-form relative">
                <input
                  type="search"
                  className="search-field style-1"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  title="Search for"
                />
                <span
                  className="search search-submit pt-3"
                  type="submit"
                  title="Search">
                  <Icon icon="stash:search" width="24" height="24" />{" "}
                </span>
              </form>
            </div>
          </div>
          <div className="row">
            {Array.isArray(blogs?.blogs) && blogs?.blogs.length > 0 ? (
              blogs?.blogs.map((item) => <Card key={item.id} data={item} />)
            ) : (
              <div>No Blogs available</div>
            )}
          </div>
          <div className="rd-flex justify-content-center items-center">
            <div className="mt-4 d-flex justify-content-center items-center gap-2">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-300">
                Prev
              </button>
              <span className="d-flex justify-content-center items-center mx-4">
                Page {page} of {blogs?.totalPages}
              </span>
              <button
                onClick={() =>
                  setPage((prev) =>
                    prev < blogs?.totalPages ? prev + 1 : prev
                  )
                }
                disabled={page === blogs?.totalPages}
                className="px-4 py-2 bg-gray-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
