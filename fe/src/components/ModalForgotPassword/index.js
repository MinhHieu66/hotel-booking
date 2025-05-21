import { useState } from "react";
import { Mail } from "../../services/guestsService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function ModalForgotPassword() {
  const [data, setData] = useState([]);

  const closeModal = () => {
    const modal3 = document.querySelector("#modal3");
    modal3.classList.remove("in");
    modal3.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
    const modal4 = document.querySelector("#modal4");
    modal4.classList.add("in");
    modal4.style.display = "block";
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
    // Hiện loading
    Swal.fire({
      title: "Đang gửi email...",
      text: "Vui lòng chờ trong giây lát",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const result = await Mail("password/email", data);
    if (result.message == "We have emailed your password reset link.") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Vui lòng kiểm tra hộp thư email của bạn để đặt lại mật khẩu.",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        closeModal();
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Gửi email thất bại. Vui lòng kiểm tra lại.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      {/* <!-- FORGOT SECTION --> */}
      <div id="modal3" className="modal fade" role="dialog">
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
            <a href="#" className="pop-close" data-dismiss="modal">
              <img src="images/cancel.png" alt="" />
            </a>
            <h4>Forgot password</h4>
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
                    name="email_address"
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>
              </div>
              <div>
                {/* <li>
                  <a href="/" data-toggle="modal" data-target="#modal4">
                    <img src="images/icon/13.png" alt="" /> Đặt lại mật khẩu
                  </a>
                </li> */}
                <div className="input-field s4">
                  <input
                    // data-dismiss="modal"
                    // data-toggle="modal"
                    // data-target="#modal4"
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

export default ModalForgotPassword;
