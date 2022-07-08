import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchSearchResults(action) {
    try{
        const res = yield axios.get(`/api/items/search/${action.payload}`)
        yield put({
            type: 'SET_SEARCH_RESULTS',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to get search results', err)
    }
}

function* fetchItemDetails(action) {
    console.log('action payload', action.payload)
    try{
        const res = yield axios.post(`/api/items/details`, action.payload)
        yield put({
            type: 'SET_ITEM_DETAILS',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to GET item details', err)
    }
}

function* addItemToInventory(action) {
    try{
        yield axios.post('/api/items', action.payload)
    }
    catch(err) {
        console.log('Failed to add to inv', err)
    }
}


function* itemsSaga() {
    yield takeLatest('FETCH_SEARCH_RESULTS', fetchSearchResults);
    yield takeLatest('FETCH_ITEM_DETAILS', fetchItemDetails);
    yield takeLatest('ADD_ITEM_TO_INV', addItemToInventory)
}

export default itemsSaga;