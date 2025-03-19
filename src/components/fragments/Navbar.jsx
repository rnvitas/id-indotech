"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = document.getElementById("header_main")?.offsetTop || 0;
      const headerHeight =
        document.getElementById("header_main")?.clientHeight || 0;
      const scrollY = window.scrollY;

      setIsFixed(scrollY > offsetTop + headerHeight);
      setIsSmall(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-nav-wrap") &&
        !event.target.closest(".mobile-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);
  return (
    <header
      id="header_main"
      className={`header_1 header-fixed ${isFixed ? "is-fixed" : ""} ${
        isSmall ? "is-small" : ""
      } pt-40`}>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div className="wrap-box flex">
                <div id="site-logo">
                  <div id="site-logo-inner">
                    <a href="/" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        src={`${basePath}/icon/lg-indotech.png`}
                        alt="Logo"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="mobile-button"
                  onClick={() => setIsMobileMenuOpen(true)}>
                  <span></span>
                </div>
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li
                      className={`menu-item ${
                        path == "/" ? "current-menu-item" : ""
                      } `}>
                      <Link href="/">Home</Link>
                    </li>
                    <li
                      className={`menu-item ${
                        path == "/about" ? "current-menu-item" : ""
                      } `}>
                      {" "}
                      <Link href="/about">About us</Link>
                    </li>
                    <li
                      className={`menu-item ${
                        path == "/products" ? "current-menu-item" : ""
                      } `}>
                      {" "}
                      <Link href="/products">Products</Link>
                    </li>
                    <li
                      className={`menu-item ${
                        path == "/blogs" ? "current-menu-item" : ""
                      } `}>
                      {" "}
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li
                      className={`menu-item ${
                        path == "/contact" ? "current-menu-item" : ""
                      } `}>
                      {" "}
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="flat-wallet flex">
                  <div id="wallet-header">
                    <a
                      href="/wallet"
                      id="connectbtn"
                      className="tf-button style-1">
                      <Icon
                        icon="tabler:plus"
                        width="24"
                        height="24"
                        style={{ color: "#000000" }}
                      />{" "}
                      <span>Become Client</span>
                    </a>
                  </div>
                </div>

                <div
                  className={`mobile-nav-wrap ${
                    isMobileMenuOpen ? "active" : ""
                  }`}>
                  <div
                    className="overlay-mobile-nav"
                    onClick={() => setIsMobileMenuOpen(false)}></div>
                  <div className="inner-mobile-nav">
                    <a href="index.html" rel="home" className="main-logo">
                      <img
                        id="mobile-logo_header"
                        src={`${basePath}/icon/lg-indotech.png`}
                        data-retina="icon/lg-indotech.png"
                        style={{ width: "70%" }}
                      />
                    </a>
                    <div
                      className="mobile-nav-close"
                      onClick={() => setIsMobileMenuOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FFFFFF"
                        width="20px"
                        height="20px"
                        viewBox="0 0 122.878 122.88">
                        <g>
                          <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                        </g>
                      </svg>
                    </div>
                    <nav id="mobile-main-nav" className="mobile-main-nav">
                      <ul id="menu-mobile-menu" className="menu">
                        <li
                          className={`menu-item ${
                            path == "/" ? "current-menu-item" : ""
                          } `}>
                          {" "}
                          <Link
                            className="item-menu-mobile"
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                          </Link>
                        </li>

                        <li
                          className={`menu-item ${
                            path == "/about" ? "current-menu-item" : ""
                          } `}>
                          {" "}
                          <Link
                            className="item-menu-mobile"
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            About
                          </Link>
                        </li>

                        <li
                          className={`menu-item ${
                            path == "/products" ? "current-menu-item" : ""
                          } `}>
                          {" "}
                          <Link
                            className="item-menu-mobile"
                            href="/products"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            Explore
                          </Link>
                        </li>
                        <li
                          className={`menu-item ${
                            path == "/blogs" ? "current-menu-item" : ""
                          } `}>
                          {" "}
                          <Link
                            className="item-menu-mobile"
                            href="/blogs"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            Blogs
                          </Link>
                        </li>
                        <li
                          className={`menu-item ${
                            path == "/contact" ? "current-menu-item" : ""
                          } `}>
                          {" "}
                          <Link
                            className="item-menu-mobile"
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
