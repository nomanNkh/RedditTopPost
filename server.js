//REST API

//libraries and instances
const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.static(__dirname));

let request = require('request');
app.get('/', (req, res) => {
    //res.send('Hello world'); //uncomment this if you want to test rest api itself without html page
    res.sendFile(__dirname + '/index.html');//redirects to html page
})

app.get('/api/getTopPost/:subreddit', (req, res) => {
    var baseurl = 'https://www.reddit.com/r/';
    var topurl = '/top.json?limit=1';
    var subreddit = req.params.subreddit;//puts subreddit from request into variable to call reddit api
    var apiUrl = baseurl + subreddit + topurl; //reddit api
    request(apiUrl, function (err, response, body) {
        if (err) {
            res.redirect('/error');
        } else {
            //extracting relevant data from rest api

            var topPost = JSON.parse(body);

            //default values
            var title = '';
            var text = '';
            var author = '';

            //values from reddit api
            if (topPost.data.children.length != 0) {
                title += topPost.data.children[0].data.title;
                text += topPost.data.children[0].data.selftext;
                author += topPost.data.children[0].data.author;

            }        

            //send back to frontend script.js
            res.send({
                postName: title,
                postText: text, 
                postCreator: author 
            });

        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    
    


