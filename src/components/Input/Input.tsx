import { InputComponentContainer, InputComponentLabel, InputComponent } from './styles';
import { InputProps } from "./types"

function Input({ name, label, type="text", placeholder, onInputChange } : InputProps) {
    return (
        <InputComponentContainer>
          <InputComponentLabel>{label}</InputComponentLabel>
          <InputComponent
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onInputChange}
          />
        </InputComponentContainer>
      );
}

export default Input;