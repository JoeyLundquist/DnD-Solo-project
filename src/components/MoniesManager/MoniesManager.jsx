import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';


import './moniesManager.css'

const MoniesManager = () => {
    const dispatch = useDispatch();

    const monies = useSelector(store => store.characterReducer);

    const [editMode, setEditMode] = useState(false)


    const updateMonies = (e) => {
        e.preventDefault();
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
                        </>
                        :
                        <p onClick={() => setEditMode(!editMode)}>{monies.platinum_pieces} </p>
                     
                    }
                </div>
               {editMode?  <div className="monies-count">
                    <Button onClick={updateMonies}>Update</Button>
                    <Button onClick={() => {
                        setEditMode(!editMode)
                        dispatch({
                            type: 'FETCH_CURRENT_CHARACTER_INFO',
                            payload: monies.id
                        })
                        }}
                    >
                        Cancel
                    </Button>
                </div>
                :
                <EditIcon onClick={() => setEditMode(!editMode)}/>
            }
            </div>
        </>
    )
}

export default MoniesManager;