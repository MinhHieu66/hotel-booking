import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function CreateRoomStatus(props) {
  const { setIsCreating } = props;
  const [data, setData] = useState({ status_name: "" });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) formData.append("status_name", file);
    try {
      const res = await fetch("http://localhost:8000/api/roomstatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo mới trạng thái phòng thành công!",
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
            : "Tạo mới trạng thái phòng thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Tạo mới trạng thái phòng thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể tạo mới trạng thái phòng. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Thêm mới trạng thái
              phòng
            </h3>
            <p>Nhập thông tin trạng thái phòng để thêm mới vào hệ thống.</p>
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
                    name="status_name"
                    type="text"
                    className="validate"
                    onChange={handleChange}
                    value={data.status_name}
                    required
                  />
                  <label>Trạng thái phòng</label>
                </div>

                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    style={{ maxWidth: 100, marginTop: 8 }}
                  />
                )}
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Tạo mới trạng thái"
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

export default CreateRoomStatus;
