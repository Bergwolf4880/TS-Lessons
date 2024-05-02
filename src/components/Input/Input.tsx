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
  checked,
  onInputBlur
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
        checked={checked}
        onBlur={onInputBlur}
      />
    </InputComponentContainer>
  );
}

export default Input;

