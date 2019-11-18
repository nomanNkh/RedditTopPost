// JavaScript source code
var subreddit = ''
var name = ''
var author = ''
var text = ''
async function search() {
    subreddit = document.getElementById("subreddit").value;
    const requ = '/api/getTopPost?subreddit=' + subreddit
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
    var container = document.getElementsByClassName("results-container")[0];
    if (name == '') {
        container.innerHTML = '<font color = "white"> <br> This Subreddit Doesn\'t Exist </font> <br>';
    } else {
        container.innerHTML = '<font color = "white">' + '<br>' + name + " <br><br> Posted by:     " + author + "<br><br>" + text + '</font> <br>';
    }
}
const searchReddit = document.getElementsByClassName("search-btn")[0];
searchReddit.addEventListener("click", search);

