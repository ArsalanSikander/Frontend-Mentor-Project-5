import './tech.css'

const TechItem = ({ vehDesc, vehName }) => {
    return (
        <div id="vehInfo">
            <p>the terminology ...</p>
            <h1>{vehName}</h1>
            <p>{vehDesc}</p>
        </div>
    )
}

export default TechItem;