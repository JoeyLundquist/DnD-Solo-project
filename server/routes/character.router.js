const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

let currentCharacter;


router.get('/create-char', rejectUnauthenticated, (req, res) => {
  let racesAndClasses = {
    races: [],
    classes: []
  };
  axios.get('https://www.dnd5eapi.co/api/races')
    .then(response => {
      racesAndClasses.races = response.data.results
      axios.get('https://www.dnd5eapi.co/api/classes')
        .then(responseTwo => {
          racesAndClasses.classes = responseTwo.data.results
          res.send(racesAndClasses)
        })
        .catch(err => {
          console.log('Failed to get classes from API', err)
          res.sendStatus(500)
        })
    })
    .catch(err => {
      console.log('failed to get info from api', err)
      res.sendStatus(500)
    })

});

//GET ROUTE to collect current character info
router.get('/select-character/:id', rejectUnauthenticated, (req, res) => {
  if(req.params.id){
    currentCharacter = req.params.id
  }
  

  const sqlQuery = `
    SELECT *
    FROM characters
    WHERE id = $1
    AND user_id = $2
  `

  pool.query(sqlQuery, [currentCharacter, req.user.id])
    .then(dbRes => {
      if(dbRes.rows.length === 0){
        res.sendStatus(404);
      }
      else{
        const character = dbRes.rows[0];
        res.send(character)
      }
    })
    .catch(err => {
      res.sendStatus(500)
      console.log('Failed to get', err)
    })
})


router.post('/create-char', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    INSERT INTO characters
    (user_id, name, level, race, class, class_lvl, max_hp, current_hp, ac, speed, strength, dexterity, constitution, intelligence, wisdom, charisma)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
  `
  const sqlParams = [
    req.user.id,
    req.body.name,
    req.body.level,
    req.body.raceName,
    req.body.className,
    req.body.classLevel,
    req.body.hp,
    req.body.hp,
    req.body.ac,
    req.body.speed,
    req.body.strength,
    req.body.dexterity,
    req.body.constitution,
    req.body.intelligence,
    req.body.wisdom,
    req.body.charisma
  ]

  pool.query(sqlQuery, sqlParams)
    .then(dbRes => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.error('Failed to POST Character', err)
      res.sendStatus(500);
    })
});

//Route to get the character list for the logged in user

router.get('/character-list', (req, res) => {
  const sqlQuery = `
    SELECT id, name
    FROM characters
    WHERE user_id = $1
  `
  pool.query(sqlQuery, [req.user.id])
    .then(dbRes => {
      res.send(dbRes.rows)
    })
    .catch(err => {
      console.log('failed to get character list', err)
      res.sendStatus(500)
    })
})

router.put(`/monies/:charId`, rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    UPDATE characters
    SET copper_pieces = $1, silver_pieces = $2, electrum_pieces = $3, gold_pieces = $4, platinum_pieces = $5
    WHERE id = $6
  `
  const sqlParams = [
    req.body.copper,
    req.body.silver,
    req.body.electrum,
    req.body.gold,
    req.body.platinum,
    req.params.charId
  ]

  pool.query(sqlQuery, sqlParams)
    .then(dbRes => res.sendStatus(200))
    .catch(err => {
      console.log('Failed to update monies', err)
      res.sendStatus(500) 
    })
})

router.put(`/update/:id`, rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    UPDATE characters
    SET class_lvl = $1, max_hp = $2, current_hp = $3, ac = $4, strength = $5, dexterity = $6, wisdom = $7, intelligence = $8, charisma = $9, constitution = $10
    WHERE id = $11
  `
  const sqlParams = [
    req.body.class_lvl,
    req.body.max_hp,
    req.body.current_hp,
    req.body.ac,
    req.body.strength,
    req.body.dexterity,
    req.body.wisdom,
    req.body.intelligence,
    req.body.charisma,
    req.body.constitution,
    req.params.id
  ]

  pool.query(sqlQuery, sqlParams)
    .then(dbRes => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log('failed to update char', err)
      res.sendStatus(500)
    })
})

module.exports = router;
