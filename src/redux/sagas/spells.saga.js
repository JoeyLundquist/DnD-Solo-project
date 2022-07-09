import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchAvailableSpells(action) {
    console.log('action payload', action.payload)
    try{
        const res = yield axios.get(`/api/spells/${action.payload.class}/${action.payload.lvl}`)
    }
    catch(err){
        console.log('Failed to get available spells', err)
    }
}

function* spellsSaga() {
    yield takeLatest('FETCH_AVAILABLE_SPELLS', fetchAvailableSpells)
}

export default spellsSaga;