import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import './ItemSearch.css'
import ItemsListItem from '../ItemsListItem/ItemsListItem';
import ItemsDetails from '../ItemsDetails/ItemsDetails';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import MoniesManager from '../MoniesManager/MoniesManager';

const ItemSearch = () => {
    const dispatch = useDispatch();
    const character = useSelector(store => store.characterReducer)
    const items = useSelector(store => store.itemSearchReducer)
    const itemDetail = useSelector(store => store.itemDetailReducer)

    const [searchParams, setSearchParams] = useState('');

    useEffect(() => {
        dispatch({
            type: 'CLEAR_ITEM_DETAILS'
        })
    }, [])

    const onSearch = (e) => {
        e.preventDefault();
        dispatch({
            type: 'FETCH_SEARCH_RESULTS',
            payload: searchParams
        })
        setSearchParams('')
    }
    const addItemToInventory = () => {
        dispatch({
            type: 'ADD_ITEM_TO_INV',
            payload: {
                name: itemDetail.name,
                url: itemDetail.url,
                charId: character.id
            }
        })
    }

    return(
        <>
            <div className="container">
                <CharacterInfo />
                <MoniesManager />
                <div className='character-sheet-link'>
                <Link to={`/current-character/${character.id}/`}><Button>Character sheet</Button></Link>
                </div>
                <div className="search-input-container">
                    <form onSubmit={onSearch}>
                        <TextField type="text" label="Item" value={searchParams} onChange={e => setSearchParams(e.target.value)} />
                        <Button onClick={onSearch}>Search</Button>
                    </form>
                </div>
                <div className="results-container">
                    <div className="results-inner-container">
                        <h2>Results</h2>
                        <ul>
                            {items && items.map(item => (
                               <ItemsListItem item={item}/>
                            ))}
                        </ul>
                    </div>
                    <div className="results-inner-container">
                        <h2>Details</h2>
                        <ItemsDetails page={'search'}/>
                        { itemDetail.name ?
                            <div>
                                <Button variant='outlined' onClick={addItemToInventory}>Add Item</Button>
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemSearch;