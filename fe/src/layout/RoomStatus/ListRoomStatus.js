import { Edit, Trash2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function ListRoomStatus(props) {
  const limit = 5;
  const { onAddNew, onEditRoomStatus } = props;
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const [pageActive, setPageactive] = useState(1);

  // Xử lý chuyển trang
  const handleClickPage = (e) => {
    if (e === 0 && pageActive > 1) {
      setPageactive(pageActive - 1);
    } else if (e === -1 && pageActive < quantityPage) {
      setPageactive(pageActive + 1);
    } else if (typeof e === "number") {
      setPageactive(e);
    }
  };

  // Xóa room_status
  const handleDeleteRoomStatus = (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: `Trạng thái phòng "${item.status_name}" sẽ bị xóa.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:8000/api/roomstatus/${item.id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          Swal.fire({
            title: "Thành công!",
            text: "Trạng thái phòng đã được xóa.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            fetchData();
          });
        } else {
          Swal.fire({
            title: "Thất bại!",
            text: "Xóa trạng thái phòng thất bại.",
            icon: "error",
          });
        }
      }
    });
  };

  // Hàm lấy dữ liệu từ Backend
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/roomstatus?page=${pageActive}`);
      const result = await res.json();
      setData(result.data.data);
      setQuantityPage(Math.ceil(result.data.total / limit));
    } catch (error) {
      console.error("Lỗi khi fetch trạng thái phòng:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [pageActive]);

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>Trạng thái phòng</h3>
            <p>Danh sách các trạng thái phòng trong hệ thống khách sạn.</p>
          </div>
          <button
            style={{
              backgroundColor: "#ec5f67",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              marginLeft: "520px",
            }}
            onClick={onAddNew}
          >
            THÊM MỚI TRẠNG THÁI
          </button>

          <table style={{ marginTop: "20px" }} className="bordered responsive-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tên trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? data.map((item, index) => (
                <tr key={item.id}>
                  <td>{(pageActive - 1) * limit + (index + 1)}</td>
                  <td>{item.status_name}</td>
                  <td>
                    <Trash2 onClick={() => handleDeleteRoomStatus(item)} style={{ cursor: "pointer", marginRight: 8 }} />
                    <Edit onClick={() => onEditRoomStatus(item)} style={{ cursor: "pointer" }} />
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3}>Không có dữ liệu</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="db-pagi">
          <ul className="pagination">
            <li
              className={`waves-effect${pageActive === 1 ? " disabled" : ""}`}
              onClick={pageActive === 1 ? undefined : () => handleClickPage(0)}
            >
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {[...Array(quantityPage)].map((_, index) => (
              <li
                key={index}
                className={`${pageActive === index + 1 ? "active" : "waves-effect"}`}
                onClick={() => handleClickPage(index + 1)}
              >
                <a href="#!">{index + 1}</a>
              </li>
            ))}
            <li
              className={`waves-effect${pageActive === quantityPage ? " disabled" : ""}`}
              onClick={pageActive === quantityPage ? undefined : () => handleClickPage(-1)}
            >
              <a href="#!">
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListRoomStatus;