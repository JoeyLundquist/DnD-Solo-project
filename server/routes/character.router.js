const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')


router.get('/create-char', (req, res) => {
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


router.post('/create-char', (req, res) => {
  const sqlQuery = `
    INSERT INTO characters
    (user_id, name, level, race, class, class_lvl, hp, ac, speed, strength, dexterity, constitution, intelligence, wisdom, charisma)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
  `
  const sqlParams = [
    req.user.id,
    req.body.name,
    req.body.level,
    req.body.raceName,
    req.body.className,
    req.body.classLevel,
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

module.exports = router;
