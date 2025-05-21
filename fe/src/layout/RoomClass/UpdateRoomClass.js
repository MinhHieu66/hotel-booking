import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function UpdateRoomClass(props) {
  const { roomClass, setEditingRoomClass } = props;
  const [data, setData] = useState(roomClass);

  useEffect(() => {
    setData(roomClass);
  }, [roomClass]);

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
      const res = await fetch(`http://localhost:8000/api/roomclass/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          class_name: data.class_name,
          base_price: data.base_price,
         }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật hạng phòng thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setEditingRoomClass(null);
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
            : "Cập nhật hạng phòng thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Cập nhật hạng phòng thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể cập nhật hạng phòng. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Cập nhật hạng phòng
            </h3>
            <p>
              Nhập thông tin hạng phòng để cập nhật vào hệ thống.
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
                    name="class_name"
                    type="text"
                    className="validate"
                    value={data.class_name ?? ""}
                    onChange={handleChange}
                    required
                  />
                  <label className={data.class_name ? "active" : ""}>Hạng phòng</label>
                </div>
              </div>

               <div className="row">
                <div className="input-field col s12">
                  <input
                    name="base_price"
                    type="number"
                    className="validate"
                    value={data.base_price ?? ""}
                    onChange={handleChange}
                    required
                  />
                  <label className={data.base_price ? "active" : ""}>Giá/phòng/đêm</label>
                </div>
              </div>


              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Cập nhật hạng phòng"
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

export default UpdateRoomClass;