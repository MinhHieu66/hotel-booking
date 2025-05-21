import { useState } from "react";
import { resetPassword } from "../../services/guestsService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function ModalResetPassword() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const closeModal = () => {
    const modal4 = document.querySelector("#modal4");
    modal4.classList.remove("in");
    modal4.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword("password/reset", data);
    if (result.message == "password has been successfully reset") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đặt lại mật khẩu thành công!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        closeModal();
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đặt lại mật khẩu thất bại. Vui lòng thử lại.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      {/* <!-- FORGOT SECTION --> */}
      <div id="modal4" className="modal fade" role="dialog">
        <div className="log-in-pop">
          <div className="log-in-pop-left">
            <h1>Hello... </h1>
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
            <a
              href="#"
              className="pop-close"
              data-dismiss="modal"
              onClick={closeModal}
            >
              <img src="images/cancel.png" alt="" />
            </a>
            <h4>Đặt lại mặt khẩu</h4>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <form className="s12" onSubmit={handleSubmit}>
              <div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name3"
                    className="validate"
                    name="password"
                    onChange={handleChange}
                  />
                  <label>Mật khẩu mới</label>
                </div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name3"
                    className="validate"
                    name="password_confirmation"
                    onChange={handleChange}
                  />
                  <label>Xác nhận mật khẩu</label>
                </div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name3"
                    className="validate"
                    name="code"
                    onChange={handleChange}
                  />
                  <label>Nhập mã xác thực</label>
                </div>
              </div>
              <div>
                <div className="input-field s4">
                  <input
                    type="submit"
                    value="Submit"
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
                  |
                  <a
                    href="#"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#modal2"
                  >
                    Create a new account
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

export default ModalResetPassword;
