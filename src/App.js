import './App.css';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import Testing from './components/testing'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'
import ham from './assets/shared/icon-hamburger.svg'

function App() {

  function openMenu() {

  }


  return (
    <div id='all'>

      <div id='topNav' className='center'>

        <div id='logoCont'>
          <img src={logo} alt='the logo' />
        </div>

        <div id='topRightCont'>
          <div id='navBtn'>
            <button onClick={openMenu}>
              <img src={ham} alt='menu' />
            </button>
          </div>
          <div id='navList' className='center'>
            <ul id='navListInner' >
              <li >
                <Link to='/'> <span className='boldNums'>00</span>Home</Link>
              </li>
              <li>
                <Link to='/testing'><span className='boldNums'>0X</span> Testing</Link>
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
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
