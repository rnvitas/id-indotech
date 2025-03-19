"use client";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <>
      <div className="page-title about-us relative">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12 pages-title">
              <div className="content">
                <p>About Us</p>
                <motion.div
                  variants={animations.fadeUp}
                  initial="hidden"
                  whileInView="visible">
                  <h2 data--delay="0s" className=" fadeInUp mb-5">
                    Indotech Digital Group – Innovate, Integrate, Elevate!
                  </h2>
                </motion.div>
                <motion.div
                  variants={animations.fadeUp}
                  initial="hidden"
                  whileInView="visible">
                  <p data--delay="0.1s" className=" fadeInUp">
                    A technology company specializing in software development,
                    digital marketing, social media management, video
                    production, and innovation in the digital and fintech
                    industries. As a technology consortium, Indotech Digital
                    Group provides integrated digital solutions for various
                    industries, ranging from education and entertainment to
                    finance.
                  </p>
                </motion.div>
                <div
                  data--delay="0.2s"
                  className=" fadeInUp flat-button flex justify-center">
                  <motion.div
                    variants={animations.scaleUp}
                    initial="hidden"
                    whileInView="visible">
                    <a
                      href="/about/#benefit"
                      className="tf-button style-1 h50 w190">
                      Get started <i className="icon-arrow-up-right2"></i>
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="icon-background">
                <img
                  className="absolute item1"
                  src={`${basePath}/assets/images/item-background/item11.png`}
                  alt=""
                />
                <img
                  className="absolute item2"
                  src={`${basePath}/assets/images/item-background/item10.png`}
                  alt=""
                />
                <img
                  className="absolute item3"
                  src={`${basePath}/assets/images/item-background/item12.png`}
                  alt=""
                />
                <img
                  className="absolute item4"
                  src={`${basePath}/assets/images/item-background/item13.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
