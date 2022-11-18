import Modal from "react-modal";
import { useState, useEffect } from "react";
import React from "react";
import Firework from "./Firework";
import DesoApi from "../libs/desoApi";
import DesoIdentity from "../libs/desoIdentity";
import { toast } from "react-toastify";
import Deso from "deso-protocol";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    minHeight: "30vh",
    zIndex: "100",
  },
  overlay: {
    zIndex: "1000",
  },
};
Modal.setAppElement("#root");

const WinnerModal = ({ winner, file }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [desoIdentity, setDesoIdentity] = useState(null);
  const [desoApi, setDesoApi] = useState(null);
  const [publicKey, setSetPublicKey] = useState(null);
  const IdentityUsersKey = "identityUsersV2";
  const [jwt, setJwt] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const hash = localStorage.getItem("hash");

  function closeModal() {
    setIsOpen(false);
  }
console.log("imageurllll",imageUrl)
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
      setSetPublicKey(user.publicKey);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const getJwt = async () => {
    const deso = new Deso();
    const request = undefined;
    const response = await deso.identity.getJwt(request);
    setJwt(response);
    console.log("jwt",jwt)
  };

  const submitPost = async () => {
    // await getJwt();
    // const imgPayload = await desoApi.uploadImage(
    //   file[file.length - 1],
    //   publicKey,
    //   jwt
    // );
    // setImageUrl(imgPayload?.ImageURL);
    // console.log("imgPayload", imgPayload);
    // console.log("imageUrl", imageUrl);
    // if(imgPayload){
    //   setImageUrl(imgPayload.ImageURL)
    //   console.log("imageUrl",imageUrl)

    // }
    // if (imageUrl !== null) {
      const body = `Congratz @${winner} you are the winner.
    
      This raffle is powered by @Desowheel`;
      const extraData = {
        app: "Congratz we have a winner",
        type: "Congratz we have a winner",
      };
      const RepostedPostHashHex = hash;
      const rtnSubmitPost = await desoApi.submitPost(
        publicKey,
        body,
        extraData,
        RepostedPostHashHex,
        // imageUrl
      );
      const transactionHex = await rtnSubmitPost.TransactionHex;
      const signedTransactionHex = await desoIdentity.signTxAsync(
        transactionHex
      );
      const rtnSubmitTransaction = await desoApi.submitTransaction(
        signedTransactionHex
      );

      if (rtnSubmitTransaction) {
        setIsOpen(false);
        toast.success("Your post has been sent successfully.");
      }
    // }
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
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ flexDirection: "column" }}
        >
          <Firework winner={winner} />
          {publicKey ? (
            <button
              className="btn btn-success"
              style={{ width: "50%", height: "3rem", fontSize: "1.2rem" , zIndex:9999 , marginBottom:"1rem"}}
              onClick={submitPost}
            >
              Share the winner
            </button>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </div>
  );
};

export default WinnerModal;
