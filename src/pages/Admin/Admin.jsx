import { useSelector } from "react-redux";
import { getUserData } from "../../app/slices/userSlice";
import { useEffect, useState } from "react";
import { bringAllUsersCall, deleteUserById } from "../../services/apiCalls";
import "./Admin.css";

export const Admin = () => {
  // useState para todos los usuarios, y el que queremos borrar
  const [users, setUsers] = useState([]);
  const [areYouDeletingMe, setAreYouDeletingMe] = useState(null);

  const userReduxData = useSelector(getUserData);
  const token = userReduxData.token;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await bringAllUsersCall(token);
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await deleteUserById(id, token);
    console.log(res);
  };

  // Función que inicia el borrado del usuario y muestra u oculta el botón de confirmación
  const deleteUserStepOne = (id) => {
    if (areYouDeletingMe === id) {
      setAreYouDeletingMe(null);
    } else {
      setAreYouDeletingMe(id);
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user._id} className="flex-row">
                {user.name} {user.email} {user.role}
                <div
                  className="delete-button"
                  onClick={() => deleteUserStepOne(user._id)}
                ></div>
                <div
                  className={
                    // botón de confirmación de borrado que comprueba si el useState que lleva el registro de qué usuario
                    // se está borrando es el suyo, en cuyo caso se muestra.
                    areYouDeletingMe === user._id
                      ? "delete-button confirm-delete "
                      : "delete-button confirm-delete display-none"
                  }
                  onClick={() => deleteUser(user._id)}
                ></div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};
