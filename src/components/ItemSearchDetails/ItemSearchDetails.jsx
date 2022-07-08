import { useSelector } from "react-redux";


const ItemSearchDetails = () => {
    const itemDetail = useSelector(store => store.itemDetailReducer)

    return(
        <>
            <h2>{itemDetail && itemDetail.name}</h2>
            {itemDetail.cost && <p>Cost: {itemDetail.cost.quantity}<span>{itemDetail.cost.unit}</span></p>}
            {itemDetail.desc && itemDetail.desc.map(i => <p>{i}</p>)}
            {itemDetail.range && <p>Normal Range: {itemDetail.range.normal}ft.</p>}
            {itemDetail.range && <p>Long Range: {itemDetail.range.long}ft.</p>}
            {itemDetail.damage && <p>Damage Dice: {itemDetail.damage.damage_dice}</p>}
            {itemDetail.damage && <p>Damage Type: {itemDetail.damage.damage_type.name}</p>}
            {itemDetail.two_handed_damage && <p>Two Handed Damage: {itemDetail.two_handed_damage.damage_dice}</p>}
            {itemDetail.two_handed_damage && <p>Two Handed Damage: {itemDetail.two_handed_damage.damage_type.name}</p>}
            {itemDetail.properties && itemDetail.properties.map(p => <p>Properties: {p.name}</p>)}
            {itemDetail.contents && itemDetail.contents.map(c => <p>{c}</p>)}
            {itemDetail.weight && <p>Weight: {itemDetail.weight}</p>}
            {itemDetail.armor_category && <p>Armor Category: {itemDetail.armor_category}</p>}
            {itemDetail.armor_class && <p>Armor class base: {itemDetail.armor_class.base}</p>}
            {itemDetail.armor_class && <p>Armor class Dex Bonus: {String(itemDetail.armor_class.dex_bonus)}</p>}
        </>
    )
}

export default ItemSearchDetails;