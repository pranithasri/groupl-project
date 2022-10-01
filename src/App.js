import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./LoginPage"
import { DashBoard } from './DashBoard';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div style={{height:"100%"}}>
        <Router location={"/"}>
        <LoginPage/> 
        
        </Router>
      </div>
    </div>
  );
}

export default App;
