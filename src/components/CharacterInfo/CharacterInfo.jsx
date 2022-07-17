import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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
            <div>
                
            </div>
            <div className="character-info-container">
                <div>
                    <h2 className="char-name">{character.name}</h2>
                    {editMode ? <><Button onClick={changeEditMode}>Cancel</Button> </>  :<Button onClick={changeEditMode}><EditIcon /></Button>}
                </div>
                {/* <p>Level: {character.level}</p> */}
                <p>Race: {character.race}</p>
                {editMode ? <span>Class:<br></br> {character.class} <ClassLevelDropDown /><CheckIcon onClick={updateCharacterInfo}/><CloseIcon onClick={changeEditMode}/></span> : <p>Class: {character.class} <span> lvl:{character.class_lvl}<EditIcon onClick={changeEditMode} fontSize="5px"/></span></p>}
                <p>Speed: {character.speed}</p>
                <p>HP: {character.max_hp}/{character.current_hp}</p>
                <p>AC: {character.ac}</p>
            </div>
        </>
    )
}

export default CharacterInfo;