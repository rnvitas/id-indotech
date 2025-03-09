export default function Footer() {
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
                        src="/icon/lg-indotech.png"
                        data-retina="/icon/lg-indotech.png"
                        style={{ width: "60%" }}
                      />
                    </a>
                  </div>
                </div>

                <div className="widget-last">
                  <div className="widget-menu style-4">
                    <h5 className="title-widget">Company</h5>
                    <ul>
                      <li>
                        <a href="#">Help center</a>
                      </li>
                      <li>
                        <a href="#">Platform status</a>
                      </li>
                    </ul>
                  </div>
                  <h5 className="title-widget mt-30">Join the community</h5>
                  <div className="widget-social">
                    <ul className="flex">
                      <li>
                        <a href="#" className="icon-facebook"></a>
                      </li>
                      <li>
                        <a href="#" className="icon-twitter"></a>
                      </li>
                      <li>
                        <a href="#" className="icon-vt"></a>
                      </li>
                      <li>
                        <a href="#" className="icon-tiktok"></a>
                      </li>
                      <li>
                        <a href="#" className="icon-youtube"></a>
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
