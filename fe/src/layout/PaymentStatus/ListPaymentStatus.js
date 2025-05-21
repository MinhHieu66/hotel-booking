import { Edit, Trash2, Plus } from "lucide-react";
import {
  getPaymentStatuses,
  deletePaymentStatus,
} from "../../services/payment_statusService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function ListPaymentStatus(props) {
  // const { onAddNew, onEditGuest } = props;
  const { onAddNew, } = props;
  const [data, setData] = useState([]);

  // Xóa khách hàng
  const handleDeletePaymentStatus = (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: `Trạng thái ${item.payment_status_name} sẽ bị xóa vĩnh viễn.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deletePaymentStatus(`payment_status/${item.id}`);

        if (result && result.message === "Xóa trạng thái thanh toán thành công!") {
          Swal.fire({
            title: "Thành công!",
            text: "Trạng thái thanh toán đã được xóa.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          }).then(() => {
            fetchData();
          });
        } else {
          Swal.fire({
            title: "Thất bại!",
            text: "Xóa trạng thái thanh toán thất bại.",
            icon: "error",
          });
        }
      }
    });
  };

  
  // Hàm lấy dữ liệu từ Backend
  const fetchData = async () => {
    try {
      const result = await getPaymentStatuses(`payment_status`);
      setData(result.data);
    } catch (error) {
      console.error("Lỗi khi fetch trạng thái thanh toán:", error);
    }
  };

  // Lấy dữ liệu render giao diện
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              {/* <img src="images/icon/dbc5.png" alt="" /> */}
              Trạng thái thanh toán
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
            THÊM MỚI TRẠNG THÁI THANH TOÁN
          </button>

          <table
            style={{ marginTop: "20px" }}
            className="bordered responsive-table"
          >
            <thead>
              <tr>
                <th>No</th>
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
                    <td>{index + 1}</td>
                    <td>{item.payment_status_name}</td>
                    {/* <td>
                      <img src={`http://127.0.0.1:8000/storage/${item.img}`} alt={item.title} width={50} height={50} />
                      
                    </td> */}
                    {/* <a class="waves-effect waves-light btn">button</a>
                    <td className="waves-effect waves-light btn">Hoạt động</td> */}
                    <td>
                      <Trash2 onClick={() => handleDeletePaymentStatus(item)} />
                      {/* <Edit onClick={() => onEditPahandleDeletePaymentStatus(item)} /> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ListPaymentStatus;
