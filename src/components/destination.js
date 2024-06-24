import './destination.css';
import mars from '../assets/destination/image-mars.webp';
import moon from '../assets/destination/image-moon.webp';
import europa from '../assets/destination/image-europa.webp';
import titan from '../assets/destination/image-titan.webp';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Destination = ({ match }) => {

    let { destName } = useParams();
    const [destTitle, setDestTitle] = useState('');
    const [destDesc, setDestDesc] = useState('');
    const [destDist, setDestDist] = useState('');
    const [destTime, setDestTime] = useState('');
    const [destImg, setDestImg] = useState('');

    useEffect(() => {
        switch (destName) {
            case ('moon'):
                setDestTitle('Moon');
                setDestDesc('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.');
                setDestDist('384,400 km');
                setDestTime('3 days');
                setDestImg(moon)
                break;
            case ('mars'):
                setDestTitle('Mars');
                setDestDesc('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!');
                setDestDist('225 mil. km');
                setDestTime('9 months');
                setDestImg(mars);
                break;
            case ('europa'):
                setDestTitle('Europa');
                setDestDesc('The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.');
                setDestDist('628 mil. km');
                setDestTime('3 years');
                setDestImg(europa);
                break;
            case ('Titan'):
                setDestTitle('Titan');
                setDestDesc('The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.');
                setDestDist('1.6 bil. km');
                setDestTime('7 years');
                setDestImg(titan);
                break;
            default:
                setDestTitle('Moon');
                setDestDesc('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.');
                setDestDist('384,400 km');
                setDestTime('3 days');
                setDestImg(moon);
                break;
        }
    }, [destName]);




    return (
        <div id='mainDiv' >
            <div id="contBoth">

                <div id="firstCont">
                    <p><span>01</span> pick your destination</p>
                    <img src={destImg} alt="planet mars" />
                </div>

                <div id="secCont">
                    <div id="destSelCont">
                        <ul>
                            <li>
                                <Link to='/destination/moon'>Moon</Link>
                            </li>
                            <li>
                                <Link to='/destination/mars'>Mars</Link>
                            </li>
                            <li>
                                <Link to='/destination/europa'>Europa</Link>
                            </li>
                            <li>
                                <Link to='/destination/titan'>Titan</Link>
                            </li>
                        </ul>
                    </div>
                    <h1>{destTitle}</h1>
                    <p>{destDesc}</p>
                    <div id="lineCont">

                    </div>
                    <div id="statsCont">
                        <div id="distCont">
                            <p>avg. distance</p>
                            <p>{destDist}</p>
                        </div>
                        <div id="travelCont">
                            <p>est. travel time</p>
                            <p>{destTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;