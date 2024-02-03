import "./App.css";
import LoginSignup from "./component/LoginSignup/LoginSignup"; 
import DashBoard from "./component/DashBoard/DashBoard"
import Announcement from "../src/component/Sidebar_component/announcement"
import Document from "../src/component/Sidebar_component/Document"
import Profile from "../src/component/Sidebar_component/MyProfile"
import Gpa from "../src/component/Sidebar_component/Gpa"
import Question from "../src/component/Sidebar_component/QuestionPaper"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../src/component/Footer/Footer";

function App() {
  return (
    <><Router>
        <Routes>
          <Route exact path="/LoginSignup" element={<LoginSignup />} />
          <Route exact path="/" element={<DashBoard/>} />          
          <Route exact path="/Announcement" element={<Announcement />} />
          <Route exact path="/Document" element={<Document />} />  
          <Route exact path="/MyProfile" element={<Profile />} />
          <Route exact path="/Gpa" element={<Gpa/>} />
          <Route exact path="/Question" element={<Question/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
