import { useSelector, useDispatch } from "react-redux";

import  Select  from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

import './classLevelDropDown.css'

const ClassLevelDropDown = () => {
    const character = useSelector(store => store.characterReducer)
    const dispatch = useDispatch();
    console.log('In class dropdown logging character', character)


    return(
        <Select className="class-lvl-select" value={character.class_lvl} onChange={e => dispatch({type: 'UPDATE_CLASS_LVL', payload: e.target.value})}>
            <MenuItem value="0">...</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
        </Select>
    )
}

export default ClassLevelDropDown;