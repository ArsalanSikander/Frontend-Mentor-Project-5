import './testing.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/destination/image-europa.png'
import img2 from '../assets/destination/image-titan.png'
import { useState } from 'react';

const Testing = () => {

    function moveFirst() {
        setFirstActive(true);
        setSecActive(false);
    }

    function moveSecond() {
        setSecActive(true);
        setFirstActive(false);
    }

    const [firstActive, setFirstActive] = useState(true);
    const [secActive, setSecActive] = useState(false);

    return (
        <div id='maincont'>
            <div id="holder">
                <div id="navigator">
                    <ul>
                        <li><Link to='/testing/one' onClick={moveFirst}>One</Link></li>
                    </ul>
                    <ul>
                        <li><Link to='/testing/two' onClick={moveSecond} >Two</Link></li>
                    </ul>
                </div>
                <div id="tabHolder">
                    <div id="currTab" className={firstActive ? 'vis' : 'left'}>
                        <img src={img1} />
                    </div>
                    <div id="nextTab" className={secActive ? 'vis' : 'right'}>
                        <img src={img2} />

                    </div>
                </div>
            </div>
            <div id="toDo">
                <h3>Steps to take to render this</h3>
                <ol>
                    <li>We will move them using CSS classes!</li>
                </ol>
            </div>
        </div>
    )

}

export default Testing;