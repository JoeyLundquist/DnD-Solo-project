import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import '../ItemSearch/ItemSearch.css'

const AvailableSpellList = () => {
    const dispatch = useDispatch();

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

                </div>
                <div className="spell-list-inner-container">

                </div>
            </div>
        </>
    )
}

export default AvailableSpellList;