import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import ItemsListItem from "../ItemsListItem/ItemsListItem";
import ItemsDetails from "../ItemsDetails/ItemsDetails";
import { SpellDetails } from "../SpellDetails/SpellDetails";
import SpellListItem from "../SpellListItem/SpellListItem";
import MoniesManager from "../MoniesManager/MoniesManager";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import AttributeStats from "../AttributeStats/AttributeStats";


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
            <MoniesManager /><br></br>
            <AttributeStats />

            <Grid container spacing={2}>
            <div className="inventory-spells-list-container">
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Inventory <Link to={`/current-character/item-search/${character.id}`}><Button>Search Items</Button></Link></h3>
                    <ul>
                    {inventory.map(inv => <ItemsListItem key={inv.id} item={inv}/>)}
                    </ul>
                {/* </div> */}
                </Grid>
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Items Details</h3>
                    <ItemsDetails page={'current'}/>
                    <Button onClick={removeItemFromInventory}>Remove from Inventory</Button>

                {/* </div> */}
                </Grid>
                <Grid className="inventory-spells-container" item xs={4}>
                {/* <div className="inventory-spells-container"> */}
                    <h3>Spells/Cantrips <Link to={`/current-character/available-spells/${character.id}`}><Button>Manage spells</Button></Link><br></br></h3>
                    <ul>
                        {preparedSpells.map(spells => <SpellListItem key={spells.id} spell={spells}/>)}
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