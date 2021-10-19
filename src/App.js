import './App.css';
import ChangePassword from './Components/ChangePassword';
import Login from './Components/Login';
// import Navs from './Components/Navs';
// import SideBar from './Components/Sidebar';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Contents from './Components/Contents';
import Dashboard from './Components/Dashboard';
import Navii from './Components/Navii';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        {/* <Route path='/nav' exact component={Navs}/> */}
        <Route path='/nav' exact component ={Navii}/>
        <Route path="/dashboard"exact component={Dashboard} />
        <Route path='/' exact component={Login}/>
        <Route path="/changepass" component={ChangePassword}/>
        <Route path="/contents" component={Contents} />
      </Switch>
      </Router>

      {/* <Navs /> */}
      {/* <SideBar /> */}
      {/* <Login />   */}
      {/* <ChangePassword /> */}
      {/* <Dashboard /> */}
      {/* <Content /> */}
    </div>
  );
}

export default App;
