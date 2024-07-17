import './tech.css'
import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spacePort from '../assets/technology/image-spaceport-portrait.jpg';
import spaceCap from '../assets/technology/image-space-capsule-portrait.jpg'
import TechItem from './techItem';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import data from '../assets/data.json';

const Technology = () => {

    var { techNum } = useParams();
    techNum = techNum ? techNum : 1;
    const imgArr = [launchVehicle, spacePort, spaceCap];

    const [vehName, setVehName] = useState(data.technology[0].name);
    const [vehDesc, setVehDesc] = useState(data.technology[0].description);
    const [vehImage, setVehImg] = useState(imgArr[techNum - 1]);

    const updateStats = (techNum) => {
        setVehName(data.technology[techNum - 1].name);
        setVehDesc(data.technology[techNum - 1].description);
        setVehImg(imgArr[techNum - 1]);
    }

    // no second argument as we want it to run on every render and avoid warning
    useEffect(() => {
        updateStats(techNum);
    })

    return (
        <div id='mainTech'>
            <div id="firstTech">
                <h2><span>03</span>space launch 101</h2>
            </div>
            <div id="secondTech">
                <div id="innerCont">
                    <ul id='theList'>
                        <li>
                            <NavLink to='/tech/1' className={({ isActive }) => isActive ? 'white1' : 'gray1'}>1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tech/2' className={({ isActive }) => isActive ? 'white1' : 'gray1'}>2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tech/3' className={({ isActive }) => isActive ? 'white1' : 'gray1'}>3</NavLink>
                        </li>
                    </ul>
                    <TechItem vehName={vehName} vehDesc={vehDesc} />
                </div>
                <div id="vehImg">
                    <img src={vehImage} alt="vehicle" />
                </div>
            </div>
        </div>
    )
}

export default Technology;