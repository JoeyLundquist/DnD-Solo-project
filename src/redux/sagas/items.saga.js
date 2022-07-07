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
    console.log('actionpayload', action.payload)
    try{
        const res = yield axios.get('/api/items/details/', action.payload)
        yield put({
            type: 'SET_ITEM_DETAILS',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to GET item details', err)
    }
}


function* itemsSaga() {
    yield takeLatest('FETCH_SEARCH_RESULTS', fetchSearchResults)
    yield takeLatest('FETCH_ITEM_DETAILS', fetchItemDetails)
}

export default itemsSaga;