import React from "react";
import Modal from "react-modal";

//style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function BigModal(props) {
  return (
    <>
      <Modal
        isOpen={props.isClick}
        onRequestClose={props.flip}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          className="form-control mb-4"
          type="text"
          placeholder="Hey this is my details "
        />
        <h3>{props.data.name}</h3>
        <p>{props.data.email}</p>
        <p>{props.data.phone}</p>
        <button className="btn btn-success mb-4" onClick={props.flip}>
          close
        </button>
      </Modal>
    </>
  );
}
export default BigModal;
