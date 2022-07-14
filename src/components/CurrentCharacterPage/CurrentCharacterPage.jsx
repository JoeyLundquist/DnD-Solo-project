import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ItemsListItem from "../ItemsListItem/ItemsListItem";
import ItemsDetails from "../ItemsDetails/ItemsDetails";
import { SpellDetails } from "../SpellDetails/SpellDetails";
import SpellListItem from "../SpellListItem/SpellListItem";
import MoniesManager from "../MoniesManager/MoniesManager";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

import './currentCharacterInfo.css'

const CurrentCharacterPage = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)
    const inventory = useSelector(store => store.inventoryItems)
    const itemDetail = useSelector(store => store.itemDetailReducer)
    const preparedSpells = useSelector(store => store.preparedSpellsList)
    console.log('inv', inventory)
    const {id} = useParams()

    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_CHARACTER_INFO',
            payload: id
        })
     
    }, [id])

    const removeItemFromInventory = () => {
        dispatch({
            type: 'REMOVE_ITEM_FROM_INVENTORY',
            payload: {
                name: itemDetail.name,
                url: itemDetail.url,
                charId: character.id
            }
        })
    }



    return(
        <> 
            <CharacterInfo />
            <div className="attributes-container">
                <p>Strength: {character.strength}</p>
                <p>Dexterity: {character.dexterity}</p>
                <p>Wisdom: {character.wisdom}</p>
                <p>Intelligence: {character.intelligence}</p>
                <p>Charisma: {character.charisma}</p>
                <p>Constitution: {character.constitution}</p>
            </div>
           
            <MoniesManager /><br></br>
            <Link to={`/current-character/available-spells/${character.id}`}>Manage spells</Link><br></br>
            <Link to={`/current-character/item-search/${character.id}`}>Search Items</Link>

            <Grid container spacing={2}>
            <div className="inventory-spells-list-container">
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Inventory</h3>
                    <ul>
                    {inventory.map(inv => <ItemsListItem item={inv}/>)}
                    </ul>
                {/* </div> */}
                </Grid>
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Items Details</h3>
                    <ItemsDetails page={'current'}/>
                    <button onClick={removeItemFromInventory}>Remove from Inventory</button>
                {/* </div> */}
                </Grid>
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Spells/Cantrips</h3>
                    <ul>
                        {preparedSpells.map(spells => <SpellListItem spell={spells}/>)}
                    </ul>
                {/* </div> */}
                </Grid>
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Spell details</h3>
                    <SpellDetails />
                {/* </div> */}
                </Grid>
            </div>
            </Grid>
            
        </>
    )
}


export default CurrentCharacterPage;