import { useState } from "react"
import { CustomInput } from "../../components/CustomInput/CustomInput"
import { bringProfile } from "../../services/apiCalls"

export const Profile = () => {
    const [updateData, setUpdateData] = useState({
        name: "",
        email: "",
        lastname: ""
    })

    const myPassport = JSON.parse(sessionStorage.getItem("passport"))
    const token = myPassport.token
    console.log(token, "estoy viendo un token, verdad?")
  
    // handlers
    const bringProfileHandler = async () => {
      try {
        const profileData = await bringProfile(token)
        setUpdateData(profileData)
      }
      catch (error) {
        console.log(error)
      }
    }

    const inputHandler = (e) => {
        setUpdateData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const updateProfile = () => {
        try {
            updateProfileData(updateData, token)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <CustomInput
            typeProp="name"
            nameProp="name"
            placeholderProp="name"
            handlerProp={inputHandler} />
            <CustomInput
            typeProp="email"
            nameProp="email"
            placeholderProp="email"
            handlerProp={inputHandler} />
            <CustomInput
            typeProp="lastname"
            nameProp="lastname"
            placeholderProp="lastname"
            handlerProp={inputHandler} />
            <p onClick={() => bringProfileHandler()}>Hola amigo, aquí un perfil</p>
        </>
    )
}