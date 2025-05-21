import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="db-left">
        <div className="db-left-1">
          <h4>Jana Novakova</h4>
          <p>Newyork, United States</p>
        </div>
        <div className="db-left-2">
          <ul>
            <li>
              <Link to="/admin/guests">
                <img src="images/icon/db7.png" alt="" /> Khách hàng
              </Link>
            </li>

            <li>
              <Link to="/admin/banner">
                <img src="/images/icon/db4.png" alt="" /> Carousels
              </Link>
            </li>
            <li>
              <Link to="/admin/beds">
                <img src="/images/icon/bed.png" alt="" />
                Beds
              </Link>
            </li>

            <li>
              <Link to="/admin/floors">
                <img src="/images/icon/stairs.png" alt="" />
                Floors
              </Link>
            </li>

            <li>
              <Link to="/admin/roomstatus">
                <img src="/images/icon/hotel.png" alt="" />
                Room Status
              </Link>
            </li>

            <li>
              <Link to="/admin/roomclass">
                <img src="/images/icon/living-room.png" alt="" />
                Room Class
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
