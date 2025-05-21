import ListBed from "./ListBed";
import CreateBed from "./CreateBed";
import UpdateBed from "./UpdateBed";
import { useState } from "react";

function Beds() {
  const [isCreating, setIsCreating] = useState(false);
  const [editingBed, setEditingBed] = useState(null);

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
          <CreateBed setIsCreating={setIsCreating} />
        ) : editingBed ? (
          <UpdateBed bed={editingBed} setEditingBed={setEditingBed} />
        ) : (
          <ListBed
            onAddNew={() => setIsCreating(true)}
            onEditBed={(bed) => setEditingBed(bed)}
          />
        )}
      </div>
    </>
  );
}

export default Beds;