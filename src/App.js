import './App.css';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import Testing from './components/testing'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/shared/logo.svg'
import ham from './assets/shared/icon-hamburger.svg'
import { useState } from 'react';
import DestinationItem from './components/destinationItem';
import CrewMember from './components/crewMember';


function App() {

  const [navActive, setNavActive] = useState(false);

  const NavListInner = () => {
    return (
      <ul id='navListInner'  >
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
    )
  }

  const SideNavigation = () => {
    return (
      <div id="wholeSideMenu" className={navActive ? 'visible' : 'invisible'}>
        <NavListInner />
      </div>
    )
  }

  function ToggleMenu() {
    setNavActive(!navActive);
  }

  return (
    <div id='all'>

      <div id='topNav' className='center'>

        <div id='logoCont'>
          <img src={logo} alt='the logo' />
        </div>

        <div id='topRightCont'>
          <div id='navBtn'>
            <button onClick={ToggleMenu}>
              <img src={ham} alt='menu' />
            </button>
          </div>
          {/* <SideNavigation /> */}
          <div id='navList' >
            <NavListInner />
          </div>
          <div id='lineCont'></div>
        </div>
      </div>

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />}>
          <Route path='/destination/:destName' element={<DestinationItem />} />
        </Route>
        <Route path='/crew' element={<Crew />} >
          <Route path='/crew/:crewNum' element={<CrewMember />} />
        </Route>
        <Route path='/technology' element={<Technology />} />
        <Route path='/testing' element={<Testing />}>
          <Route path='/testing/:tabName' element={<Testing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
