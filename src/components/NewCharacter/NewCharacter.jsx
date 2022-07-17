import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AttributeDropdown from "../AttributeDropdown/AttributeDropdown";
import ClassLevelDropDown from "../ClassLevelDropDown/ClassLevelDropDown";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import  Select  from "@mui/material/Select";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './NewCharacter.css'


const NewCharacter = () => {
        const dispatch = useDispatch();
    const history = useHistory();
    
    const racesAndClasses = useSelector(store => store.characterReducer)

    const [characterInfo, setCharacterInfo] = useState({
        name: '',
        level: '',
        raceName: '',
        className: '',
        classLevel: 0,
        strength: 0,
        intelligence: 0,
        dexterity: 0,
        wisdom: 0,
        constitution: 0,
        charisma: 0,
        hp: '',
        speed: '',
        ac: ''
    })

    const [strength, setStrength] = useState(0)
    const [dexterity, setDexterity] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [wisdom, setWisdom] = useState(0)
    const [constitution, setConstitution] = useState(0)
    const [charisma, setCharisma] = useState(0)
    const [characterLevel, setCharacterLevel] = useState(0)
    const [character, setCharacter] = useState({
        strength,
        dexterity,
        intelligence,
        wisdom,
        constitution, 
        charisma,
        characterLevel
    })

    useEffect(() => {
        dispatch({
            type:'FETCH_RACES_AND_CLASSES'
        })
    }, [])



    const onSubmit = () => {
        setCharacterInfo({
            ...characterInfo, 
            strength: strength, 
            dexterity: dexterity, 
            intelligence: intelligence, 
            wisdom: wisdom, 
            constitution: constitution, 
            charisma: charisma,
            level: characterLevel
        });
        dispatch({
            type: 'ADD_CHARACTER',
            payload: characterInfo
        })
        history.push('/select-character')
    }
   
   

   




    return(
        <>
            <h2 className="page-label">Character Information</h2>
            <div className="new-character-input-container">
                <div className="inner-character-creation-cards">
                    <TextField 
                        type="text" 
                        label="Name"
                        variant="standard"
                        required
                        value={characterInfo.name}
                        onChange={e => setCharacterInfo({...characterInfo, name: e.target.value})}
                    />
                
                    <br></br>

                    <label>Race</label>
                    <br></br>
                    <Select id='character-race' value={characterInfo.raceName} onChange={e => setCharacterInfo({...characterInfo, raceName: e.target.value})}>
                        {/* <option value="0">...</option> */}
                        {racesAndClasses.races && racesAndClasses.races.map(race => (
                            <MenuItem value={race.index}>{race.name}</MenuItem>
                        ))}
                    </Select><br></br>
                    <label>Class</label><span>-</span><label>Class Level</label><br></br>
                    <Select id="character-class" value={characterInfo.className} onChange={e => setCharacterInfo({...characterInfo, className: e.target.value})}>
                        {/* <option value="0">...</option> */}
                        {racesAndClasses.classes && racesAndClasses.classes.map(classes => (
                            <MenuItem value={classes.index}>{classes.name}</MenuItem>
                        ))}
                    </Select>
                    <Select value={characterInfo.classLevel} onChange={e => setCharacterInfo({...characterInfo, classLevel: e.target.value})}>
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
                    </Select><br></br>
                    <AttributeDropdown attribute="Character Level" setAttribute={setCharacterLevel} />
                </div>
                <div className="inner-character-creation-cards">
                    <AttributeDropdown attribute="Strength" setAttribute={setStrength}/>
                    <AttributeDropdown attribute="Intelligence" setAttribute={setIntelligence}/><br></br>
                    <AttributeDropdown attribute="Dexterity" setAttribute={setDexterity}/>
                    <AttributeDropdown attribute="Wisdom" setAttribute={setWisdom}/><br></br>
                    <AttributeDropdown attribute="Constitution" setAttribute={setConstitution}/>
                    <AttributeDropdown attribute="Charisma" setAttribute={setCharisma}/><br></br>

                    {/* <label>HP</label> */}
                    <TextField required className="hp-input" variant="standard" type="number" label="HP" value={characterInfo.hp} onChange={e => setCharacterInfo({...characterInfo, hp: e.target.value})}/>
                    {/* <label>AC</label> */}
                    <TextField required className="hp-input" type="number" label="AC" variant="standard" value={characterInfo.ac} onChange={e => setCharacterInfo({...characterInfo, ac: e.target.value})}/>
                    {/* <label>Speed</label> */}
                    <TextField required className="speed-input" type="number" label="Speed" variant="standard" value={characterInfo.speed} onChange={e => setCharacterInfo({...characterInfo, 
                        speed: e.target.value, 
                        strength: strength, 
                        dexterity: dexterity, 
                        intelligence: intelligence, 
                        wisdom: wisdom, 
                        constitution: constitution, 
                        charisma: charisma,
                        level: characterLevel
                    })}
                    />
                </div>
                <Button variant="outlined" onClick={() => onSubmit()}>Create</Button>
            </div>
        </>
    )
}

export default NewCharacter;