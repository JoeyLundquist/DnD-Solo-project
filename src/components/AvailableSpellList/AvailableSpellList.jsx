import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import SpellListItem from '../SpellListItem/SpellListItem';
import { SpellDetails } from '../SpellDetails/SpellDetails';
import '../ItemSearch/ItemSearch.css'
import './availableSpellList.css'


const AvailableSpellList = () => {
    const dispatch = useDispatch();

    const {id} = useParams();

    const availableSpells = useSelector(store => store.spellsListReducer)
    const spellDetails = useSelector(store => store.spellDetailReducer)
    const preparedSpells = useSelector(store => store.preparedSpellsList)
    const character = useSelector(store => store.characterReducer)
    const characterClassAndLvl = {class: character.class, lvl: character.class_lvl}
    console.log("This is the char info?", character)

    useEffect(() => {
    
        dispatch({
            type:'FETCH_CURRENT_CHARACTER_INFO',
            payload: id
        })
        
            
    }, [id])

    const prepareSpell = () => {
        dispatch({
            type: 'ADD_SPELL_TO_PREPARED_LIST',
            payload: {
                charId: character.id,
                url: spellDetails.url,
                name: spellDetails.name
            }
        })
    }


    return (
        <>
            <h2>Available Spells</h2>
            <Link to={`/current-character/${id}/`} >Character Sheet</Link>
            <div className="spell-list-container">
                <div className="spell-list-inner-container">
                <h2>Available Spells</h2>
                    <ul>
                        {availableSpells.map(spells => <SpellListItem page={'available'} spell={spells}/>)}
                    </ul>
                </div>
                <div className='spell-list-inner-container'>
                    <h2>Prepared spells</h2>
                    <ul>
                        {preparedSpells.map(spells => <SpellListItem page='prepared' spell={spells}/>)}
                    </ul>
                </div>
                <div className="spell-list-inner-container">
                    <h2>Spell Details</h2>
                    <button onClick={prepareSpell}>Prepare Spell</button>
                    <div className='detail-container'>
                        <SpellDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AvailableSpellList;