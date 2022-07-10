import { useSelector } from "react-redux"

export const SpellDetails = () => {
    const spell = useSelector(store => store.spellDetailReducer)
    console.log(spell)
    let spellDamageDiceByLvl;
    let healDiceByLvl;
    if(spell.damage){
    spellDamageDiceByLvl = Object.values(spell.damage.damage_at_slot_level)
    }
    else if(spell.heal_at_slot_level){
        healDiceByLvl = Object.values(spell.heal_at_slot_level)
    }
    
    return( 
        <>
            <h4>{spell.name}</h4>
            {spell.desc && <p>Description: <br></br>{spell.desc.map(d => d)}</p>}
            {spell.range && <p>Range: {spell.range}</p>}
            {spell.components && <p>Components: {spell.components && spell.components.map(c => c)}</p>}
            {spell.material && <p>Material: {spell.material}</p>}
            {spell.ritual && <p>Ritual: {String(spell.ritual)}</p>}
            {spell.duration && <p>Duration: {spell.duration}</p>}
            {spell.concentration && <p>Concentration: {String(spell.concentration)}</p>}
            {spell.casting_time && <p>Casting Time: {spell.casting_time}</p>}
            {spell.level && <p>Spell Level: {spell.level}</p>}
            {spell.attack_type && <p>Spell Attack Type: {spell.attack_type}</p>}
            {spellDamageDiceByLvl && <p>Damage Dice:</p>}
            {spellDamageDiceByLvl && spellDamageDiceByLvl.map((d, i) => <p>{i + spell.level}: {d}</p>)}
            {healDiceByLvl && <p>Heal Dice: </p>}
            {healDiceByLvl && healDiceByLvl.map((dice, i )=> <p>{i + spell.level}: {dice}</p>)}
            {spell.damage && <p>Damage Type:{spell.damage.damage_type.name}</p>}
            {spell.school && <p>Spell School: {spell.school.name}</p>}
        </>
    )
}