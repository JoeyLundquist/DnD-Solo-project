import { useDispatch } from 'react-redux';

import '../ItemSearch/ItemSearch.css'

const AvailableSpellList = () => {
    const dispatch = useDispatch();


    return (
        <>
            <h2>Available Spells</h2>
            <div className="spell-list-container">
                <div className="spell-list-inner-container">

                </div>
                <div className="spell-list-inner-container">

                </div>
            </div>
        </>
    )
}

export default AvailableSpellList;