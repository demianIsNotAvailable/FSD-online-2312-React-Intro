import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CustomInput } from "../CustomInput/CustomInput";
import { updateProfile } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

function BootstrapModal({ profileData, inputHandler, token }) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    // doble navigate para forzar a recargar el perfil en caso de no querer actualizar los datos,
    // para que llame de nuevo a la API y los recupere.
    navigate("/");
    setTimeout(() => {
      navigate("/profile");
    });

    console.log("close");
    setShow(false);
  };
  const handleUpdate = async () => {
    try {
      await updateProfile(profileData, token);
      console.log("usuario actualizado");
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Modificar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edita tus datos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomInput
            typeProp="text"
            nameProp="name"
            placeholderProp="name"
            value={profileData.name}
            isDisabled=""
            handlerProp={inputHandler}
          />
          <CustomInput
            typeProp="email"
            nameProp="email"
            placeholderProp="email"
            value={profileData.email}
            isDisabled=""
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
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapModal;
