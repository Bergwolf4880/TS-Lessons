import {
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
} from './styles';
import { InputProps } from './types';

function Input({
  name,
  label,
  type = 'text',
  placeholder,
  onInputChange,
  value,
}: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      />
    </InputComponentContainer>
  );
}

export default Input;
