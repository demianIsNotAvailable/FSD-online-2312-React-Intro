
export const CustomInput = ({typeProp, nameProp, placeholderProp, handlerProp}) => { // props, properties, propiedades, se reciben como un objeto
    

    return (
        <input 
        type={typeProp} 
        name={nameProp}
        placeholder={placeholderProp}
        onChange={(e) => handlerProp(e)}
        >
        </input>
    )
}


// <CustomInput type="email" name="emailInput" placeholder="introduce tu email..." />