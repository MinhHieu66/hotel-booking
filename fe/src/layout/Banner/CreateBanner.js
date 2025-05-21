import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function CreateBanner(props) {
  const { setIsCreating } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setIamge] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleChangeImage = (e) => {
    setIamge(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagePreview(event.target.result); // base64 url
      };

      reader.readAsDataURL(file);
    }
  };

  const createCarousel = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/carousels",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tạo mới thất bại!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Lỗi hệ thống",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCarousel();
  };
  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Thêm mới carousel
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="book-form inn-com-form db-form">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="col s12 ng-pristine ng-valid"
            >
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="title"
                    type="text"
                    className="validate"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Tiêu đề</label>
                </div>
                <div className="input-field col s6">
                  <input
                    name="content"
                    type="text"
                    className="validate"
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <label>Nội dung</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    name="iamge"
                    type="file"
                    className="validate"
                    id="imageInput"
                    onChange={handleChangeImage}
                  />
                  {/* <label>Ảnh</label> */}
                </div>
                <div className="input-field col s6">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        maxWidth: "330px",
                        maxHeight: "330px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="input-field col s8"></div>
                <div className="input-field col s4">
                  <input
                    type="submit"
                    value="Tạo mới carousel"
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

export default CreateBanner;
