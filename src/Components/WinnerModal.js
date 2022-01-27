import Modal from "react-modal";
import { useState } from "react";
import React from "react";
import Firework from "./Firework";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: '65%',
    height: "305px",
    zIndex: "1",
  },
};
Modal.setAppElement("#root");

const WinnerModal = ({ winner }) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Firework winner={winner} />
      </Modal>
    </div>
  );
};

export default WinnerModal;
