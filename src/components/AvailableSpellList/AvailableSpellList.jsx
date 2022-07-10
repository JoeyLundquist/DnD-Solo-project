import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import SpellListItem from '../SpellListItem/SpellListItem';
import '../ItemSearch/ItemSearch.css'

const AvailableSpellList = () => {
    const dispatch = useDispatch();

    const availableSpells = useSelector(store => store.spellsListReducer)
    const character = useSelector(store => store.characterReducer)
    const characterClassAndLvl = {class: character.class, lvl: character.class_lvl}
    console.log("This is the char info?", character)

    useEffect(() => {
        dispatch({
            type:'FETCH_AVAILABLE_SPELLS',
            payload: characterClassAndLvl
        })
    }, [])



    return (
        <>
            <h2>Available Spells</h2>
            <div className="spell-list-container">
                <div className="spell-list-inner-container">
                <h2>Available Spells</h2>
                    <ul>
                        {availableSpells.map(spells => <SpellListItem spell={spells}/>)}
                    </ul>
                </div>
                <div className="spell-list-inner-container">
                    <h2>Spell Details</h2>

                </div>
            </div>
        </>
    )
}

export default AvailableSpellList;