import { ChangeEvent, useState } from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import { Homework09Wrapper, ResultsBlock, ResultWrapper } from './styles1';

function CWHW09() {
    function Homework09() {
        const [firstNote, setFirstNote] = useState<string>('');
        const [secondNote, setSecondNote] = useState<string>('');
        const [isShowResult, setIsShowResult] = useState<boolean>(false);
      
        const onFirstNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
          setFirstNote(event.target.value)
        }
      
        const onSecondNoteInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
          setSecondNote(event.target.value)
        }
      
        const onShowResult = () => {
          // setIsShowResult(true)
            setIsShowResult(!isShowResult)
        }


        return (
            <Homework09Wrapper>
              <Input placeholder="First note" onInputChange={onFirstNoteInputChange} name='firstNote' label='First note' />
              <Input placeholder="Second note" onInputChange={onSecondNoteInputChange} name='secondNote' label='Second note' />
              <Button name='Show notes' onButtonClick={onShowResult} />
              <ResultsBlock isShowResult={isShowResult}>
                <ResultWrapper>{firstNote}</ResultWrapper>
                <ResultWrapper>{secondNote}</ResultWrapper>
              </ResultsBlock>
            </Homework09Wrapper>
          )
        
}

export default CWHW09;
