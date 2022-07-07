import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import './ItemSearch.css'
import ItemSearchListItem from '../ItemSearchListItem/ItemSearchListItem';

const ItemSearch = () => {
    const dispatch = useDispatch();
    const items = useSelector(store => store.itemSearchReducer)

    const [searchParams, setSearchParams] = useState('');

    const onSearch = (e) => {
        e.preventDefault();
        dispatch({
            type: 'FETCH_SEARCH_RESULTS',
            payload: searchParams
        })
        setSearchParams('')
    }

    return(
        <>
            <div className="container">
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
                               <ItemSearchListItem item={item}/>
                            ))}
                        </ul>
                    </div>
                    <div className="results-inner-container">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemSearch;