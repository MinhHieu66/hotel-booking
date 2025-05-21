import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Carousel from "../Carousel";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function LayoutDefault() {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const login = params.get("login");

    if (token) {
      let message = "";
      if (login == "google") {
        message = "Chào mừng bạn đã đăng nhập bằng Google.";
      } else {
        message = "Chào mừng bạn đã đăng nhập bằng Facebook.";
      }
      // Lưu token vào localStorage nếu cần
      localStorage.setItem("token", token);

      // Hiển thị thông báo thành công
      Swal.fire({
        title: "Đăng nhập thành công!",
        text: message,
        icon: "success",
        confirmButtonText: "Tiếp tục",
      }).then(() => {
        // Chuyển hướng về trang chủ sau khi người dùng đóng thông báo
        window.location.href = "/";
      });
    }
  }, []);

  // useEffect(() => {
  //   // Danh sách các script cần load
  //   const scripts = [
  //     "/js/jquery.min.js",
  //     "/js/jquery-ui.js",
  //     "/js/angular.min.js",
  //     "/js/bootstrap.js",
  //     "/js/materialize.min.js",
  //     "/js/jquery.mixitup.min.js",
  //     "/js/custom.js",
  //   ];

  //   // Tạo các thẻ script và thêm vào body
  //   scripts.forEach((src) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.async = false; // Để đảm bảo thứ tự chạy đúng, có thể set false
  //     document.body.appendChild(script);
  //   });

  //   // Cleanup khi component unmount
  //   return () => {
  //     scripts.forEach((src) => {
  //       const allScripts = document.querySelectorAll(`script[src="${src}"]`);
  //       allScripts.forEach((script) => script.remove());
  //     });
  //   };
  // }, []);

  return (
    <>
      {/* Link CSS */}
      {/* <link rel="shortcut icon" href="/images/fav.ico" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins|Quicksand:500,700"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/materialize.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/bootstrap.css" />
      <link rel="stylesheet" href="/css/responsive.css" /> */}
      <Header />
      {location.pathname !== "/" && <Carousel />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default LayoutDefault;
