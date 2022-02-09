import Modal from "react-modal";
import { useState } from "react";
import React from "react";

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
    zIndex: "10000",
  },
  overlay: {
    zIndex: "10000",
  },
};
Modal.setAppElement("#root");

const FilterPostModal = ({
  like,
  setLike,
  repost,
  setRepost,
  diamond,
  setDiamond,
  formSubmit,
}) => {
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
        <form onSubmit={formSubmit}>
          <label>Like</label>{" "}
          <input type="checkbox" value={like} onChange={() => setLike(!like)} />
          <br />
          <label>Repost</label>{" "}
          <input
            type="checkbox"
            value={repost}
            onChange={() => setRepost(!repost)}
          />
          <br />
          <label>Diamond</label>{" "}
          <input
            type="checkbox"
            value={diamond}
            onChange={() => setDiamond(!diamond)}
          />{" "}
          <br />
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default FilterPostModal;
