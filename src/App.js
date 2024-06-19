import './App.css';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'

function App() {


  return (
    <div id='all'>

      <div id='topNav' className='center'>

        <div id='logoCont'>
          <img src={logo} alt='the logo' />
        </div>

        <div id='topRightCont'>
          <div id='navList' className='center'>
            <ul id='navListInner' >
              <li >
                <Link to='/'> <span className='boldNums'>00</span>Home</Link>
              </li>
              <li  >
                <Link to='/destination'><span className='boldNums'>01</span> Destination</Link>
              </li>
              <li>
                <Link to='/crew'><span className='boldNums'>02</span> Crew</Link>
              </li>
              <li>
                <Link to='/technology'><span className='boldNums'>03</span> Technology</Link>
              </li>
            </ul>
          </div>
          <div id='lineCont'>
          </div>
        </div>


      </div>

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
