import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";


function* fetchAvailableSpells(action) {
    console.log('action payload', action.payload)
    try{
        const res = yield axios.get(`/api/spells/available/${action.payload.class}/${action.payload.lvl}`)
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

function* fetchPreparedSpells(action) {
    try{
        const res = yield axios.get(`/api/spells/prepared/${action.payload}`)
        yield put({
            type: 'SET_PREPARED_SPELLS',
            payload: res.data
        })
    }
    catch(err) {
        console.log('Failed to get prepared spells', err)
    }
}

function* addSpellToPreparedList(action) {
    try{
        const res = yield axios.post('/api/spells/prepared', action.payload)
        yield put({
            type: 'FETCH_PREPARED_SPELLS',
            payload: action.payload.charId
        })
    }
    catch(err){
        console.error('Failed to add prepared spell', err)
    }
}

function* removePreparedSpell(action) {
    try{
        yield axios.delete('/api/spells/remove/prepared/' + action.payload.id)
        yield put({
            type: 'FETCH_PREPARED_SPELLS',
            payload: action.payload.charId
        })
    
    }
    catch(err){
        console.log('Failed to delete prepared spell', err)
    }
}

function* spellsSaga() {
    yield takeLatest('FETCH_AVAILABLE_SPELLS', fetchAvailableSpells)
    yield takeLatest('FETCH_SPELL_DETAILS', fetchSpellDetails)
    yield takeLatest('FETCH_PREPARED_SPELLS', fetchPreparedSpells)
    yield takeLatest('ADD_SPELL_TO_PREPARED_LIST', addSpellToPreparedList)
    yield takeLatest('REMOVE_PREPARED_SPELL', removePreparedSpell)
}

export default spellsSaga;