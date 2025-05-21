import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { getBeds, createBed, updateBed, deleteBed } from '../../services/bedService';

function UpdateBed(props) {
  const { bed, setEditingBed } = props;
  const [data, setData] = useState(bed);

  useEffect(() => {
    setData(bed);
  }, [bed]);

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
      const res = await fetch(`http://localhost:8000/api/beds/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bed_type_name: data.bed_type_name }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setEditingBed(null);
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
            : "Cập nhật bed thất bại. Vui lòng thử lại.";

        Swal.fire({
          icon: "error",
          title: "Cập nhật bed thất bại",
          text: message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Không thể cập nhật bed. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Cập nhật loại giường
            </h3>
            <p>
              Nhập thông tin loại giường để cập nhật vào hệ thống.
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
                    name="bed_type_name"
                    type="text"
                    className="validate"
                    value={data.bed_type_name ?? ""}
                    onChange={handleChange}
                    required
                  />
                  <label className={data.bed_type_name ? "active" : ""}>Loại giường</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Cập nhật loại giường"
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

export default UpdateBed;


 