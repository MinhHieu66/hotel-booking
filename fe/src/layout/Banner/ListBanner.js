import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllCarousels } from "../../services/carouselService";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function ListBanner(props) {
  const [data, setData] = useState([]);
  const { onAddNew, onEditCarousel } = props;

  // Lấy tất cả các Carousel
  const fetchData = async () => {
    try {
      const result = await getAllCarousels(`carousels`);
      setData(result.carousel);
    } catch (error) {
      console.error("Lỗi khi fetch khách hàng:", error);
    }
  };

  //Xóa Carousel
  const handleDelete = async (item) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: `Carousel ${item.title} sẽ bị xóa vĩnh viễn.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/carousels/${item.id}`
          );

          if (response.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Xóa thành công!",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              fetchData();
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Xóa thất bại",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Lỗi hệ thống!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  console.log(data);

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
              Carousel
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
            THÊM MỚI CAROUSEL
          </button>

          <table
            style={{ marginTop: "20px" }}
            className="bordered responsive-table"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Tiêu đề</th>
                <th>Nội dung</th>
                <th>Hình ảnh</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>
                      <img
                        src={`http://127.0.0.1:8000/storage/${item.image}`}
                        alt=""
                        height={90}
                        width={130}
                      />
                    </td>
                    <td>
                      <Trash2 onClick={() => handleDelete(item)} />
                      <Edit onClick={() => onEditCarousel(item)} />
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

export default ListBanner;
