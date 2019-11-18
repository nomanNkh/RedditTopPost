
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname));

let request = require('request');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/getTopPost', (req, res) => {
    //var ans = "";
    var baseurl = 'https://www.reddit.com/r/';
    var topurl = '/top.json?limit=1';
    //var subreddit = 'cscareerquestion';
    var subreddit = req.query.subreddit;
    var apiUrl = baseurl + subreddit + topurl; 

    request(apiUrl, function (err, response, body) {
        if (err) {
            console.log('error:', error);
            res.redirect('/error');
        } else {
            var topPost = JSON.parse(body);
            var title = '';
            var text = '';
            var author = '';
            if (topPost.data.children.length != 0) {
                title += topPost.data.children[0].data.title;
                text += topPost.data.children[0].data.selftext;
                author += topPost.data.children[0].data.author;

            }        
            res.send({
                postName: title,
                postText: text, 
                postCreator: author 
            });

        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    
    


