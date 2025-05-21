import { Edit, Trash2, Plus } from "lucide-react";
import { getGuestPagination, deleteGuest } from "../../services/guestsService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function ListGuest(props) {
  const limit = 10;
  const { onAddNew, onEditGuest } = props;
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const [pageActive, setPageactive] = useState(1);

  // Xử lý chuyển trang
  const handleClickPage = (e) => {
    if (e == 0) {
      setPageactive(pageActive - 1);
    } else if (e == -1) {
      setPageactive(pageActive + 1);
    } else setPageactive(e);
  };

  // Xóa khách hàng
  const handleDeleteGuest = (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: `Khách hàng ${item.fullname} sẽ bị xóa vĩnh viễn.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteGuest(`guests/${item.id}`);

        if (result && result.message === "Xóa khách hàng thành công!") {
          Swal.fire({
            title: "Thành công!",
            text: "Khách hàng đã được xóa.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            fetchData();
          });
        } else {
          Swal.fire({
            title: "Thất bại!",
            text: "Xóa khách hàng thất bại.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleUpdateGuest = () => {
    console.log("Upadte");
  };

  // Hàm lấy dữ liệu từ Backend
  const fetchData = async () => {
    try {
      const result = await getGuestPagination(`guests?page=${pageActive}`);
      setData(result.data.data);
      setQuantityPage(Math.ceil(result.data.total / limit));
    } catch (error) {
      console.error("Lỗi khi fetch khách hàng:", error);
    }
  };

  // Lấy dữ liệu render giao diện
  useEffect(() => {
    fetchData();
  }, [pageActive]);
  console.log(quantityPage);
  // http://127.0.0.1:8000/api/guests?page=2

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              {/* <img src="images/icon/dbc5.png" alt="" /> */}
              Khách hàng
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
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
            THÊM MỚI KHÁCH HÀNG
          </button>

          <table
            style={{ marginTop: "20px" }}
            className="bordered responsive-table"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>

                {/* <th>City</th>
                  <th>Arrival</th>
                  <th>Departure</th>
                  <th>Members</th>
                  <th>Payment</th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{(pageActive - 1) * limit + (index + 1)}</td>
                    <td>{item.fullname}</td>
                    <td>{item.email_address}</td>
                    {/* <a class="waves-effect waves-light btn">button</a> */}
                    <td className="waves-effect waves-light btn">Hoạt động</td>
                    <td>
                      <Trash2 onClick={() => handleDeleteGuest(item)} />
                      <Edit onClick={() => onEditGuest(item)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="db-pagi">
          <ul className="pagination">
            <li className="waves-effect" onClick={() => handleClickPage(0)}>
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {[...Array(quantityPage)].map((_, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    pageActive === index + 1 ? "active" : "waves-effect"
                  }`}
                  onClick={() => handleClickPage(index + 1)}
                >
                  <a href="#!">{index + 1}</a>
                </li>
              );
            })}

            {/* <li className="waves-effect" onClick={() => handleClickPage(2)}>
              <a href="#!">2</a>
            </li>
            <li className="waves-effect">
              <a href="#!">3</a>
            </li>
            <li className="waves-effect">
              <a href="#!">4</a>
            </li>
            <li className="waves-effect">
              <a href="#!">5</a>
            </li> */}
            <li className="waves-effect" onClick={() => handleClickPage(-1)}>
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

export default ListGuest;
