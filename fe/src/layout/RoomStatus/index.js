import ListRoomStatus from "./ListRoomStatus";
import CreateRoomStatus from "./CreateRoomStatus";
import UpdateRoomStatus from "./UpdateRoomStatus";
import { useState } from "react";

function RoomStatus() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingRoomStatus, setEditingRoomStatus] = useState(null);

  return (
    <>
      <div className="db-cent">
        <div className="db-cent-1">
          <p>Hi Jana Novakova,</p>
          <h4>Welcome to your dashboard</h4>
        </div>
        {isCreating ? (
          <CreateRoomStatus setIsCreating={setIsCreating} />
        ) : editingRoomStatus ? (
          <UpdateRoomStatus
            roomStatus={editingRoomStatus}
            setEditingRoomStatus={setEditingRoomStatus}
          />
        ) : (
          <ListRoomStatus
            onAddNew={() => setIsCreating(true)}
            onEditRoomStatus={(roomStatus) => setEditingRoomStatus(roomStatus)}
          />
        )}
      </div>
    </>
  );
}

export default RoomStatus;