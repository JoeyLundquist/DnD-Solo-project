import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemsListItem from "../ItemsListItem/ItemsListItem";
import ItemsDetails from "../ItemsDetails/ItemsDetails";

import './currentCharacterInfo.css'

const CurrentCharacterPage = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)
    const inventory = useSelector(store => store.itemSearchReducer)
    console.log('inv', inventory)

    const fetchCharacterItems = () => {
        dispatch({
            type:'FETCH_INVENTORY_ITEMS',
            payload: character.id
        })   
    }


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
            <button onClick={fetchCharacterItems}>Items</button>
 
            <div className="inventory-spells-list-container">
                <div className="inventory-spells-container">
                    <h3>Inventory</h3>
                    <ul>
                    {inventory.map(inv => <ItemsListItem item={inv}/>)}
                    </ul>
                </div>
                <div className="inventory-spells-container">
                    <h3>Spells/Cantrips</h3>
                </div>
                <div className="inventory-spells-container">
                    <h3>Details</h3>
                    <ItemsDetails />
                </div>
            </div>
        </>
    )
}


export default CurrentCharacterPage;