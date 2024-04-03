import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CustomInput } from "../CustomInput/CustomInput";

function BootstrapModal(name, email, inputHandler, handleShow) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modificar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomInput
            typeProp="text"
            nameProp="name"
            placeholderProp="name"
            value={profileData.name}
            isDisabled={!isEditing}
            handlerProp={inputHandler}
          />
          <CustomInput
            typeProp="email"
            nameProp="email"
            placeholderProp="email"
            value={profileData.email}
            isDisabled={!isEditing}
            handlerProp={inputHandler}
          />
          <CustomInput
            typeProp="text"
            nameProp="role"
            placeholderProp="role"
            value={profileData.role}
            isDisabled="disabled"
            handlerProp={inputHandler}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapModal;
