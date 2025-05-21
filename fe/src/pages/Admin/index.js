import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import Footer from "../../layout/Footer";
// import Notification from "../../layout/Notifications";

function AdminPage() {
  return (
    <>
      <Header />
      <div className="dashboard" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
      {/* <Notification /> */}
      <Footer />
    </>
  );
}

export default AdminPage;
