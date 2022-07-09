import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const SelectCharacter = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const characterList = useSelector(store => store.characterReducer)
    console.log(characterList)

    useEffect(() => {
        dispatch({
            type: 'FETCH_CHARACTER_LIST'
        })
    }, [])
    

    return(
        <>
            <div className="select-character-list">
                {characterList[0] && characterList.map(c => (
                <p 
                onClick={() => {
                    dispatch({
                        type:'FETCH_CURRENT_CHARACTER_INFO',
                        payload: c.id
                    })
                    history.push('/')
                }} 
                id={c.id}
                >
                    {c.name}
                </p>))}
            </div>
        </>
    )
}