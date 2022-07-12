import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import './moniesManager.css'

const MoniesManager = () => {
    const dispatch = useDispatch();

    const monies = useSelector(store => store.characterReducer);

    const [editMode, setEditMode] = useState(false)
    const [copper, setCopper] = useState(monies.copper_pieces)
    


    const updateMonies = (e) => {
        dispatch({
            type: 'UPDATE_MONIES',
            payload: {
                charId: monies.id,
                copper,
                silver: monies.silver_pieces,
                electrum: monies.electrum_pieces,
                // gold: monies.silver_pieces,
                platinum: monies.platinum_pieces,
            }
        })
    }


    return(
        <>
            <div className="monies-manager-container">
                <div className="monies-count">
                    Copper:<br></br> 
                    {
                        editMode ? 
                        <>
                            <input type="text" placeholder="..." className="monies-update-input" value={copper} onChange={e => setCopper(e.target.value)} onBlur={() => setEditMode(!editMode)} />
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.copper_pieces} </p>
                     
                    }

                </div>
                <div className="monies-count">
                    Silver: <br></br>{monies.silver_pieces}
                </div>
                <div className="monies-count">
                    Electrum: <br></br>{monies.electrum_pieces}
                </div>
                <div className="monies-count">
                    Gold: <br></br>5
                </div>
                <div className="monies-count">
                    Platinum: <br></br>{monies.platinum_pieces}
                </div>
            </div>
        </>
    )
}

export default MoniesManager;