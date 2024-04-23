import "./styles.css";
import { InputProps } from "./types"

function Input({ name, label, type, placeholder } : InputProps) {

    return (

        <div className="input-field">
            <label>{label}</label>

            <input name={name}
                type={type}
                placeholder={placeholder}
                >
            </input>

        </div>
    )

}

export default Input;