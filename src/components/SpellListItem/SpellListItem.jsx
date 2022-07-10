import { useDispatch } from "react-redux"

const SpellListItem = ({spell}) => {
    const dispatch = useDispatch();

    const fetchSpellDetails = () => {
        dispatch({
            type: 'FETCH_SPELL_DETAILS',
            payload: {url: spell.url}
        })
    }


    return( 
        <>
            <li key={spell.url}><p onClick={fetchSpellDetails}>{spell.name}</p></li>
        </>
    )
}

export default SpellListItem;