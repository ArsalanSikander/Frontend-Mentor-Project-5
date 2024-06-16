import './App.css';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'

function App() {
  return (
    <>

      <div id='topNav' class='center'>

        <div id='logoCont'>
          <img src={logo} alt='the logo' />
        </div>

        <div id='lineCont'>
          <p>some words</p>
        </div>

        <div id='navList' class='center'>
          <ul id='navListInner' >
            <li>
              <Link to='/'>00 Home</Link>
            </li>
            <li>
              <Link to='/destination'>01 Destination</Link>
            </li>
            <li>
              <Link to='/crew'>02 Crew</Link>
            </li>
            <li>
              <Link to='/technology'>03 Technology</Link>
            </li>
          </ul>
        </div>

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
