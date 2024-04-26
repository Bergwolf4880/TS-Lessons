import './App.css';
//Lessons
import Lesson06 from './lessons/Lesson06/Lesson06';
import Lesson07 from './lessons/Lesson07/Lesson07';
import Lesson08 from 'lessons/Lesson08/Lesson08';
//HW
import ProfileCard from './components/ProfileCard/ProfileCard';
import Homework07 from 'homeworks/Homework07/Homework07';
import Homework08 from 'homeworks/Homework08/Homework08';
//Consultation


function App() {
  return (
    <div className="App">

     <Homework08></Homework08>
      
      <Lesson08 />
      {/* <Homework07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson07/> */}
      {/* <Lesson06/> */}
    </div>
  );
}         

export default App;
