import './App.css';
import Login from "./Login";
import Home from "./Home"
import {Route, Router, Routes} from "react-router-dom";


function App() {
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </Router>
}

export default App;
