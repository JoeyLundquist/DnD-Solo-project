import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

import ClassLevelDropDown from "../ClassLevelDropDown/ClassLevelDropDown";

import './characterInfo.css'

const CharacterInfo = () => {
    const dispatch = useDispatch();

    const character = useSelector(store => store.characterReducer)
    const [editMode, setEditMode] = useState(false)

    const changeEditMode = () => {
        setEditMode(!editMode)
        dispatch({
            type: 'FETCH_CURRENT_CHARACTER_INFO',
            payload: character.id
        })
    }

    const updateCharacterInfo = () => {
        dispatch({
            type: 'UPDATE_CHARACTER_INFO',
            payload: character
        })
        setEditMode(!editMode)
    }


    return(
        <>
            <div className="character-info-container">
                <div className="name-and-race-container">
                    <h2 className="char-name">{character.name} <br></br> {character.race}</h2>
                    {/* <p>Race: {character.race}</p> */}
                </div>
                {/* <p>Level: {character.level}</p> */}
                {editMode ? <span>Class:<br></br> {character.class} <ClassLevelDropDown /></span> : <p>Class: {character.class} <span> lvl:{character.class_lvl}<EditIcon onClick={changeEditMode} fontSize="5px"/></span></p>}
                <p>Speed: {character.speed}</p>
                {editMode ? <><p className="edit-hp-input">Max: <TextField className="hp-edit-input" onChange={(e) => dispatch({type: 'UPDATE_MAX_HP', payload: e.target.value})} value={character.max_hp}/>Current: <TextField className="hp-edit-input" type="number" onChange={(e) => dispatch({type: 'UPDATE_CURRENT_HP', payload: e.target.value})} value={character.current_hp}/></p></> :<p>HP: <EditIcon onClick={changeEditMode}/>{character.current_hp}/{character.max_hp}</p>}
                <p>AC: {character.ac}</p>
            </div>
            <div className="edit-buttons-container">
            {editMode ? <><Button onClick={updateCharacterInfo}>Update</Button><Button onClick={changeEditMode}>Cancel</Button> </>  :<Button onClick={changeEditMode}><EditIcon /></Button>}
            </div>
        </>

    )
}

export default CharacterInfo;