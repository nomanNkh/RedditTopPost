Frameworks for REST API:
  - Node.js
  - Express.js
  - Node Fetch 
  - Request
  
 Frameworks for UI:
  - HTML
  - CSS: used FontAwesome
  
  
  ***HEROKU LINK***
  
  got to link:
  https://reddit-top-post.herokuapp.com/
  
  
 
  ***TO RUN LOCALLY***
  
  To run this locally first download this repo on to your system and place it in a folder.
 
  Now install Nodejs - https://nodejs.org/en/download/
  Now install Expressjs Node fetch, request by opening the terminal and typing
      
        npm install express --save
        
        npm i node-fetch
        
        npm i request
        
        
  Then open server.js and in the terminal:
  
  cd to your directory where the project is stored and then type:
  
  node server.js
  
  after this open google chrome - go to url:
  
  localhost:3000
  
  now you can type in a subreddit and it will show you the result.
 
 
 ***NOTES***
 
  - I integerated the rest api and the UI together so its best to run together.
  
  - if you want to check rest api itself then you have to search http://localhost:3000/api/getTopPost/learnjavascript where learnjavascript can be replaced by any subreddit.  - the output from this is a cleaner json data.
  
  How it works:
  
  - HTML and CSS file are the frontend and it has a click search button where user can input subreddit name.
  - this input subreddit name is sent to script.js file where it will call the rest api.
  - the rest api (server.js file) forms the api url and gets the json data from the reddit api and cleans it up and sends it back to the script.js file
  - now the script.js file displays the data to the HTML file. 
  
  
