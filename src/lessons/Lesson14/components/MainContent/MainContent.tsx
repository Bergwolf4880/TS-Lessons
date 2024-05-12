import { useState, createContext } from 'react';
import Section from '../Section/Section';
import { MainContentComponent, MainTitle } from './styles';
import { UserData } from './types';


//CreateContext
export const MainContext = createContext({
  firstName: '',
  secondName: '',
  age: 0,
});

function MainContent() {
  const [userData, setUserData] = useState<UserData>({
    firstName: 'Homer',
    secondName: 'Simpson',
    age: 45,
  });

  return (
    <MainContext.Provider value={userData}>
      <MainContentComponent>
        <MainTitle></MainTitle>
        <Section />
      </MainContentComponent>
    </MainContext.Provider>
  );
}

export default MainContent;
