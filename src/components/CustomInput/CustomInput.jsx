import "./CustomInput.css"

export const CustomInput = ({
  typeProp,
  nameProp,
  placeholderProp,
  handlerProp,
  onBlurHandler,
  value,
  isDisabled,
  errorText
}) => {
  // props, properties, propiedades, se reciben como un objeto


  return (
    <div className="custom-input-container">
      {/* el input recibe un booleano indicando si el contenido es válido, y muestra unas clases u otras */}
      <input className={ errorText === "" ? "input-design" : "input-design input-error"}
      type={typeProp}
      name={nameProp}
      placeholder={placeholderProp}
      value={value}
      disabled={isDisabled}
      onChange={(e) => handlerProp(e)}
      onBlur={(e) => onBlurHandler(e)}
      />
      <p className="error-message">{errorText}</p>
    </div>
  );
};

// <CustomInput type="email" name="emailInput" placeholder="introduce tu email..." />
