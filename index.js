const PORT = 8080;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
    'X-RapidAPI-Key': '4ac3d69751mshf51a1d3319bf71bp19297fjsn03845bde1794'
  }
    };
    axios.request(options).then((response) => {
        console.log(response.data);
        res.json(response.data[0]);
    }).catch((error) => {
        console.error(error);
    });
});


app.get('/check', (req, res) => {
    const word = req.query.word;

    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: word},
        headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'X-RapidAPI-Key': '4ac3d69751mshf51a1d3319bf71bp19297fjsn03845bde1794'
        }
    };
    axios.request(options).then((response) => {
        console.log(response.data);
        res.json(response.data.result_msg);
    }).catch((error) => {
        console.error(error);
    });
});


app.listen(PORT, () => console.log('Server running on port ' + PORT));