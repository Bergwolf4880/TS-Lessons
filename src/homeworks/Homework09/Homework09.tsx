import { ChangeEvent, useState } from 'react';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import {
  Homework09Container,
  OutputField,
  Paragraph,
  OutputContainer,
} from './styles';

function Homework09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const [firstField, setFirstField] = useState<string>('');
  const [secondField, setSecondField] = useState<string>('');

  function showInputValues() {
    setFirstField(inputValue);
    setSecondField(inputValue2);
  }

  return (
    <Homework09Container>
      <Input
        name="First input name"
        label="First input label:"
        placeholder="first input"
        onInputChange={onChangeInput}
      />
      <Input
        name="Second input name"
        label="Second input label:"
        placeholder="second input"
        onInputChange={onChangeInput2}
      />
      <OutputContainer>
      <Paragraph>First field output:</Paragraph>
      <OutputField>{firstField}</OutputField>
      </OutputContainer>
      <OutputContainer>
      <Paragraph>Second field output:</Paragraph>
      <OutputField>{secondField}</OutputField>
      </OutputContainer>

      <Button
        name="Show values"
        type="submit"
        onButtonClick={showInputValues}
      />
    </Homework09Container>
  );
}

export default Homework09;
