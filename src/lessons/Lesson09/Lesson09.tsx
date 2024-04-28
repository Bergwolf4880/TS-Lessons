import { ChangeEvent, useEffect, useState } from 'react';
import { Lesson09Component, InputExamples, Result } from './styles';
import { log } from 'console';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  useEffect(() => {
    console.log(`mounting`);
  }, []);

  useEffect(() => {
    console.log(`updating`);
  }, [inputValue]);
  // console.log(`render`);

  return (
    <Lesson09Component>
      <InputExamples
        name="example"
        placeholder="example text"
        onChange={onChangeInput}
      />
      <InputExamples
        name="example"
        placeholder="example text"
        onChange={onChangeInput2}
      />
      <Result>{inputValue}</Result>
      <Result>{inputValue2}</Result>
    </Lesson09Component>
  );
}

export default Lesson09;
