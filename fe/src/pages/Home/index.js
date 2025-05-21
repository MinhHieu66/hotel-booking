import Availability from "../../layout/Availability";
import OurHotelRooms from "../../layout/OurHotelRooms";
import Discount from "../../layout/Discount";
import BanquetSpaces from "../../layout/BanquetSpaces";
import NewsEvents from "../../layout/NewsEvents";
function Home() {
  return (
    <>
      <Availability />
      <OurHotelRooms />
      <Discount />
      <BanquetSpaces />
      <NewsEvents />
    </>
  );
}

export default Home;
