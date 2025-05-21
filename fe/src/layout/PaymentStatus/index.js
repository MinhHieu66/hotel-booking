import ListPaymentStatus from "./ListPaymentStatus";
import CreatePaymentStatus from "./CreatePaymentStatus";
// import UpdateGuest from "./UpdateGuest";
import { useState } from "react";

function PaymentStatuses() {
  const [isCreating, setIsCreating] = useState(false);
  // const [editingGuest, setEditingGuest] = useState(null);

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
        {isCreating ? (
          <CreatePaymentStatus setIsCreating={setIsCreating} />
        ) : (
          <ListPaymentStatus onAddNew={onAddNew} />
        )}
        {/* <UpdateGuest /> */}

        {/* {isCreating ? (
          <CreateGuest setIsCreating={setIsCreating} />
        ) : editingGuest ? (
          <UpdateGuest guest={editingGuest} setEditingGuest={setEditingGuest} />
        ) : (
          <ListGuest
            onAddNew={() => setIsCreating(true)}
            onEditGuest={(guest) => setEditingGuest(guest)}
          />
        )} */}

        {/* <ListPaymentStatus /> */}
      </div>
    </>
  );
}

export default PaymentStatuses;
