import { useEffect, useState } from "react";
import Carousel from "../../layout/Carousel";
function OurRooms() {
  return (
    <>
      {/* <Carousel /> */}
      <div className="inn-body-section pad-bot-70">
        <div className="container">
          <div className="row">
            <div className="page-head">
              <h2>Our Rooms</h2>
              <div className="head-title">
                <div className="hl-1"></div>
                <div className="hl-2"></div>
                <div className="hl-3"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/1.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Master Suite</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details-block.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/2.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Mini Suite</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/3.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Ultra Deluxe</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details-1.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/4.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Luxury Room</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details-block.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/5.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Premium Room</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
            {/* <!--ROOM SECTION--> */}
            <div className="room room-1">
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>{" "}
              </div>
              {/* <!--ROOM IMAGE--> */}
              <div className="r1 r-com r-com-1 r1-1">
                <img src="images/room/6.jpg" alt="" />{" "}
              </div>
              {/* <!--ROOM RATING--> */}
              <div className="r2 r-com r-com-1">
                <h3>Normal Room</h3>
                <h4>Review</h4>
                <div className="r2-ratt">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i>{" "}
                  <img src="images/h-trip.png" alt="" />{" "}
                  <span>Excellent 4.5 / 5</span>{" "}
                </div>
                <ul>
                  <li>Max Adult : 3</li>
                  <li>Max Child : 1</li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="r2-available r2-available-1">Available</div>
              </div>
              {/* <!--ROOM AMINITIES--> */}
              <div className="r3 r-com r-com-1">
                <h4>Aminities</h4>
                <ul>
                  <li>Ironing facilities</li>
                  <li>Tea/Coffee maker</li>
                  <li>Air conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Wake-up service</li>
                </ul>
              </div>
              {/* <!--ROOM PRICE--> */}
              <div className="r4 r-com r-com-1">
                <h4>Price</h4>
                <p>Price for 1 night</p>
                <p>
                  <span className="room-price-1">5000</span>{" "}
                  <span className="room-price">Rs: 7000</span>{" "}
                </p>
                <p>Non Refundable</p>
              </div>
              {/* <!--ROOM BOOKING BUTTON--> */}
              <div className="r5 r-com r-com-1 r5-1">
                <p>Price for 1 night</p>{" "}
                <a href="room-details-1.html" className="inn-room-book">
                  Book
                </a>{" "}
              </div>
            </div>
            {/* <!--END ROOM SECTION--> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurRooms;
