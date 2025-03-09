export default function Benefits() {
  const data = [
    {
      id: 1,
      title: "Advanced Software Development",
      img: "/about/perspective_matte-449-128x128.png",
      desc: "We build cutting-edge software tailored to your business needs, ensuring efficiency and innovation.",
    },
    {
      id: 2,
      title: "Strategic Digital Marketing",
      img: "/about/perspective_matte-230-128x128.png",
      desc: "Our data-driven marketing solutions help you reach the right audience and maximize engagement.",
    },
    {
      id: 3,
      title: "Effective Social Media Management",
      img: "/about/perspective_matte-24-128x128.png",
      desc: "We create impactful social media strategies to enhance your brand presence and audience interaction.",
    },
    {
      id: 4,
      title: "High-Quality Video Production",
      img: "/about/perspective_matte-20-128x128.png",
      desc: "Engaging visual content that tells your story and captivates your audience.",
    },
    {
      id: 5,
      title: "Fintech & Digital Innovation",
      img: "/about/perspective_matte-437-128x128.png",
      desc: "Pioneering solutions in financial technology to drive digital transformation.",
    },
    {
      id: 6,
      title: "Industry-Wide Expertise",
      img: "/about/perspective_matte-460-128x128.png",
      desc: "From education to entertainment and finance, we deliver integrated digital solutions for various sectors.",
    },
  ];

  return (
    <>
      <div className="tf-section-2 widget-box-icon">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section-1">
                <h2 className="tf-title pb-40">Why choose us?</h2>
              </div>
            </div>
            {data.map((item) => (
              <div
                data--delay="0s"
                className=" fadeInUp col-md-4 my-3"
                key={item.id}>
                <div className="box-icon-item">
                  <img src={item.img} alt="" />
                  <div className="title">
                    <a href="#">{item.title}</a>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
