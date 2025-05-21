import ModalLogin from "../../components/ModalLogin";
import ModalRegister from "../../components/ModalRegister";
import ModalForgotPassword from "../../components/ModalForgotPassword";
import ModalResetPassword from "../../components/ModalResetPassword";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Modal from "react-modal";

function Header() {
  return (
    <>
      <div className="menu-section">
        <div className="container">
          <div className="row">
            <div className="top-bar">
              <ul>
                <li>
                  <a
                    className="dropdown-button"
                    href="#"
                    data-activates="dropdown1"
                  >
                    {" "}
                    My Account <i className="fa fa-angle-down"></i>
                  </a>
                </li>
                <li>
                  <a href="all-hotels.html">Our Hotels</a>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a
                    className="dropdown-button"
                    href="#"
                    data-activates="dropdown2"
                  >
                    Language <i className="fa fa-angle-down"></i>
                  </a>
                </li>
                <li>
                  <a href="#">Toll Free No: 1800 102 7275</a>
                </li>
              </ul>
            </div>
            <div className="all-drop-down">
              {/* Dropdown Structure  */}
              <ul id="dropdown1" className="dropdown-content drop-con-man">
                <li>
                  <a href="dashboard.html">
                    <img src="images/icon/15.png" alt="" /> My Account
                  </a>
                </li>
                <li>
                  <a href="db-profile.html">
                    <img src="images/icon/2.png" alt="" /> My Profile
                  </a>
                </li>
                <li>
                  <a href="db-booking.html">
                    <img src="images/icon/16.png" alt="" /> My Bookings
                  </a>
                </li>
                <li>
                  <a href="db-event.html">
                    <img src="images/icon/17.png" alt="" /> My Events
                  </a>
                </li>
                <li>
                  <a href="db-activity.html">
                    <img src="images/icon/14.png" alt="" /> My Activity
                  </a>
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="#modal2">
                    <img src="images/icon/5.png" alt="" /> Register
                  </a>
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="#modal1">
                    <img src="images/icon/6.png" alt="" /> Log In
                  </a>
                </li>
                <li>
                  <a href="/" data-toggle="modal" data-target="#modal3">
                    <img src="images/icon/13.png" alt="" /> Forgot Password
                  </a>
                </li>
                {/* <li>
                  <a href="/" data-toggle="modal" data-target="#modal4">
                    <img src="images/icon/13.png" alt="" /> Đặt lại mật khẩu
                  </a>
                </li> */}
              </ul>
              {/* Dropdown Structure */}
              <ul id="drop-home" className="dropdown-content drop-con-man">
                <li>
                  <a href="main.html">Home - Default</a>
                </li>
                <li>
                  <a href="index-1.html">Home - Reservation</a>
                </li>
                <li>
                  <a href="index-2.html">Home - FullSlider</a>
                </li>
                <li>
                  <a href="index-3.html">Home - Block Color</a>
                </li>
              </ul>
              {/* <!-- Dropdown Structure --> */}
              <ul id="dropdown2" className="dropdown-content drop-con-man">
                <li>
                  <a href="/">English</a>
                </li>
                <li>
                  <a href="/">Spanish</a>
                </li>
                <li>
                  <a href="/">Hindi</a>
                </li>
                <li>
                  <a href="/">Russian</a>
                </li>
                <li>
                  <a href="/">Portuguese</a>
                </li>
              </ul>
              {/* <!-- ROOM Dropdown Structure --> */}
              <ul id="drop-room" className="dropdown-content drop-con-man">
                <li>
                  <a href="all-rooms.html">All Suite Rooms</a>
                </li>
                <li>
                  <a href="room-details.html">Room Details</a>
                </li>
                <li>
                  <a href="room-details-block.html">Room Details Block</a>
                </li>
                <li>
                  <a href="room-details-1.html">Room Parallax</a>
                </li>
              </ul>
              {/* <!-- PAGES Dropdown Structure --> */}
              <div
                id="drop-page"
                className="dropdown-content drop-con-man drop-full"
              >
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="room-details.html">Room Details - 1</a>
                    </li>
                    <li>
                      <a href="room-details-1.html">Room Details - 2</a>
                    </li>
                    <li>
                      <a href="room-details-block.html">Room Details - 3</a>
                    </li>
                    <li>
                      <a href="all-rooms.html">All Rooms</a>
                    </li>
                    <li>
                      <a href="all-rooms1.html">All Rooms - 1</a>
                    </li>
                    <li>
                      <a href="aminities.html">Aminities</a>
                    </li>
                    <li>
                      <a href="aminities1.html">Aminities - 1</a>
                    </li>
                  </ul>
                </div>
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="dashboard.html">User Dashboard</a>
                    </li>
                    <li>
                      <a href="db-activity.html">DB Activity</a>
                    </li>
                    <li>
                      <a href="db-booking.html">DB-Booking</a>
                    </li>
                    <li>
                      <a href="db-event.html">DB-Event</a>
                    </li>
                    <li>
                      <a href="db-new-booking.html">DB New Booking</a>
                    </li>
                    <li>
                      <a href="booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-inner.html">Blog Inner</a>
                    </li>
                    <li>
                      <a href="events.html">Events</a>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="gallery1.html">Gallery - 1</a>
                    </li>
                    <li>
                      <a href="gallery2.html">Gallery - 2</a>
                    </li>
                    <li>
                      <a href="collapsible.html">Collapsible</a>
                    </li>
                  </ul>
                </div>
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="services1.html">Services - 1</a>
                    </li>
                    <li>
                      <a href="typho-grid.html">Grid Layout</a>
                    </li>
                    <li>
                      <a href="typo-alert.html">Alert Messages</a>
                    </li>
                    <li>
                      <a href="form-fields.html">Form Fields</a>
                    </li>
                    <li>
                      <a href="menu.html">Food Menu</a>
                    </li>
                  </ul>
                </div>
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="typo-all-head.html">All Headers</a>
                    </li>
                    <li>
                      <a href="typo-badges-labels.html">Labels</a>
                    </li>
                    <li>
                      <a href="typo-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="typo-pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="typo-progressbar.html">Progressbar</a>
                    </li>
                    <li>
                      <a href="preloading.html">Preloading</a>
                    </li>
                    <li>
                      <a href="menu1.html">Food Menu - 1</a>
                    </li>
                  </ul>
                </div>
                <div className="mm-1">
                  <h4>Pages</h4>
                  <ul>
                    <li>
                      <a href="typo-slider.html">Image Sliders</a>
                    </li>
                    <li>
                      <a href="typo-table.html">Table</a>
                    </li>
                    <li>
                      <a href="typo-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="typo-pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="typo-progressbar.html">Progressbar</a>
                    </li>
                    <li>
                      <a href="sitemap.html">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="logo">
              <a href="main.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div className="menu-bar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms">Rooms</NavLink>
                </li>
                <li>
                  <NavLink to="/facilites">Facilites</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin />
      <ModalRegister />
      <ModalForgotPassword />
      <ModalResetPassword />
    </>
  );
}

export default Header;
