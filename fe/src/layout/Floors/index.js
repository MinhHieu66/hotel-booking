
import { useState } from "react";
import ListFloor from "./ListFloor";
import CreateFloor from "./CreateFloor";
import UpdateFloor from "./UpdateFloor";

function Floors() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingFloor, setEditingFloor] = useState(null);

  const onAddNew = () => {
    setIsCreating(true);
  };
  return (
    <>
      <div className="db-cent">
        <div className="db-cent-1">
          <p>Hi Jana Novakova,</p>
          <h4>Welcome to your dashboard</h4>
        </div>
        {isCreating ? (
          <CreateFloor setIsCreating={setIsCreating} />
        ) : editingFloor ? (
          <UpdateFloor floor={editingFloor} setEditingFloor={setEditingFloor} />
        ) : (
          <ListFloor
            onAddNew={() => setIsCreating(true)}
            onEditFloor={(floor) => setEditingFloor(floor)}
          />
        )}
      </div>
    </>
  );
}

export default Floors;