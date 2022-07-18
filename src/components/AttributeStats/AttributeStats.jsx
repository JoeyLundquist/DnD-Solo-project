import { useSelector } from "react-redux"
import { useState } from "react"
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

import './attributeStats.css'

const AttributeStats = () => {
    const character = useSelector(store => store.characterReducer)

    const [editMode, setEditMode] = useState(false)

    const abilityCheckBonus = (attr) => {
        switch(attr){
            case 3:
                return '-4'
            case 4:
            case 5:
                return '-3'
            case 6:
            case 7:
                return '-2' 
            case 8:
            case 9:
                return '-1'
            case 10:
            case 11:
                return '0'
            case 12:
            case 13:
                return '+1'
            case 14:
            case 15:
                return '+2'
            case 16: 
            case 17:
                return '+3'
            case 18:
            case 19:
                return '+4'
            default:
                return '?'
        }
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    return(
        <>
             <div className="attributes-container">
                {/* <div className="edit-buttons">
                    {editMode ? <><Button>Update</Button> <Button onClick={changeEditMode}>Cancel</Button> </>  :<Button onClick={changeEditMode}><EditIcon /></Button>}
                </div> */}
                <div className="attribute-list-item">
                    {editMode ? <p> Strength: {character.strength}</p> : <p>Strength: {character.strength}</p>}
                    <p>Ability Check: {abilityCheckBonus(character.strength)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.strength)}</p>
                </div>
                <div className="attribute-list-item">
                    <p>Dexterity: {character.dexterity}</p>
                    <p>Ability Check: {abilityCheckBonus(character.dexterity)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.dexterity)}</p>
                </div>
                <div className="attribute-list-item">
                    <p>Wisdom: {character.wisdom}</p>
                    <p>Ability Check: {abilityCheckBonus(character.wisdom)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.wisdom)}</p>
                </div>
                <div className="attribute-list-item">
                    <p>Intelligence: {character.intelligence}</p>
                    <p>Ability Check: {abilityCheckBonus(character.intelligence)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.intelligence)}</p>
                </div>
                <div className="attribute-list-item">
                    <p>Charisma: {character.charisma}</p>
                    <p>Ability Check: {abilityCheckBonus(character.charisma)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.charisma)}</p>
                </div>
                <div className="attribute-list-item">
                    <p>Constitution: {character.constitution}</p>
                    <p>Ability Check: {abilityCheckBonus(character.constitution)}</p>
                    <p>Saving Throws: {abilityCheckBonus(character.constitution)}</p>
                </div>
            </div>
       
        </>
    )
}

export default AttributeStats