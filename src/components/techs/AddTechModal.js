import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const modalStyle = {
    width: "75%",
    height: "75%",
    padding: "2%",
  };

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Please enter the first and last name of the technician",
      });
    } else {
      addTech({ firstName, lastName }); // same as doing addTech({firstName: firstName, lastName: lastName})
    }

    M.toast({ html: `${firstName} ${lastName} was added as a technician` });

    // Clearing fields
    setFirstName("");
    setLastName("");
  };

  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="model-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
