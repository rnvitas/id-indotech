"use client";
import * as animations from "@/lib/animation";
import { motion } from "framer-motion";
export default function Team() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const data = [
    {
      id: 1,
      fullname: "Afandi Yusuf",
      position: "Head Digital & Production",
      img: `${basePath}/avatar/Afandi.png`,
    },
    {
      id: 2,
      fullname: "Alfitya Alfathany",
      position: "Editor & Content Development",
      img: `${basePath}/avatar/AL.png`,
    },
    {
      id: 3,
      fullname: "Alfino Rafael",
      position: "Motion Design & Visual Art",
      img: `${basePath}/avatar/Alfino.png`,
    },
    {
      id: 4,
      fullname: "Ari Haryanto",
      position: "Picture & Video Production",
      img: `${basePath}/avatar/Ari.png`,
    },
    {
      id: 5,
      fullname: "Basthotan Milka",
      position: "Product Development",
      img: `${basePath}/avatar/Basthotan.png`,
    },
    {
      id: 6,
      fullname: "Grafisya Salsabilla",
      position: "Digital Creative",
      img: `${basePath}/avatar/Grafisya.png`,
    },
    {
      id: 7,
      fullname: "Iqbal Hasbi",
      position: "Legal Officer",
      img: `${basePath}/avatar/Iqbal.png`,
    },
    {
      id: 8,
      fullname: "Muh Naufal AlKahfi",
      position: "Software Engineer & CEO",
      img: `${basePath}/avatar/Naufal.png`,
    },
    {
      id: 9,
      fullname: "Rizki Hardiyanto",
      position: "Product Manager",
      img: `${basePath}/avatar/Rizki.png`,
    },
    {
      id: 10,
      fullname: "Rusydina Novitasari",
      position: "IT Developer",
      img: `${basePath}/avatar/Vita.png`,
    },
    {
      id: 11,
      fullname: "Shafa Mantsya",
      position: "IT Developer",
      img: `${basePath}/avatar/Shafa.png`,
    },
    {
      id: 12,
      fullname: "Silvia Afiffah",
      position: "Finance & Administration",
      img: `${basePath}/avatar/Silvia.png`,
    },

    {
      id: 13,
      fullname: "William Valentino",
      position: "Graphic Designer",
      img: `${basePath}/avatar/William.png`,
    },
  ];

  return (
    <>
      <div className="widget-our-team">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-1">
                <h2 className="tf-title pb-40">Meet Our Amazing Team</h2>
              </div>
            </div>
            {data.map((item) => (
              <div
                data-wow-delay="0s"
                className="fadeInUp col-md-2 col-6 "
                key={item.id}>
                <motion.div
                  variants={animations.scaleUp}
                  initial="hidden"
                  whileInView="visible">
                  <div className="our-team-item pb-38 text-center">
                    <img src={item.img} alt="" />
                    <div className="name">
                      <a href="#">{item.fullname}</a>
                    </div>
                    <div className="info">{item.position}</div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
