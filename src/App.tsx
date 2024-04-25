import './App.css';
//Lessons
import Lesson06 from './lessons/Lesson06/Lesson06';
import Lesson07 from './lessons/Lesson07/Lesson07';
import Lesson08 from 'lessons/Lesson08/Lesson08';
//HW
import ProfileCard from './components/ProfileCard/ProfileCard';
import Homework07 from 'homeworks/Homework07/Homework07';
//Consultation
import Button from 'components/Button/Button';

function App() {
  return (
    <div className="App">

      <Button name="Lol" type="submit" disabled={true} onButtonClick={() => alert()} />
      
      <Lesson08 />
      {/* <Homework07 />
      <Homework07/> */}
      {/* <Lesson07/> */}
      {/* <Lesson06/>*/}
    </div>
  );
}         

export default App;
