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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
