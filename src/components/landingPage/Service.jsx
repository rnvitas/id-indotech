"use client";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Service() {
  const data = [
    {
      id: "step1",
      title: "Software Development",
      desc: "Web and mobile app development with cloud, AI, and Big Data solutions.",
      img: `${basePath}/about/Software_Development.png`,
    },
    {
      id: "step2",
      title: "Social Media Management",
      desc: "Optimizing social media with creative content and branding campaigns.",
      img: `${basePath}/about/Social_Media.png`,
    },
    {
      id: "step3",
      title: "Advertising & Digital Marketing",
      desc: "Data-driven marketing with ads, SEO, and content strategies.",
      img: `${basePath}/about/Marketing.png`,
    },
    {
      id: "step4",
      title: "Video Production & Multimedia",
      desc: "Business and educational videos, animation, and live streaming.",
      img: `${basePath}/about/Video_Production.png`,
    },
  ];

  return (
    <>
      <div className="tf-section create-sell" id="service">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-30">Our Services</h2>
              </div>
            </div>
            <div className="row">
              {data.map((item, index) => (
                <div className="col-lg-3 col-md-6 flex" key={item.id}>
                  <motion.div
                    variants={animations.scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    className="w-full flex flex-col h-full">
                    <div
                      className={`tf-box-icon style-1 ${item.id} relative flex flex-col justify-between items-center min-h-[300px] p-4 bg-white rounded-lg shadow-lg`}>
                      <div className="image text-center">
                        <img src={item.img} alt="" style={{ width: "150px" }} />
                        <p>0{index + 1}</p>
                      </div>
                      <h6 className="heading text-center leading-tight">
                        {item.title}
                      </h6>
                      <p className="content mt-2 text-center">{item.desc}</p>
                      <div className="rainbow"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
