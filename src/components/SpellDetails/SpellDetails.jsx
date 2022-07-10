import { useSelector } from "react-redux"

export const SpellDetails = () => {
    const spell = useSelector(store => store.spellDetailReducer)
    console.log(spell)

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
            {/* {spell.damage && <p>{Object.entries(spell.damage.damage_at_slot_level).forEach(([key, value] => {`${key}: ${value}`))</p>} */}
            {spell.damage && <p>Damage Type:{spell.damage.damage_type.name}</p>}
            {spell.school && <p>Spell School: {spell.school.name}</p>}
        </>
    )
}