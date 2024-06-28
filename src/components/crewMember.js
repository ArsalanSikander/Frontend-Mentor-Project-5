import './crew.css';

const CrewMember = ({ crewNum, crewJob, crewName, crewDesc }) => {

    return (
        <div id="crewMember">
            <p><span>{`0${crewNum}`}</span>meet your crew</p>
            <p id='crewJob'>{crewJob}</p>
            <h2>{crewName}</h2>
            <p>{crewDesc}</p>
        </div>
    )
}

export default CrewMember;