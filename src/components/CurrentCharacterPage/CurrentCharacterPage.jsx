import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemsListItem from "../ItemsListItem/ItemsListItem";
import ItemsDetails from "../ItemsDetails/ItemsDetails";
import { SpellDetails } from "../SpellDetails/SpellDetails";
import SpellListItem from "../SpellListItem/SpellListItem";
import MoniesManager from "../MoniesManager/MoniesManager";

import './currentCharacterInfo.css'

const CurrentCharacterPage = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)
    const inventory = useSelector(store => store.inventoryItems)
    const preparedSpells = useSelector(store => store.preparedSpellsList)
    console.log('inv', inventory)

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type:'FETCH_INVENTORY_ITEMS',
                payload: character.id
            })
        }, 1000)
        setTimeout(() => {
            dispatch({
                type: 'FETCH_PREPARED_SPELLS',
                payload: character.id
            }) 
        }, 1000)
     
    }, [])



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
            <MoniesManager /><br></br>
            <Link to="available-spells">Manage spells</Link><br></br>
            <Link to="item-search">Search Items</Link>
 
            <div className="inventory-spells-list-container">
                <div className="inventory-spells-container">
                    <h3>Inventory</h3>
                    <ul>
                    {inventory.map(inv => <ItemsListItem item={inv}/>)}
                    </ul>
                </div>
                <div className="inventory-spells-container">
                    <h3>Items Details</h3>
                    <ItemsDetails page={'current'}/>
                </div>
                <div className="inventory-spells-container">
                    <h3>Spells/Cantrips</h3>
                    <ul>
                        {preparedSpells.map(spells => <SpellListItem spell={spells}/>)}
                    </ul>
                </div>
                <div className="inventory-spells-container">
                    <h3>Spell details</h3>
                    <SpellDetails />
                </div>
            </div>
        </>
    )
}


export default CurrentCharacterPage;