import { useSelector } from "react-redux"

import './attributeStats.css'

const AttributeStats = () => {
    const character = useSelector(store => store.characterReducer)

    return(
        <>
             <div className="attributes-container">
                <div className="attribute-list-item">
                    <p>Strength: {character.strength}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
                <div className="attribute-list-item">
                    <p>Dexterity: {character.dexterity}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
                <div className="attribute-list-item">
                    <p>Wisdom: {character.wisdom}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
                <div className="attribute-list-item">
                    <p>Intelligence: {character.intelligence}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
                <div className="attribute-list-item">
                    <p>Charisma: {character.charisma}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
                <div className="attribute-list-item">
                    <p>Constitution: {character.constitution}</p>
                    <p>Ability Check: +2</p>
                    <p>Saving Throws: +2</p>
                </div>
            </div>
        </>
    )
}

export default AttributeStats