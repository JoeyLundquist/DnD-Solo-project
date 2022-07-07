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

function* addCharacter(action) {
    try{
        const res = yield axios.post('/api/character/create-char', action.payload)
    }
    catch(err) {
        console.log('Failed to post', err)
    }
}

function* fetchCurrentCharacterInfo() {
    try{
        const res = yield axios.get('/api/character/')
        yield put({
            type: 'SET_CHARACTER_INFO',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to GET current character info', err)
    }
}



function* characterSaga(action) {
    yield takeLatest('FETCH_RACES_AND_CLASSES', fetchRacesAndClasses);
    yield takeLatest('ADD_CHARACTER', addCharacter);
    yield takeLatest('FETCH_CURRENT_CHARACTER_INFO', fetchCurrentCharacterInfo)
}

export default characterSaga;