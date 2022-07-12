const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/available/:class/:lvl', rejectUnauthenticated, async (req, res) => {
    const charClass = req.params.class
    const charLvl = req.params.lvl
    let availableSpells = [];
    try{
        for(let i = 1; i<=charLvl; i++){
            await axios.get(`https://www.dnd5eapi.co/api/classes/${charClass}/levels/${i}/spells`)
                .then(apiRes => {
                    // console.log('spells api res', apiRes.data)
                    apiRes.data.results.map(spell => availableSpells.push(spell))
                })
                .catch(err => {
                    console.log('Failed to get spells from API', err)
                    res.sendStatus(500)
                })
    }
    // console.log('Available spells',availableSpells)
    res.send(availableSpells)
    }
    catch{
        res.sendStatus(500)
    }
})

router.post('/spell-details', rejectUnauthenticated, (req, res) => {
    axios.get('https://www.dnd5eapi.co' + req.body.url)
        .then(apiRes => {
            // console.log('api spell detail results', apiRes.data)
            res.send(apiRes.data)
        })
        .catch(err => {
            console.log('Failed to get spell details', err)
            res.sendStatus(500)
        })
})

router.get('/prepared/:charId', rejectUnauthenticated, (req, res) => {
    console.log('In get prepared spells ', req.params.charId)
    
    const sqlQuery = `
        SELECT *
        FROM characters_spells
        WHERE character_id = $1
    `
    
    pool.query(sqlQuery,[req.params.charId])
        .then(dbRes => res.send(dbRes.rows))
        .catch(err => {
            console.log('Failed to get prepared spells', err)
            res.sendStatus(500)
        })
})

router.post('/prepared', rejectUnauthenticated, (req, res) => {
    const charId = {charId: req.body.charId}
    console.log(req.body)
    console.log('charId',charId)
    const sqlQuery = `
        INSERT INTO characters_spells
        (character_id, url, name)
        VALUES
        ($1, $2, $3)
    `

    pool.query(sqlQuery,[req.body.charId, req.body.url, req.body.name])
        .then(dbRes => res.send(200))
        .catch(err => {
            console.log('Failed to prepare spell', err)
            res.sendStatus(500)
        })
})

router.delete('/remove/prepared/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        DELETE FROM characters_spells
        WHERE id = $1
    `

    pool.query(sqlQuery, [req.params.id])
        .then(dbRes => res.sendStatus(200))
        .catch(err => {
            console.log('failed to remove prepared spell', err)
            res.sendStatus(500)
        })
})



module.exports = router;