const estado = {
    email: "email@email.com",
    password: "contraseña SUPER secreta",
    role: "el admin más admin de todos"
}

const copia = {
    ...estado,
    tamaño: 7,
    password: "la de antes no era segura"
}


console.log(copia)