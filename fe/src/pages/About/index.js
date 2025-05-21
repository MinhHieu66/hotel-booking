import Carousel from "../../layout/Carousel";
function About() {
  return (
    <>
      {/* <Carousel /> */}
      <div style={{ marginTop: "80px" }} className="inn-body-section">
        <div className="container">
          <div className="row">
            <div className="page-head">
              <h2>About Us</h2>
              <div className="head-title">
                <div className="hl-1"></div>
                <div className="hl-2"></div>
                <div className="hl-3"></div>
              </div>
              <p>
                Quisque at volutpat nibh. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-left">
                <h2>
                  Welcome to <span>My Hotel</span>
                </h2>
                <h4>
                  Cras eu nisl quis est mattis placerat. Etiam ut ante et lacus
                  imperdiet sagittis a finibus mauris.
                </h4>
                <p>
                  Proin nisl mi, eleifend in faucibus et, venenatis eu turpis.
                  Ut hendrerit eleifend odio. Nullam ullamcorper viverra ex quis
                  tempus. In hac habitasse platea dictumst. Vestibulum sed
                  tempor metus.{" "}
                </p>
                <p>
                  Duis sollicitudin augue nec bibendum mollis. Proin luctus diam
                  vel hendrerit dictum. Nunc tincidunt nibh in sem blandit
                  venenatis. Suspendisse rutrum ultricies porttitor. Quisque at
                  volutpat nibh.Aliquam dapibus turpis mollis felis fermentum
                  bibendum. In finibus a nulla vitae dapibus. Nam non suscipit
                  urna. Vestibulum et lacinia justo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>{" "}
                <a href="#" className="link-btn">
                  Call to us: (+404) 142 21 23 78
                </a>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-right">
                {" "}
                <img src="images/about.jpg" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
