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

router.post('/details/', rejectUnauthenticated, (req, res) =>{
    console.log(req.body.url)
    axios.get(`https://www.dnd5eapi.co${req.body.url}`)
        .then(apiRes => {
            res.send(apiRes.data)
        })
        .catch(err => {
            res.sendStatus(500)
            console.log('Failed to GET item details', err)
        })
})

//Routes to fetch items in inventory
router.get('/inventory/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT *
        FROM characters_items
        WHERE character_id = $1
    `
    pool.query(sqlQuery, [req.params.id])
        .then(dbRes => res.send(dbRes.rows))
        .catch(err => {
            res.sendStatus(500)
            console.log('Failed to get inventory', err)
        })
})


router.post('/', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        INSERT INTO characters_items
        (character_id, name, url)
        VALUES ($1, $2, $3)
    `
    const sqlParams = [
        req.body.charId,
        req.body.name,
        req.body.url
    ]
    if(!req.body.name){
        console.log('No item selected')
        return
    }
    
    pool.query(sqlQuery, sqlParams)
        .then(dbRes => {
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('Failed to POST item to inv', err)
        })

});

router.delete('/remove/inventory/:charId/:name', rejectUnauthenticated, (req, res) => {
    let itemId;
    const sqlQuery = `
        SELECT * 
        FROM characters_items
        WHERE character_id = $1
        AND name = $2
        LIMIT 1
    `
    console.log('reqbody', req.body)
    pool.query(sqlQuery, [req.params.charId, req.params.name])
        .then(dbRes => {
            console.log(dbRes.rows)
            const sqlQuery = `
                DELETE FROM characters_items
                WHERE id = $1
                RETURNING *
            `
            pool.query(sqlQuery, [dbRes.rows[0].id])
                .then(dbRes1 => {
                    if(dbRes1.rows.length === 0){
                        res.sendStatus(404)
                    }
                    res.sendStatus(200)
                })
                .catch(err => {
                    console.log('failed to delete item insdie of nested pool', err)
                    res.sendStatus(500)
                })
        })
        .catch(err => {
            console.log('failed to delete items', err)
            res.sendStatus(500)
        })
})

module.exports = router;
