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
        <li>
          <h2 style={{ display: navActive ? 'flex' : 'none' }}> <img src={logo} alt="" /> Space Tourism</h2>
        </li>
        <li >
          <Link to='/' onClick={toggleMenu}> <span className='boldNums'>00</span>Home</Link>
        </li>
        <li>
          <Link to='/testing' onClick={toggleMenu}><span className='boldNums'>0X</span> Testing</Link>
        </li>
        <li  >
          <Link to='/destination' onClick={toggleMenu}><span className='boldNums'>01</span> Destination</Link>
        </li>
        <li>
          <Link to='/crew' onClick={toggleMenu}><span className='boldNums'>02</span> Crew</Link>
        </li>
        <li>
          <Link to='/technology' onClick={toggleMenu}><span className='boldNums'>03</span> Technology</Link>
        </li>
      </ul>
    )
  }



  function toggleMenu() {
    if (window.matchMedia("(max-width: 430px)").matches) {
      return setNavActive(!navActive);
    }
  }

  return (
    <div id='all'>

      <div id='topNav' className='center'>

        <div id='logoCont'>
          <img src={logo} alt='the logo' />
        </div>

        <div id='topRightCont'>
          <div id='navBtn'>
            <button onClick={toggleMenu}>
              <img src={ham} alt='menu' />
            </button>
          </div>
          <div id="blur" className={navActive ? 'vis' : 'inVis'}></div>
          <div id='navList' className={navActive ? 'up' : 'normal'} >
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
