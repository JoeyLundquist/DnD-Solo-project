import { useDispatch, useSelector } from "react-redux"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 150,
}));


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
            <Stack spacing={2} alignItems="flex-start">
                <Item sx={{m:1}} className="item-list-item" key={spell.url}><Button onClick={fetchSpellDetails}>{spell.name}</Button>{editPrepared ? <button onClick={removePreparedSpell}>Un-prepare spell</button> : <></>}</Item>
            </Stack>
        </>
    )
}

export default SpellListItem;