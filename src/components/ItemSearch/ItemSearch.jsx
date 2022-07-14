import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './ItemSearch.css'
import ItemsListItem from '../ItemsListItem/ItemsListItem';
import ItemsDetails from '../ItemsDetails/ItemsDetails';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

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
                <Link to={`/current-character/${character.id}/`}>Character sheet</Link>
                <div className="search-input-container">
                    <form onSubmit={onSearch}>
                        <input type="text" placeholder="Item" value={searchParams} onChange={e => setSearchParams(e.target.value)} />
                        <button onClick={onSearch}>Search</button>
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
                                <button onClick={addItemToInventory}>Add Item</button>
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