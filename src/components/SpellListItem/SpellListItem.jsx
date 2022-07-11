import { useDispatch, useSelector } from "react-redux"

const SpellListItem = ({spell, page}) => {
    const dispatch = useDispatch();

    const character = useSelector(store => store.characterReducer)

    const fetchSpellDetails = () => {
        dispatch({
            type: 'FETCH_SPELL_DETAILS',
            payload: {url: spell.url}
        })
    }

    let editPrepared;
    if(page === 'prepared'){
        editPrepared = true
    }

    const removePreparedSpell = () => {
        dispatch({
            type: 'REMOVE_PREPARED_SPELL',
            payload: {
                id: spell.id,
                charId: character.id

            }
        })
    }
   


    return( 
        <>
            <li key={spell.url}><p onClick={fetchSpellDetails}>{spell.name}</p></li>{editPrepared ? <button onClick={removePreparedSpell}>Un-prepare spell</button> : <></>}
        </>
    )
}

export default SpellListItem;