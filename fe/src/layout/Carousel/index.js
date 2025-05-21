import React, { useState } from "react";
function Carousel() {
  //   const [activeIndex, setActiveIndex] = useState(3); // Mặc định thẻ thứ 4 có active

  //   const handleClick = (index) => {
  //     setActiveIndex(index); // Cập nhật chỉ mục của thẻ active
  //   };
  return (
    <>
      <div>
        <div
          className="slider fullscreen"
          style={{
            touchAction: "pan-y",
            WebkitUserDrag: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <ul className="slides">
            <li
              className=""
              style={{
                opacity: 0,
                transform: "translateX(0px) translateY(0px)",
              }}
            >
              {" "}
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt=""
                style={{
                  backgroundImage: 'url("images/slider/1.jpg")',
                }}
              />
              {/* <!-- random image --> */}
              <div
                className="caption center-align slid-cap"
                style={{
                  opacity: 0,
                  transform: "translateY(-100px) translateX(0px)",
                }}
              >
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
                <h2>This is our big Tagline!</h2>
                <p>
                  Mauris non placerat nulla. Sed vestibulum quam mauris, et
                  malesuada tortor venenatis at.Aenean euismod sem porta est
                  consectetur posuere. Praesent nisi velit, porttitor ut
                  imperdiet a, pellentesque id mi.
                </p>{" "}
                <a href="#" className="waves-effect waves-light">
                  Booking
                </a>
                <a href="#">Booking</a>{" "}
              </div>
            </li>
            <li
              className=""
              style={{
                opacity: 0,
                transform: "translateX(0px) translateY(0px)",
              }}
            >
              {" "}
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt=""
                style={{
                  backgroundImage: 'url("images/slider/2.jpg")',
                }}
              />
              {/* <!-- random image --> */}
              <div
                className="caption center-align slid-cap"
                style={{
                  opacity: 0,
                  transform: "translateY(-100px) translateX(0px)",
                }}
              >
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
                <h2>This is our big Tagline!</h2>
                <p>
                  Mauris non placerat nulla. Sed vestibulum quam mauris, et
                  malesuada tortor venenatis at.Aenean euismod sem porta est
                  consectetur posuere. Praesent nisi velit, porttitor ut
                  imperdiet a, pellentesque id mi.
                </p>{" "}
                <a href="#" className="waves-effect waves-light">
                  Booking
                </a>
                <a href="#">Booking</a>{" "}
              </div>
            </li>
            <li
              className=""
              style={{
                opacity: 0,
                transform: "translateX(0px) translateY(0px)",
              }}
            >
              {" "}
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt=""
                style={{
                  backgroundImage: 'url("images/slider/3.jpg")',
                }}
              />
              {/* <!-- random image --> */}
              <div
                className="caption center-align slid-cap"
                style={{
                  opacity: 0,
                  transform: "translateY(-100px) translateX(0px)",
                }}
              >
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
                <h2>This is our big Tagline!</h2>
                <p>
                  Mauris non placerat nulla. Sed vestibulum quam mauris, et
                  malesuada tortor venenatis at.Aenean euismod sem porta est
                  consectetur posuere. Praesent nisi velit, porttitor ut
                  imperdiet a, pellentesque id mi.
                </p>{" "}
                <a href="#" className="waves-effect waves-light">
                  Booking
                </a>
                <a href="#">Booking</a>{" "}
              </div>
            </li>
            <li
              className="active"
              style={{
                opacity: 1,
                transform: "translateX(0px) translateY(0px)",
              }}
            >
              {" "}
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                alt=""
                style={{
                  backgroundImage: 'url("images/slider/4.jpg")',
                }}
              />
              {/* <!-- random image --> */}
              <div
                className="caption center-align slid-cap"
                style={{
                  opacity: 1,
                  transform: "translateY(0px) translateX(0px)",
                }}
              >
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
                <h2>This is our big Tagline!</h2>
                <p>
                  Mauris non placerat nulla. Sed vestibulum quam mauris, et
                  malesuada tortor venenatis at.Aenean euismod sem porta est
                  consectetur posuere. Praesent nisi velit, porttitor ut
                  imperdiet a, pellentesque id mi.
                </p>{" "}
                <a href="#" className="waves-effect waves-light">
                  Booking
                </a>
                <a href="#">Booking</a>{" "}
              </div>
            </li>
          </ul>
          {/* <ul className="indicators">
            <li className="indicator-item"></li>
            <li className="indicator-item"></li>
            <li className="indicator-item"></li>
            <li className="indicator-item active trucginag"></li>
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Carousel;
