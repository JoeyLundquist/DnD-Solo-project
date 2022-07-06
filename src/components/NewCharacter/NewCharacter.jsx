import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import './NewCharacter.css'


const NewCharacter = () => {
    const dispatch = useDispatch();
    
    const racesAndClasses = useSelector(store => store.characterReducer)

    const [raceName, setRaceName] = useState('');
    const [className, setClassName] = useState('');

    useEffect(() => {
        dispatch({
            type:'FETCH_RACES_AND_CLASSES'
        })
    }, [])

    return(
        <>
            <h2 className="page-label">Character Information</h2>
            <div className="new-character-input-container">
                <input 
                    type="text" 
                    placeholder="Name"
                /><br></br>
                <label>Race</label><br></br>
                <select id='character-race' value={raceName} onChange={e => setRaceName(e.target.value)}>
                    <option value="0">...</option>
                    {racesAndClasses.races && racesAndClasses.races.map(race => (
                        <option value={race.index}>{race.name}</option>
                    ))}
                </select><br></br>
                <label>Class</label><br></br>
                <select id="character-class" value={className} onChange={e => setClassName(e.target.value)}>
                    <option value="0">...</option>
                    {racesAndClasses.classes && racesAndClasses.classes.map(classes => (
                        <option value={classes.index}>{classes.name}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default NewCharacter;