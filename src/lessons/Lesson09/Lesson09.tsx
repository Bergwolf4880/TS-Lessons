import { ChangeEvent, useEffect, useState } from 'react';
import { Lesson09Component, InputExamples, Result } from './styles';
import { log } from 'console';

function Lesson09() {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');
  const [activity, setActivity] = useState<string>('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const getActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('Api Error'), {
          response: result,
        });
      } else {
        setActivity(result.activity);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    console.log(`mounting`);
    getActivity();
  }, []);

  useEffect(() => {
    if (!!activity) {
      getActivity();
      console.log(`updating`);
    }
  }, [inputValue, inputValue2]);
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
      <Result>{activity}</Result>
    </Lesson09Component>
  );
}

export default Lesson09;
