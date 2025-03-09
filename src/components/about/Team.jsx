export default function Team() {
  const data = [
    {
      id: 1,
      fullname: "Adrina Putri",
      position: "Software Engineer",
      img: "/avatar/avatar1.jpg",
    },
    {
      id: 2,
      fullname: "Bastian Rahman",
      position: "Digital Marketing Specialist",
      img: "/avatar/avatar2.jpg",
    },
    {
      id: 3,
      fullname: "Celina Wardhana",
      position: "UI/UX Designer",
      img: "/avatar/avatar3.jpeg",
    },
    {
      id: 4,
      fullname: "Darren Pratama",
      position: "Project Manager",
      img: "/avatar/avatar1.jpg",
    },
    {
      id: 5,
      fullname: "Elvina Kusuma",
      position: "Content Creator",
      img: "/avatar/avatar2.jpg",
    },
    {
      id: 6,
      fullname: "Elvina Kusuma",
      position: "Content Creator",
      img: "/avatar/avatar3.jpeg",
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
                <div className="our-team-item pb-38 text-center">
                  <img src={item.img} alt="" />
                  <div className="name">
                    <a href="#">{item.fullname}</a>
                  </div>
                  <div className="info">{item.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
