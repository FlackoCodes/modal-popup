import { useState } from "react";
import Modal from "./Modal";

export default function ModalPopup() {
  const [showModal, setShowModal] = useState(false);

  function handleToggle() {
    setShowModal(!showModal);
  }

  function closeModal(){
    console.log('closed');
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={handleToggle}>Open Modal Popup</button>
      {showModal && <Modal onClose={closeModal} body={<div>Main Body</div>} />}
    </div>
  );
}
