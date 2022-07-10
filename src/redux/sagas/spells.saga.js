import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchAvailableSpells(action) {
    console.log('action payload', action.payload)
    try{
        const res = yield axios.get(`/api/spells/${action.payload.class}/${action.payload.lvl}`)
        yield put({
            type: 'SET_AVAILABLE_SPELL_LIST',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to get available spells', err)
    }
}

function* fetchSpellDetails(action) {
    console.log(action.payload)
    try{
        const res = yield axios.post('/api/spells/spell-details', action.payload)
        yield put({
            type: 'SET_SPELL_DETAILS',
            payload: res.data
        })
    }
    catch(err){
        console.log('Failed to get spell info', err)
    }
}

function* spellsSaga() {
    yield takeLatest('FETCH_AVAILABLE_SPELLS', fetchAvailableSpells)
    yield takeLatest('FETCH_SPELL_DETAILS', fetchSpellDetails)
}

export default spellsSaga;