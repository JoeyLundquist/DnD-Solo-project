import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 175,
}));

export const SelectCharacter = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const characterList = useSelector(store => store.characterList)

    console.log(characterList)

    useEffect(() => {
            dispatch({
                type: 'FETCH_CHARACTER_LIST'
            })
    }, [])
    

    return(
        <>
            <div className="select-character-list">
                <Stack spacing={5} alignItems="flex-start" >
                {characterList[0] && characterList.map(c => (
                <Item 
                key={c.id}
                onClick={() => {
                        dispatch({
                            type:'FETCH_CURRENT_CHARACTER_INFO',
                            payload: c.id,
                        })
                  
                    history.push(`/current-character/${c.id}/`)}} 

                id={c.id}
                >
                    <Button>{c.name}</Button>
                </Item>))}
                </Stack>
            </div>
        </>
    )
}