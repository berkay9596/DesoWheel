import Modal from "react-modal";
import { useState, useEffect } from "react";
import React from "react";
import Firework from "./Firework";
import DesoApi from "../libs/desoApi";
import DesoIdentity from "../libs/desoIdentity";

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

const WinnerModal = ({ winner }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [desoIdentity, setDesoIdentity] = useState(null);
  const [desoApi, setDesoApi] = useState(null);
  const [publicKey, setSetPublicKey] = useState(null);
  const IdentityUsersKey = "identityUsersV2";
  const [loggedIn, setLoggedIn] = useState(false);
  const hash = localStorage.getItem("hash");

  console.log("publickey", publicKey);
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const di = new DesoIdentity();
    setDesoIdentity(di);
    const da = new DesoApi();
    setDesoApi(da);

    let user = {};
    if (localStorage.getItem(IdentityUsersKey) === "undefined") {
      user = {};
    } else if (localStorage.getItem(IdentityUsersKey)) {
      user = JSON.parse(localStorage.getItem(IdentityUsersKey) || "{}");
    }

    if (user.publicKey) {
      setLoggedIn(true);
      setSetPublicKey(user.publicKey);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const submitPost = async () => {
    const body = `Congratz ${winner} we have a winner`;
    const extraData = {
      app: "Congratz we have a winner",
      type: "Congratz we have a winner",
    };
    const RepostedPostHashHex = hash;
    const rtnSubmitPost = await desoApi.submitPost(
      publicKey,
      body,
      extraData,
      RepostedPostHashHex
    );
    const transactionHex = rtnSubmitPost.TransactionHex;
    const signedTransactionHex = await desoIdentity.signTxAsync(transactionHex);
    const rtnSubmitTransaction = await desoApi.submitTransaction(
      signedTransactionHex
    );

    if (rtnSubmitTransaction) {
      alert("done");
    }
  };
  return (
    <div>
      <iframe
        title="desoidentity"
        id="identity"
        frameBorder="0"
        src="https://identity.deso.org/embed?v=2"
        style={{
          height: "100vh",
          width: "100vw",
          display: "none",
          position: "fixed",
          zIndex: 1000,
          left: 0,
          top: 0,
        }}
      ></iframe>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Firework winner={winner} />
        {publicKey ? (
          <button className="btn btn-warning" onClick={submitPost}>
            Share the winner
          </button>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
};

export default WinnerModal;
