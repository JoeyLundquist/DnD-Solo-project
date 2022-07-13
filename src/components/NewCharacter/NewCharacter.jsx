import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AttributeDropdown from "../AttributeDropdown/AttributeDropdown";

import './NewCharacter.css'


const NewCharacter = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const racesAndClasses = useSelector(store => store.characterReducer)

    // const [characterInfo, setCharacterInfo] = useState({
    //     name: '',
    //     level: '',
    //     raceName: '',
    //     className: '',
    //     classLevel: 0,
    //     strength: 0,
    //     intelligence: 0,
    //     dexterity: 0,
    //     wisdom: 0,
    //     constitution: 0,
    //     charisma: 0,
    //     hp: '',
    //     speed: '',
    //     ac: ''
    // })

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
        // setTimeout(() => {
            dispatch({
                    type: 'ADD_CHARACTER',
                    payload: character
                })
                history.push('/select-character')
        // }, 500)
   
    }   

   




    return(
        <>
            <h2 className="page-label">Character Information</h2>
            <div className="new-character-input-container">
                <div className="inner-character-creation-cards">
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={characterInfo.name}
                        onChange={e => setCharacterInfo({...characterInfo, name: e.target.value})}
                    />
                
                    <br></br>

                    <label>Race</label>
                    <br></br>
                    <select id='character-race' value={characterInfo.raceName} onChange={e => setCharacterInfo({...characterInfo, raceName: e.target.value})}>
                        <option value="0">...</option>
                        {racesAndClasses.races && racesAndClasses.races.map(race => (
                            <option value={race.index}>{race.name}</option>
                        ))}
                    </select><br></br>
                    <label>Class</label><span>-</span><label>Class Level</label><br></br>
                    <select id="character-class" value={characterInfo.className} onChange={e => setCharacterInfo({...characterInfo, className: e.target.value})}>
                        <option value="0">...</option>
                        {racesAndClasses.classes && racesAndClasses.classes.map(classes => (
                            <option value={classes.index}>{classes.name}</option>
                        ))}
                    </select>
                    <select value={characterInfo.classLevel} onChange={e => setCharacterInfo({...characterInfo, classLevel: e.target.value})}>
                        <option>...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select><br></br>
                    <AttributeDropdown attribute="Character Level" setAttribute={setCharacterLevel} />
                </div>
                <div className="inner-character-creation-cards">
                    <AttributeDropdown attribute="Strength" setAttribute={setStrength}/>
                    <AttributeDropdown attribute="Intelligence" setAttribute={setIntelligence}/><br></br>
                    <AttributeDropdown attribute="Dexterity" setAttribute={setDexterity}/>
                    <AttributeDropdown attribute="Wisdom" setAttribute={setWisdom}/><br></br>
                    <AttributeDropdown attribute="Constitution" setAttribute={setConstitution}/>
                    <AttributeDropdown attribute="Charisma" setAttribute={setCharisma}/><br></br>

                    <label>HP</label>
                    <input className="hp-input" type="number" placeholder="HP" value={characterInfo.hp} onChange={e => setCharacterInfo({...characterInfo, hp: e.target.value})}/>
                    <label>AC</label>
                    <input className="hp-input" type="number" placeholder="AC" value={characterInfo.ac} onChange={e => setCharacterInfo({...characterInfo, ac: e.target.value})}/><br></br>
                    <label>Speed</label>
                    <input className="hp-input" type="number" placeholder="Speed" value={characterInfo.speed} onChange={e => setCharacterInfo({...characterInfo, 
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
                <button onClick={() => onSubmit()}>Check me!!</button>
            </div>
        </>
    )
}

export default NewCharacter;