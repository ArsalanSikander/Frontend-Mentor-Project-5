import './crew.css';

const CrewMember = ({ crewNum, crewJob, crewName, crewDesc }) => {

    return (
        <div id="crewMember">
            <p id="meetMessage"><span>{`0${crewNum}`}</span>meet your crew</p>
            <div id="memberInner">
                <p id='crewJob'>{crewJob}</p>
                <h2>{crewName}</h2>
                <p>{crewDesc}</p>
            </div>
        </div>
    )
}

export default CrewMember;