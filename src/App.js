import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './Componant/Navbar';
import Rooms from './pages/Rooms';

import DetailSingle from './pages/DetailSingle';
import DetailDouble from './pages/DetailDouble';
import Familystay from './pages/Familystay';
import Swimming from './pages/Swimming';
import Mountain from './pages/Mountain';
function App() {
  return (
  
    <div>
 
      <Router>
      <Navbar/>
      <Routes>
     
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/Rooms" element={<Rooms/>}/>
         <Route exact path="/Contact" element={<Contact/>}/>
         <Route exact path="/DetailSingle" element={<DetailSingle/>}/>
         <Route exact path="/DetailDouble" element={<DetailDouble/>}/>
         <Route exact path="/FamilyStay" element={<Familystay/>}/>
         <Route exact path="/Swimming" element={<Swimming/>}/>
         <Route exact path="/Mountain" element={<Mountain/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
