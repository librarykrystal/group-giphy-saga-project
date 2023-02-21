const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

// after npm install dotenv:
require('dotenv').config();

router.get('/', (req, res) => {
    console.log('GET ROUTE');
    console.log('REQ.PARAMS:', req.params);
    // axios request to 3rd party API
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params}api_key=${process.env.GIPHY_API_KEY}&limit=2&rating=g`)
    .then((response) => {
        res.send(response.data);
    }).catch(err => {
        console.log('GET ERROR:', err)
        res.send(500);
    })
});


module.exports = router;