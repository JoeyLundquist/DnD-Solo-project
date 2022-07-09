const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:class/:lvl', rejectUnauthenticated, async (req, res) => {
    const charClass = req.params.class
    const charLvl = req.params.lvl
    let availableSpells = [];
    try{
    for(let i = 1; i<=charLvl; i++){
        await axios.get(`https://www.dnd5eapi.co/api/classes/${charClass}/levels/${i}/spells`)
            .then(apiRes => {
                console.log('spells api res', apiRes.data)
                apiRes.data.results.map(spell => availableSpells.push(spell))
            })
            .catch(err => {
                console.log('Failed to get spells from API', err)
                res.sendStatus(500)
            })
    }
    console.log('Available spells',availableSpells)
    res.send(availableSpells)
    }
    catch{
        res.sendStatus(500)
    }
})



module.exports = router;