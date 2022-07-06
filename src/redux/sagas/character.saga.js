import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";


function* fetchRacesAndClasses() {
    try{
        const res = yield axios.get('/api/character/create-char')
        yield put({
            type: 'SET_RACES_AND_CLASSES',
            payload: res.data
        })
    }
    catch(err){
        console.error('Failed to fetch races and classes', err)
    }
}



function* characterSaga(action) {
    yield takeLatest('FETCH_RACES_AND_CLASSES', fetchRacesAndClasses)
}

export default characterSaga;