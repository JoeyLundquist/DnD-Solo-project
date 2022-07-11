import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const SelectCharacter = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const characterList = useSelector(store => store.characterList)
    const character = useSelector(store => store.characterReducer)
    console.log(characterList)

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'FETCH_CHARACTER_LIST'
            })
        }, 500)
    }, [])
    

    return(
        <>
            <div className="select-character-list">
                {characterList[0] && characterList.map(c => (
                <p 
                key={c.id}
                onClick={() => {
                    dispatch({
                        type:'FETCH_CURRENT_CHARACTER_INFO',
                        payload: c.id,
                    })
                    setTimeout(() => {
                        dispatch({
                            type:'FETCH_INVENTORY_ITEMS',
                            payload: character.id
                        })
                        history.push('/current-character')
                    }, 500)
                }} 
                id={c.id}
                >
                    {c.name}
                </p>))}
            </div>
        </>
    )
}