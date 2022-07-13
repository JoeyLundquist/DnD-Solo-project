import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import './moniesManager.css'

const MoniesManager = () => {
    const dispatch = useDispatch();

    const monies = useSelector(store => store.characterReducer);

    const [editMode, setEditMode] = useState(false)
    const [copper, setCopper] = useState(monies.copper_pieces)
    const [silver, setSilver] = useState(monies.silver_pieces)
    const [electrum, setElectrum] = useState(monies.electrum_pieces)
    const [gold, setGold] = useState(monies.gold_pieces)
    const [platinum, setPlatinum] = useState(monies.platinum_pieces)
    


    const updateMonies = (e) => {
        dispatch({
            type: 'UPDATE_MONIES',
            payload: {
                charId: monies.id,
                copper: monies.copper_pieces,
                silver: monies.silver_pieces,
                electrum: monies.electrum_pieces,
                gold: monies.gold_pieces,
                platinum: monies.platinum_pieces
            }
        })
        setEditMode(!editMode)
    }


    return(
        <>
            <div className="monies-manager-container">
                <div className="monies-count">
                    Copper:<br></br> 
                    {
                        editMode ? 
                        <>
                            <input
                                type="text" 
                                placeholder="..." 
                                className="monies-update-input" 
                                value={monies.copper_pieces} 
                                onChange={(e) => dispatch({type: 'UPDATE_COPPER_PIECES', payload: e.target.value})}
                            />
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.copper_pieces} </p>
                     
                    }

                </div>
                <div className="monies-count">
                    Silver: <br></br>
                    {
                        editMode ? 
                        <>
                            <input 
                                type="text" 
                                placeholder="..." 
                                className="monies-update-input" 
                                value={monies.silver_pieces} 
                                onChange={(e) => dispatch({type: 'UPDATE_SILVER_PIECES', payload: e.target.value})} 
                            />
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.silver_pieces} </p>
                     
                    }
                </div>
                <div className="monies-count">
                    Electrum: <br></br>
                    {
                        editMode ? 
                        <>
                            <input type="text" 
                            placeholder="..." 
                            className="monies-update-input" 
                            value={monies.electrum_pieces} 
                            onChange={(e) => dispatch({type: 'UPDATE_ELECTRUM_PIECES', payload: e.target.value})}/>
                            
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.electrum_pieces} </p>
                     
                    }
                </div>
                <div className="monies-count">
                    Gold: <br></br>
                    {
                        editMode ? 
                        <>
                            <input 
                            type="text" placeholder="..." 
                            className="monies-update-input" 
                            value={monies.gold_pieces} 
                            onChange={(e) => dispatch({type: 'UPDATE_GOLD_PIECES', payload: e.target.value})}/>
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.gold_pieces} </p>
                     
                    }
                </div>
                <div className="monies-count">
                    Platinum: <br></br>
                    {
                        editMode ? 
                        <>
                            <input type="text" 
                            placeholder="..." 
                            className="monies-update-input" 
                            value={monies.platinum_pieces} 
                            onChange={(e) => dispatch({type: 'UPDATE_PLATINUM_PIECES', payload: e.target.value})}/>
                            <button onClick={updateMonies}>Submit</button>
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.platinum_pieces} </p>
                     
                    }
                </div>
            </div>
        </>
    )
}

export default MoniesManager;