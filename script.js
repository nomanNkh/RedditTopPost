const searchReddit = document.getElementsByClassName("search-btn")[0];
searchReddit.addEventListener("click", search);//starts the program when the search button is clicked.

var subreddit = ''
var name = ''
var author = ''
var text = ''

async function search() {
    subreddit = document.getElementById("subreddit").value;//gets searched result from html to this file

    if (subreddit == null|| subreddit == ''|| subreddit == ' ') {
        subreddit = 'adadazxcz';//fake subreddit when subreddit doesnt exist
    }

    //calling REST API
    const requ = '/api/getTopPost/' + subreddit;
    fetch(requ)
        .then(res=>res.json())
        .then(data => {
            display(data.postName, data.postCreator, data.postText);
        })
        .catch(err => {
           console.log('error')
        }); 
}

async function display(name, author, text) {
    //display results in HTML file.
    var container = document.getElementsByClassName("results-container")[0];
    if (name == '') {
        container.innerHTML = '<font color = "white"> <br> This Subreddit Doesn\'t Exist Try Again </font> <br>';
    } else {
        container.innerHTML = '<font color = "white">' + '<br>' + name + " <br><br> Posted by:     " + author + "<br><br>" + text + '</font> <br>';
    }
}

