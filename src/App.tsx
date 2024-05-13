import GlobalStyles from 'styles/GlobalStyles';
//Lessons
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from './lessons/Lesson07/Lesson07';
// import Lesson08 from 'lessons/Lesson08/Lesson08';
// import Lesson09 from 'lessons/Lesson09/Lesson09';
// import Lesson10 from 'lessons/Lesson10/Lesson10';
// import Lesson11 from 'lessons/Lesson11/Lesson11';
// import Lesson12 from 'lessons/Lesson12/Lesson12'
// import Layout from 'components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weather from 'pages/Weather/Weather'
// import About from 'pages/About/About';
// import Home from 'pages/Home/Home';
// import Users from 'pages/Users/Users';np
// import Clients from 'pages/Clients/Clients';
// import Microsoft from 'pages/Clients/components/Microsoft/MIcrosoft';
// import Apple from 'pages/Clients/components/Apple/Apple';
// import Google from 'pages/Clients/components/Google/Google';
// import Lesson14 from 'lessons/Lesson14/Lesson14';

//HW
// import ProfileCard from './components/ProfileCard/ProfileCard';
// import Homework07 from 'homeworks/Homework07/Homework07';
// import Homework08 from 'homeworks/Homework08/Homework08';
// import Homework09 from 'homeworks/Homework09/Homework09';
// import CWHW09 from 'homeworks/Homework09/CWHW09';
// import Homework11 from 'homeworks/Homework11/Homework11'

//Consultation

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Weather />
      {/* Homework & Lesson 13 */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/microsoft" element={<Microsoft />} />
          <Route path="/clients/google" element={<Google />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout> */}
      {/* <Lesson14 /> */}
      {/* <Lesson12 /> */}
      {/* <Homework11 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson10 /> */}
      {/* <Homework09 /> */}
      {/* <CWHW09/> */}
      {/* <Lesson09 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework07 /> */}
      {/* <Homework07 /> */}
      {/* <Lesson07/> */}
      {/* <Lesson06/> */}
    </BrowserRouter>
  );
}

export default App;
