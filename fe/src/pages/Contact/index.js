import Carousel from "../../layout/Carousel";
function Contact() {
  return (
    <>
      {/* <Carousel /> */}
      <div style={{ marginTop: "80px" }} className="inn-body-section">
        <div className="container">
          <div className="row">
            <div className="page-head">
              <h2>Contact Us</h2>
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
            <div className="col-md-3 col-sm-6 col-xs-12 new-con">
              <h2>
                My-Hotel <span>Booking</span>
              </h2>
              <p>
                Hotels worldwide incl. Infos, Ratings and Photos. Make your
                Hotel Reservation cheap.
              </p>
              <p>The top-rated hotel booking services.</p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 new-con">
              {" "}
              <img src="images/icon/20.png" alt="" />
              <h4>Address</h4>
              <p>
                28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                <br />
                Landmark : Next To Airport
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 new-con">
              {" "}
              <img src="images/icon/22.png" alt="" />
              <h4>CONTACT INFO:</h4>
              <p>
                {" "}
                <a href="tel://0099999999" className="contact-icon">
                  Phone: 01 234874 965478
                </a>
                <br />{" "}
                <a href="tel://0099999999" className="contact-icon">
                  Mobile: 01 654874 965478
                </a>
                <br />{" "}
                <a href="mailto:mytestmail@gmail.com" className="contact-icon">
                  Email: info@company.com
                </a>{" "}
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 new-con">
              {" "}
              <img src="images/icon/21.png" alt="" />
              <h4>Website</h4>
              <p>
                {" "}
                <a href="#">Website: www.mycompany.com</a>
                <br /> <a href="#">Facebook: www.facebook/my</a>
                <br /> <a href="#">Blog: www.blog.mycompany.com</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
