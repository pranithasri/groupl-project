import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./LoginPage"
import { EmployeeDashBoard } from './employeescreens/EmployeeDashBoard';
import { Route, Link, BrowserRouter as Router,Routes } from 'react-router-dom';
import { CustomerDashBoard} from './customerscreens/CustomerDashBoard';
import {CreateAccount} from "./CreateAccount"

function App() {
  return (
    <div className="App">
      <div style={{height:"100%"}}>
        <Router>
        <Routes>
      <Route exact path="/" element={<LoginPage/>} />  
<Route  path="employee/dashboard" element={<EmployeeDashBoard/>} />  
<Route  path="customer/dashboard" element={<CustomerDashBoard/>} /> 
<Route  path="/createAccount" element={<CreateAccount/>} />  

</Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
