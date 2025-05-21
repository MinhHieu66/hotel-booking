import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function CreateFloor(props) {
  const { setIsCreating } = props;
  const [data, setData] = useState({ floor_number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/floors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo mới tầng thành công!",
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
            : "Tạo mới tầng thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Tạo mới tầng thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể tạo mới tầng. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Thêm mới tầng
            </h3>
            <p>Nhập thông tin tầng để thêm mới vào hệ thống.</p>
          </div>
          <div className="book-form inn-com-form db-form">
            <form
              method="POST"
              className="col s12 ng-pristine ng-valid"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="floor_number"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                    value={data.floor_number}
                    required
                  />
                  <label>Số tầng</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Tạo mới tầng"
                    className="form-btn"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateFloor;
