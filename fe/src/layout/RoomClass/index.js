import ListRoomClass from "./ListRoomClass";
import CreateRoomClass from "./CreateRoomClass";
import UpdateRoomClass from "./UpdateRoomClass";
import { useState } from "react";

function RoomClass() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingRoomClass, setEditingRoomClass] = useState(null);

  return (
    <>
      <div className="db-cent">
        <div className="db-cent-1">
          <p>Hi Jana Novakova,</p>
          <h4>Welcome to your dashboard</h4>
        </div>
        {isCreating ? (
          <CreateRoomClass setIsCreating={setIsCreating} />
        ) : editingRoomClass ? (
          <UpdateRoomClass
            roomClass={editingRoomClass}
            setEditingRoomClass={setEditingRoomClass}
          />
        ) : (
          <ListRoomClass
            onAddNew={() => setIsCreating(true)}
            onEditRoomClass={(roomClass) => setEditingRoomClass(roomClass)}
          />
        )}
      </div>
    </>
  );
}

export default RoomClass;