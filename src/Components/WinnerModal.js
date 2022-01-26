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
    width: "65%",
    height: "305px",
    zIndex: "1",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const WinnerModal = ({ winner }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Firework winner={winner} />
      </Modal>
    </div>
  );
};

export default WinnerModal;
