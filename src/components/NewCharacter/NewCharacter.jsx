import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const NewCharacter = () => {
    const dispatch = useDispatch();
    
    const racesAndClasses = useSelector(store => store.characterReducer)
    console.log(racesAndClasses)

    useEffect(() => {
        dispatch({
            type:'FETCH_RACES_AND_CLASSES'
        })
    }, [])

    return(
        <>
            <h2>Character Information</h2>
            <div className="new-character-input-container">
                <input 
                    type="text" 
                    placeholder="Name"
                /><br></br>
                <select>
                    <option value="0">...</option>
                    <option value="Human">Human</option>
                    <option value="2">Dwarf</option>
                    <option value="3">Dragonborn</option>
                    <option value="4">Elf</option>
                    <option value="4">Gnome</option>
                    <option value="4">Half-Elf</option>
                    <option value="4">Half-orc</option>
                    <option value="4">Halfling</option>
                    <option value="4">Tiefling</option>
                </select>
            </div>
        </>
    )
}

export default NewCharacter;