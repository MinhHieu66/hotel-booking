import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import OurFacilities from "./pages/OurFacilities";
import OurRooms from "./pages/OurRooms";
import LayoutDefault from "./layout/LayoutDefault";
import AdminPage from "./pages/Admin";
import ListBedType from "./layout/Beds";
import Guests from "./layout/Guests";
import ListFloor from "./layout/Floors";
import ListBanner from "./layout/Banner";
import RoomStatus from "./layout/RoomStatus";
import RoomClass from "./layout/RoomClass";
import ListPaymentStatus from "./layout/PaymentStatus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="facilites" element={<OurFacilities />} />
          <Route path="rooms" element={<OurRooms />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Guests />} />
          <Route path="beds" element={<ListBedType />} />
          <Route path="guests" element={<Guests />} />
          <Route path="floors" element={<ListFloor />} />
          <Route path="roomstatus" element={<RoomStatus />} />
          <Route path="roomclass" element={<RoomClass />} />
          <Route path="banner" element={<ListBanner />} />
          <Route path="payments" element={<ListPaymentStatus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
