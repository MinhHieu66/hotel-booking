import { useState, useEffect } from "react";
import { register } from "../../services/guestsService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Modal from "react-modal";

function ModalRegister(props) {
  const { isOpen, onClose } = props;

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(true); // Ẩn modal
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    const modal = document.querySelector("#modal2");
    modal.classList.remove("in");
    modal.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(true);
    try {
      const result = await register(data);

      if (result && result.access_token) {
        closeModal();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo tài khoản thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      } else {
        // const message =
        //   typeof result === "object"
        //     ? Object.values(result).flat().join("\n")
        //     : "Đăng ký thất bại. Vui lòng thử lại.";

        const message =
          result && typeof result === "object"
            ? [
                ...new Set(
                  Object.values(result)
                    .flat()
                    .filter((val) => typeof val === "string")
                ),
              ].join("\n")
            : "Đăng ký thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Đăng ký thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể đăng ký. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      {/* <!-- REGISTER SECTION --> */}
      <div
        id="modal2"
        className={`modal fade in`}
        role="dialog"
        //style={{ display: showModal ? "none" : "block" }}
      >
        <div className="log-in-pop">
          <div className="log-in-pop-left">
            <h1>Hello...</h1>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <h4>Login with social media</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google"></i> Google+
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="log-in-pop-right">
            <a href="#" className="pop-close" data-dismiss="modal">
              <img src="images/cancel.png" alt="" />
            </a>
            <h4>Create an Account</h4>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <form className="s12" onSubmit={handleSubmit} method="POST">
              <div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name1"
                    className="validate"
                    name="fullname"
                    onChange={handleChange}
                  />
                  <label>Họ và tên</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input
                    name="email_address"
                    type="email"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Mật khẩu</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input
                    name="password_confirmation"
                    type="password"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Xác nhận mật khẩu</label>
                </div>
              </div>
              <div>
                <div className="input-field s4">
                  <input
                    // onClick={openModal}
                    type="submit"
                    value="Register"
                    className="waves-effect waves-light log-in-btn"
                  />
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <a
                    href="#"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#modal1"
                  >
                    Are you a already member ? Login
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalRegister;
