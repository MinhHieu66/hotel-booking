import ListBanner from "./ListBanner";
import CreateBanner from "./CreateBanner";
import UpdateBanner from "./UpdateBanner";
import { useState } from "react";

function Banner() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingCarousel, setEditingCarousel] = useState(null);

  return (
    <>
      {" "}
      <div className="db-cent">
        <div className="db-cent-1">
          <p>Hi Jana Novakova,</p>
          <h4>Welcome to your dashboard</h4>
        </div>
        {/* <ListBanner />
        <CreateBanner />
        <UpdateBanner /> */}

        {isCreating ? (
          <CreateBanner setIsCreating={setIsCreating} />
        ) : editingCarousel ? (
          <UpdateBanner
            carousel={editingCarousel}
            setEditingCarousel={setEditingCarousel}
          />
        ) : (
          <ListBanner
            onAddNew={() => setIsCreating(true)}
            onEditCarousel={(carousel) => setEditingCarousel(carousel)}
          />
        )}
      </div>
    </>
  );
}

export default Banner;
