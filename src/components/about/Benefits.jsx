"use client";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";

export default function Benefits() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const data = [
    {
      id: 1,
      title: "Advanced Software Development",
      img: `${basePath}/about/Software_Development.png`,
      desc: "We build cutting-edge software tailored to your business needs, ensuring efficiency and innovation.",
    },
    {
      id: 2,
      title: "Strategic Digital Marketing",
      img: `${basePath}/about/Marketing.png`,
      desc: "Our data-driven marketing solutions help you reach the right audience and maximize engagement.",
    },
    {
      id: 3,
      title: "Effective Social Media Management",
      img: `${basePath}/about/Social_Media.png`,
      desc: "We create impactful social media strategies to enhance your brand presence and audience interaction.",
    },
    {
      id: 4,
      title: "High-Quality Video Production",
      img: `${basePath}/about/Video_Production.png`,
      desc: "Engaging visual content that tells your story and captivates your audience.",
    },
    {
      id: 5,
      title: "Fintech & Digital Innovation",
      img: `${basePath}/about/Fintech.png`,
      desc: "Pioneering solutions in financial technology to drive digital transformation.",
    },
    {
      id: 6,
      title: "Industry-Wide Expertise",
      img: `${basePath}/about/Industry.png`,
      desc: "From education to entertainment and finance, we deliver integrated digital solutions for various sectors.",
    },
  ];

  return (
    <div className="tf-section-2 widget-box-icon" id="benefit">
      <div className="themesflat-container">
        <div className="row align-items-stretch">
          {" "}
          {/* Tambahkan align-items-stretch */}
          <div className="col-md-12">
            <div className="heading-section-1">
              <h2 className="tf-title pb-40">Why choose us?</h2>
            </div>
          </div>
          {data.map((item) => (
            <div className="col-md-4 my-3 d-flex h-100" key={item.id}>
              {" "}
              {/* Tambahkan d-flex h-100 */}
              <motion.div
                variants={animations.fadeUp}
                initial="hidden"
                whileInView="visible"
                className="w-100">
                <div className="box-icon-item d-flex flex-column h-100 justify-content-center align-items-center text-center p-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "150px" }}
                  />
                  <div className="title mt-3">
                    <a href="#">{item.title}</a>
                  </div>
                  <p className="flex-grow-1">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
