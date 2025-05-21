import { useState } from "react";
import { storeGuest } from "../../services/guestsService";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function CreateGuest(props) {
  const { setIsCreating } = props;
  const [data, setData] = useState([]);

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
    try {
      const result = await storeGuest("guests", data);
      if (result && result.access_token) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo mới thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setIsCreating(false);
        });
      } else {
        const message =
          result && typeof result === "object"
            ? [
                ...new Set(
                  Object.values(result)
                    .flat()
                    .filter((val) => typeof val === "string")
                ),
              ].join("\n")
            : "Tạo mới khách hàng thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Tạo mới khách hàng thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể tạo mới khách hàng. Vui lòng thử lại sau.",
        text: error,
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Thêm mới khách hàng
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="book-form inn-com-form db-form">
            <form
              method="POST"
              className="col s12 ng-pristine ng-valid"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="fullname"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Họ và tên</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name="email_address"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="password"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Mật khẩu</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name="password_confirmation"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                  />
                  <label>Xác nhận mật khẩu</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Tạo mới khách hàng"
                    className="form-btn"
                  />{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateGuest;
