import "./styles.css";
import { InputProps } from "./types"

function Input({ name, label, type="text", placeholder, onInputChange } : InputProps) {

    return (
        <div className="input-component-container">
          <label className="input-component-label">{label}</label>
          <input
            className="input-component"
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onInputChange}
          />
        </div>
      );

}

export default Input;

