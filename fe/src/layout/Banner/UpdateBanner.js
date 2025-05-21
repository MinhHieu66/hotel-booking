import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function UpdateBanner(props) {
  const { setIsCreating, carousel, setEditingCarousel } = props;
  // const [imagePreview, setImagePreview] = useState(null);
  // const [data, setData] = useState(carousel);
  const [title, setTitle] = useState(carousel.title);
  const [content, setContent] = useState(carousel.content);
  const [image, setIamge] = useState("");
  const [imagePreview, setImagePreview] = useState(
    `http://127.0.0.1:8000/storage/${carousel.image}`
  );

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

  // useEffect(() => {
  //   setData(carousel);
  // }, [carousel]);

  const editCarousel = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);
      formData.append("_method", "PUT");

      const response = await axios.post(
        `http://127.0.0.1:8000/api/carousels/${carousel.id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setEditingCarousel(null);
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cập nhật thất bại!",
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
    await editCarousel();
  };

  return (
    <>
      <div className="db-cent-3">
        <div className="db-cent-table db-com-table">
          <div className="db-title">
            <h3>
              <img src="images/icon/dbc5.png" alt="" /> Cập nhật carousel
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
                    value={title ?? ""}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {/* <label>Tiêu đề</label> */}
                </div>
                <div className="input-field col s6">
                  <input
                    name="content"
                    type="text"
                    className="validate"
                    value={content ?? ""}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  {/* <label>Nội dung</label> */}
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
                    value="Cập nhật carousel"
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

export default UpdateBanner;
