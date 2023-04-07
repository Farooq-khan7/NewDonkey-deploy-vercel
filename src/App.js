import logo from './logo.svg';
import './App.css';
import News from './componenets/News';
import Navbar from './componenets/Navbar';
import NewsItems from './componenets/NewsItems';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
  return (
  <div>
      
    <Router>
     <Navbar/>
     <Routes>
            <Route exact path='/general' element={<News key='general' pageSize={6} country='us' category='general' />}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={6} country='us' category='technology' />}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={6} country='us' category='business' />}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={6} country='us' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={6} country='us' category='science' />}></Route>
           
      </Routes>
     
    </Router>
     
  </div>
  );
}

export default App;
