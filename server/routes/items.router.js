const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/search/:value', rejectUnauthenticated, (req, res) => {
    let itemsArray = [];
    axios.get(`https://www.dnd5eapi.co/api/magic-items/?name=${req.params.value}`)
    .then(response => {
        let arr = response.data
        console.log('this is list', arr)
            arr.results.map(i => itemsArray.push(i))
        axios.get(`https://www.dnd5eapi.co/api/equipment/?name=${req.params.value}`)
            .then(results => {
                console.log('this is results.data',results.data)
                results.data.results.map(item => itemsArray.push(item))
                console.log('This is item array',itemsArray)
                res.send(itemsArray)
            })
            .catch(err => console.error('Failed second axios', err))
        
    })
    .catch(error => console.log('Failed to get list', error))
});

router.get('/details/', rejectUnauthenticated, (req, res) =>{
    axios.get(`https://www.dnd5eapi.co${req.body.item}`)
        .then(apiRes => {
            res.send(apiRes.data)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log('Failed to GET item details', err)
        })
})


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
