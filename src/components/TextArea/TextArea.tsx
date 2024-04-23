import "./styles.css";
import { TextAreaProps } from "./types";

function TextArea({ label, name, placeholder }:TextAreaProps) {

    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea name={name} placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;

