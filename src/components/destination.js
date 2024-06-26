import './destination.css';
import mars from '../assets/destination/image-mars.webp';
import moon from '../assets/destination/image-moon.webp';
import europa from '../assets/destination/image-europa.webp';
import titan from '../assets/destination/image-titan.webp';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DestinationItem from './destinationItem';

const Destination = ({ match }) => {

    let { destName } = useParams();
    const [destImg, setDestImg] = useState('');

    useEffect(() => {
        switch (destName) {
            case ('moon'):
                setDestImg(moon)
                break;
            case ('mars'):
                setDestImg(mars);
                break;
            case ('europa'):
                setDestImg(europa);
                break;
            case ('Titan'):
                setDestImg(titan);
                break;
            default:
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
                    <DestinationItem destinationName={destName} />
                </div>
            </div>
        </div>
    )
}

export default Destination;