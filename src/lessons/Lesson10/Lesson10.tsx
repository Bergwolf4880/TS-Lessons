import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import {
  Lesson10Wrapper,
  ButtonContainer,
  DataContainer,
  FactEntry,
  SpinnerContainer,
} from './styles';

import Button from 'components/Button/Button';

import Spinner from 'components/Spinner/Spinner';

function Lesson10() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isFactsLoaded, setIsFactsLoaded] = useState<boolean>(false);

  const getCatFact = async () => {
    try {
      setIsFactsLoaded(true);
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('Api error'), {
          response: result,
        });
      } else {
        setCatFacts(prevFacts => [result.fact, ...prevFacts]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFactsLoaded(false);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  const catFactsElements = catFacts.map((fact: string) => {
    return <FactEntry key={v4()}>{fact}</FactEntry>;
  });

  const deleteAllData = () => {
    setCatFacts([]);
    // setIsFactsLoaded(false);
  };

  const isCatFactEmpty: boolean = !!catFacts.length;
  console.log('isCatFactEmpty',isCatFactEmpty)

  function spinnerAsName() {
    return (
      isFactsLoaded ? 'GET MORE INFO': <Spinner />  )
  }

  return (
    <Lesson10Wrapper>
        <>
          <ButtonContainer>
            <Button name="GET MORE INFO" onButtonClick={getCatFact} />
             <SpinnerContainer>{isFactsLoaded ? <Spinner />: ""}</SpinnerContainer>
            <Button
              name="DELETE ALL DATA"
              onButtonClick={deleteAllData}
              disabled = {!isCatFactEmpty}
          />
        </ButtonContainer>
       
          <DataContainer isHideBlock={!isCatFactEmpty}>
            {catFactsElements}
          </DataContainer>
        </>
    </Lesson10Wrapper>
  );
}

export default Lesson10;
