"use client";

import { Icon } from "@iconify/react";
import axios from "axios";
import useSWR from "swr";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);
export default function Footer() {
  const { data } = useSWR(`${basePath}/api/category`, fetcher);
  return (
    <>
      <footer id="footer">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content flex flex-grow">
                <div className="widget-logo flex-grow">
                  <div className="logo-footer" id="logo-footer">
                    <a href="index.html">
                      <img
                        id="logo_footer"
                        src={`${basePath}/icon/lg-indotech.png`}
                        data-retina="/icon/lg-indotech.png"
                        style={{ width: "60%" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="widget widget-menu style-1">
                  <h5 className="title-widget">Menu</h5>
                  <ul>
                    <li>
                      <a href={`${basePath}/`}>Home</a>
                    </li>
                    <li>
                      <a href={`${basePath}/about`}>About Us</a>
                    </li>
                    <li>
                      <a href={`${basePath}/products`}>Products</a>
                    </li>
                    <li>
                      <a href={`${basePath}/blogs`}>Blogs</a>
                    </li>
                    <li>
                      <a href={`${basePath}/contact`}>Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget-menu style-2">
                  <h5 className="title-widget">Products</h5>
                  <ul>
                    {Array.isArray(data) &&
                      data.map((item) => (
                        <li key={item.id}>
                          <a href={`${basePath}/products`}>{item.name}</a>
                        </li>
                      ))}
                  </ul>
                </div>

                <div class="widget widget-menu style-3">
                  <h5 class="title-widget">Specializing</h5>
                  <ul>
                    <li>
                      <a href={`${basePath}/#service`}>Software Development</a>
                    </li>
                    <li>
                      <a href={`${basePath}/#service`}>
                        Advertising & Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href={`${basePath}/#service`}>
                        Social Media Management
                      </a>
                    </li>
                    <li>
                      <a href={`${basePath}/#service`}>
                        Video Production & Multimedia
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget-last">
                  <div className="widget-menu style-4">
                    <h5 className="title-widget">Addres</h5>
                    <ul>
                      <li>
                        <a href="" target="_blank">
                          {" "}
                          Gedung Wirausaha Lantai 1 Unit 104, jalan Hr rasuna
                          Said Kav. C-5, Kel Karet, Kec Setia Budi,Jakarta.
                          Indonesia Kode Pos 12920
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5 className="title-widget mt-30">Join the community</h5>
                  <div className="widget-social">
                    <ul className="flex">
                      <li>
                        <a href="#" className="icon-facebook">
                          <Icon
                            icon="iconoir:facebook"
                            width="24"
                            height="24"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon-twitter">
                          <Icon icon="prime:twitter" width="24" height="24" />
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" className="icon-vt"></a>
                      </li> */}
                      <li>
                        <a href="#" className="icon-tiktok">
                          <Icon icon="ph:tiktok-logo" width="24" height="24" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon-youtube">
                          <Icon
                            icon="proicons:youtube"
                            width="24"
                            height="24"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Indotech Digital Group - All Rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
