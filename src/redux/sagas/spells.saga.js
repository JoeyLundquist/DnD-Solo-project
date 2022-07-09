import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchAvailableSpells(action) {
    try{
        const res = yield axios.get('')
    }
    catch(err){
        console.log('Failed to get available spells', err)
    }
}

function* spellsSaga() {
    yield takeLatest('FETCH_AVAILABLE_SPELLS', fetchAvailableSpells)
}

export default spellsSaga;