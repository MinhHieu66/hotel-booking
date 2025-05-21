import ListGuest from "./ListGuest";
import CreateGuest from "./CreateGuest";
import UpdateGuest from "./UpdateGuest";
import { useState } from "react";

function Guests() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);

  const onAddNew = () => {
    setIsCreating(true);
  };
  return (
    <>
      {" "}
      <div className="db-cent">
        <div className="db-cent-1">
          <p>Hi Jana Novakova,</p>
          <h4>Welcome to your dashboard</h4>
        </div>
        {/* {isCreating ? (
          <CreateGuest setIsCreating={setIsCreating} />
        ) : (
          <ListGuest onAddNew={onAddNew} />
        )} */}
        {/* <UpdateGuest /> */}

        {isCreating ? (
          <CreateGuest setIsCreating={setIsCreating} />
        ) : editingGuest ? (
          <UpdateGuest guest={editingGuest} setEditingGuest={setEditingGuest} />
        ) : (
          <ListGuest
            onAddNew={() => setIsCreating(true)}
            onEditGuest={(guest) => setEditingGuest(guest)}
          />
        )}
      </div>
    </>
  );
}

export default Guests;
