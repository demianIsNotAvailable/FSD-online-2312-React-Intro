import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { amIAdmin } from "../../app/slices/userSlice"


export const AdminRoute = ({Component}) => {

    //Ruta privada que recibe un componente por props (una vista). Si eres admin, te devuelve el componente recibido, y si no te envía a home
    //de esta manera podemos definir rutas de acceso restringido que directamente no intenten cargar el componente si no tienes acceso.
    const isAdmin = useSelector(amIAdmin)

    return isAdmin ? <Component /> : <Navigate to="/" /> 
}