import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CurrentCharacterPage = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)

    useEffect(() => {
        dispatch({
            type:'FETCH_CURRENT_CHARACTER_INFO'
        })    
    }, [])

    return(
        <>
            <div>
                
            </div>
        </>
    )
}


export default CurrentCharacterPage;