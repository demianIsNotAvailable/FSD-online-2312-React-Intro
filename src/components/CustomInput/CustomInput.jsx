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
      {/* el input recibe un mensaje de error, que si está vacío no le añade la className de error */}
      <input className={ errorText === "" ? "input-design" : "input-design input-error"}
      type={typeProp}
      name={nameProp}
      placeholder={placeholderProp}
      value={value}
      disabled={isDisabled}
      onChange={(e) => handlerProp(e)}
      onBlur={(e) => onBlurHandler(e)}
      />
      {/* el párrafo recibe directamente el mensaje de error a mostrar desde el login */}
      <p className="error-message">{errorText}</p>
    </div>
  );
};

// <CustomInput type="email" name="emailInput" placeholder="introduce tu email..." />
