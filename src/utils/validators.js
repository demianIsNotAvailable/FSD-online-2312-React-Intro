
export const inputValidator = (inputValue, inputName) => {
    if (inputValue === "") {
        return false
    }
    if ((inputName === "name" || inputName === "lastname") && typeof(inputValue) === "string") {
        return true
    }
    if (inputName === "password" && typeof(inputValue) === "string" && inputValue.length >= 6 && inputValue.length <= 12) {
        return true
    }
    if (inputName === "email" && inputValue.includes("@") && inputValue.includes(".")) {
        return true
    }

    return false
}