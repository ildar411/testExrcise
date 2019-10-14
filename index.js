const parseString = require('xml2js').parseString;
const rp = require('request-promise');
const express = require('express');

const app = express();

let getTitle = (req, res) => {
    let title = [];
    const options = {
        uri: 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en',
        headers: {
            'User-Agent': 'Request-Promise'
        },
    };
    rp(options).then(resp => {
        parseString(resp, (err, result) => {
            result.rss.channel[0].item.forEach(element => {
                title.push(element.title[0]);
            });
            res.setHeader('Content-Type', 'application/json');
            res.json(title);
        });
    })
    return title;
};
app.get('/', (req, res) => {
    getTitle(req, res);
});

app.listen(3000, (err) => {
    console.log(err);
    console.log('star');
});


module.exports = {getTitle : getTitle, app: app};   