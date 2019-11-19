Frameworks for REST API:
  - Node.js
  - Express.js
  - Node Fetch 
  
 Frameworks for UI:
  - HTML
  - CSS: used FontAwesome
  
  To run this first download this repo on to your system and place it in a folder.
 
  Now install Nodejs - https://nodejs.org/en/download/
  Now install Expressjs Node fetch by opening the terminal and typing
      
        npm install express --save
        
        npm i node-fetch
        
        
  Then open server.js and in the terminal:
  
  cd to your directory where the project is stored and then type:
  
  node server.js
  
  after this open google chrome - go to url:
  
  localhost:3000
  
  now you can type in a subreddit and it will show you the result.
  
  
  Notes:
  - I integerated the rest api and the UI together so you cant run 1 on its own both of them work as one system.
  
  - The HTML file gets search from the user input and this is stored as a variable in script.js which makes the request to my server.js REST api and then send it back to the HTML file. 
  
  
  ![imgur pic](https://imgur.com/a/F0DokKk.jpg)
