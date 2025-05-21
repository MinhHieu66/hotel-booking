import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function UpdateRoomStatus(props) {
  const { roomStatus, setEditingRoomStatus } = props;
  const [data, setData] = useState(roomStatus);

  useEffect(() => {
    setData(roomStatus);
  }, [roomStatus]);

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
      const res = await fetch(`http://localhost:8000/api/roomstatus/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status_name: data.status_name }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật trạng thái phòng thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setEditingRoomStatus(null);
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
            : "Cập nhật trạng thái phòng thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Cập nhật trạng thái phòng thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể cập nhật trạng thái phòng. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Cập nhật trạng thái phòng
            </h3>
            <p>
              Nhập thông tin trạng thái phòng để cập nhật vào hệ thống.
            </p>
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
                    value={data.status_name ?? ""}
                    onChange={handleChange}
                    required
                  />
                  <label className={data.status_name ? "active" : ""}>Trạng thái phòng</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Cập nhật trạng thái"
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

export default UpdateRoomStatus;