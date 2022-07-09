import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import './currentCharacterInfo.css'

const CurrentCharacterPage = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)
    console.log(character)

    // useEffect(() => {
    //     dispatch({
    //         type:'FETCH_CURRENT_CHARACTER_INFO'
    //     })    
    // }, [])

    return(
        <>
            <div className="attributes-container">
                <p>Strength: {character.strength}</p>
                <p>Dexterity: {character.dexterity}</p>
                <p>Wisdom: {character.wisdom}</p>
                <p>Intelligence: {character.intelligence}</p>
                <p>Charisma: {character.charisma}</p>
                <p>Constitution: {character.constitution}</p>
            </div>

            <div className="character-info-container">
                <h2>{character.name}</h2>
                <p>Level: {character.level}</p>
                <p>{character.race}</p>
                <p>{character.class}<span> lvl:{character.class_lvl}</span></p>
                <p>Speed: {character.speed}</p>
                <p>HP: {character.hp}</p>
                <p>AC: {character.ac}</p>
            </div>
 
            <div className="inventory-spells-list-container">
                <div className="inventory-spells-container">
                    <h3>Inventory</h3>
                </div>
                <div className="inventory-spells-container">
                    <h3>Spells/Cantrips</h3>
                </div>
                <div className="inventory-spells-container">
                    <h3>Details</h3>
                </div>
            </div>
        </>
    )
}


export default CurrentCharacterPage;