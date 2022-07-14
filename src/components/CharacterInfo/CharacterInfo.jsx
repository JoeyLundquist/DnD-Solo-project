import { useSelector } from "react-redux";

import './characterInfo.css'

const CharacterInfo = () => {

    const character = useSelector(store => store.characterReducer)

    return(
        <>
             <div className="character-info-container">
                <h2>{character.name}</h2>
                <p>Level: {character.level}</p>
                <p>{character.race}</p>
                <p>{character.class}<span> lvl:{character.class_lvl}</span></p>
                <p>Speed: {character.speed}</p>
                <p>HP: {character.hp}</p>
                <p>AC: {character.ac}</p>
            </div>
        </>
    )
}

export default CharacterInfo;