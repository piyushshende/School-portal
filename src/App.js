import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Common from './components/ERP/common/Common.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Searchstudent from './components/search student/Searchstudent';
import Dashboard from './components/Dashboard/Dashboard';
import School_details from './components/Class structure/School details/School_details';
import Classes from './components/Class structure/Classes/Classes';
import Subject from './components/Class structure/Subjects/Subject';
import Updateclassteacher from './components/Class structure/Class Teacher/Updateclassteacher';
import Allstudents from './components/Send Message/Allstudents';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
      <Common/>
      <Routes>
        <Route path="/searchstudent" element={<Searchstudent/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/class_structure/school_details" element={<School_details/>}/>
        <Route path="/class_structure/classes" element={<Classes/>}/>
        <Route path="/class_structure/subjects" element={<Subject/>}/>
        <Route path="/class_structure/class_teacher" element={<Updateclassteacher/>}/>
        <Route path="/Send_Message/All_Students" element={<Allstudents/>}/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
        <Route path="" element/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
