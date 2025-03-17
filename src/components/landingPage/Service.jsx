"use client";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Service() {
  const data = [
    {
      id: "step1",
      title: "Software Development",
      desc: "Web and mobile app development with cloud, AI, and Big Data solutions.",
      img: `${basePath}/assets/perspective_matte-23-128x128.png`,
    },
    {
      id: "step2",
      title: "Social Media Management",
      desc: "Optimizing social media with creative content and branding campaigns.",
      img: `${basePath}/assets/perspective_matte-24-128x128.png`,
    },
    {
      id: "step3",
      title: "Advertising & Digital Marketing",
      desc: "Data-driven marketing with ads, SEO, and content strategies.",
      img: `${basePath}/assets/perspective_matte-36-128x128.png`,
    },
    {
      id: "step4",
      title: "Video Production & Multimedia",
      desc: "Business and educational videos, animation, and live streaming.",
      img: `${basePath}/assets/perspective_matte-20-128x128.png`,
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
                <div
                  data--delay="0s"
                  className=" fadeInUp col-lg-3 col-md-6 "
                  key={item.id}>
                  <div className={`tf-box-icon style-1 ${item.id} relative`}>
                    <div className="image text-center">
                      <img src={item.img} alt="" />
                      <p>0{index + 1}</p>
                    </div>
                    <h6 className="heading" style={{ lineHeight: "20px" }}>
                      <a href="contact-us.html">{item.title}</a>
                    </h6>
                    <p className="content mt-2">{item.desc}</p>
                    <div className="rainbow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
