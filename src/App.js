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
import Allstudents from './components/Send Message/Allstudents/Allstudents';
import Individualclasses from './components/Send Message/Individualclasses/Individualclasses';
import Individualstudents from './components/Send Message/Individualstudents/Individualstudents';
import Wholestaff from './components/Send Message/Wholestaff/Wholestaff';
import Department from './components/Send Message/Department/Department';
import Individualstaff from './components/Send Message/Individualstaff/Individualstaff';
import Viewhistory from './components/Send Message/Viewhistory/Viewhistory';
import Addstudents from './components/Manage Students/Addstudents/Addstudents';
import Liststudents from './components/Manage Students/Liststudents/Liststudents';
import Movestudents from './components/Manage Students/Movestudents/Movestudents';
import Classstudentlist from './components/Manage Students/Classstudentslist/Classstudentlist';
import MarkAttendance from './components/Students Attendance/Mark Attendance/MarkAttendance';
import Dailyreport from './components/Students Attendance/Dailt Report/Dailyreport';

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
        <Route path="/Send_Message/Individual_Classes" element={<Individualclasses/>}/>
        <Route path="/Send_Message/Individual_Students" element={<Individualstudents/>}/>
        <Route path="/Send_Message/Whole_Staff" element={<Wholestaff/>}/>
        <Route path="/Send_Message/Department" element={<Department/>}/>
        <Route path="/Send_Message/Individual_Staff" element={<Individualstaff/>}/>
        <Route path="/Send_Message/View_History" element = {<Viewhistory/>}/>
        <Route path="/Manage_Students/Add_Students" element={<Addstudents/>}/>
        <Route path="/Manage_Students/List_Students" element={<Liststudents/>}/>
        <Route path="/Manage_Students/Move_Students" element={<Movestudents/>}/>
        <Route path="/Manage_Students/Class_Students_Lists" element={<Classstudentlist/>}/>
        <Route path="/Students_Attendance/Mark_Attendance" element={<MarkAttendance/>}/>
        <Route path="/Students_Attendance/Daily_Report" element={<Dailyreport/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;