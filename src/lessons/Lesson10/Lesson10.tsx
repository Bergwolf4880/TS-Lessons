import { useEffect, useState } from 'react';

import {
  Lesson10Wrapper,
  ButtonContainer,
  DataContainer,
  FactEntry,
} from './styles';

import Button from 'components/Button/Button';
import { v4 } from 'uuid';

function Lesson10() {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [isFactsLoaded, setIsFactsLoaded] = useState<boolean>(false);

  const getFactFromServer = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const result = await response.json();

      if (!response.ok) {
        throw Object.assign(new Error('Api error'), {
          response: result,
        });
      } else {
        setIsFactsLoaded(true);
        setCatFacts(prevFacts => [result.fact, ...prevFacts]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFactFromServer();
  }, []);

  const mappedFacts = catFacts.map(fact => {
    return <FactEntry key={v4()}>{fact}</FactEntry>;
  });

  const deleteAllData = () => {
    setCatFacts([]);
    setIsFactsLoaded(false);
  };

  return (
    <Lesson10Wrapper>
      <ButtonContainer>
        <Button name="GET MORE INFO" onButtonClick={getFactFromServer} />
        <Button name="DELETE ALL DATA" onButtonClick={deleteAllData} />
      </ButtonContainer>
      <DataContainer isVisible={isFactsLoaded}>{mappedFacts}</DataContainer>
    </Lesson10Wrapper>
  );
}

export default Lesson10;
