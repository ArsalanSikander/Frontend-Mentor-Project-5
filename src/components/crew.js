import './crew.css';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import data from '../assets/data.json';
import CrewMember from './crewMember';

const RoundDiv = () => {
    return (
        <div className="roundDiv">

        </div>
    )
}

const Crew = () => {

    // same order as in the provided data.json file
    const imgArr = [douglas, mark, victor, anousheh];

    var { crewNum } = useParams();

    // on the first page load assign 0 to the crewNumber
    crewNum = crewNum ? crewNum : 1;

    const [crewJob, setCrewJob] = useState(data.crew[0].role);
    const [crewName, setCrewName] = useState(data.crew[0].name);
    const [crewDesc, setCrewDesc] = useState(data.crew[0].bio);
    const [crewImg, setCrewImg] = useState(imgArr[0]);

    const updateStats = (crewNum) => {
        setCrewName(`0${crewNum}`);
        setCrewJob(data.crew[crewNum - 1].role);
        setCrewName(data.crew[crewNum - 1].name);
        setCrewDesc(data.crew[crewNum - 1].bio);
        setCrewImg(imgArr[crewNum - 1]);
    }

    // no second argument as we want it to run on every render and avoid warning
    useEffect(() => {
        updateStats(crewNum);
    });


    return (
        <div id='outerCont'>
            <div id="fOne">
                <CrewMember crewName={crewName} crewNum={crewNum} crewDesc={crewDesc} crewJob={crewJob} />
                <ul>
                    <li>
                        <NavLink to='/crew/1' ><RoundDiv /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew/2' ><RoundDiv /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew/3' ><RoundDiv /></NavLink>
                    </li>
                    <li>
                        <NavLink to='/crew/4' ><RoundDiv /></NavLink>
                    </li>

                </ul>
            </div>
            <div id="sOne">
                <img id="crewImg" src={crewImg} alt="" />

            </div>
        </div>
    )
}

export default Crew;
