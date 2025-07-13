# NOTES_WEB_APP 
    get Started with backend practise
    It is basic Notes web app 
    This stores all files(notes) in local storage folder

# files Structure
    BASIC_NOTES_WEB_APP
    |
    |--->node_nodules
    |--->index.js
    |--->package.json
    |--->package-lock.json
    |--->views
    |    ->index.ejs
    |--->public
    |    ->images
    |    ->javascripts
    |        ->scripts.js
    |    ->stylesheets
    |        ->style.css
    |--->files
    |    ->abc.txt
    |    ->xyz.txt

    
# Steps
=>   npm init
=>   create index.js file
=>   install packages fron npm
    npm i express nodemon 
=>   in package.json
    ->scripts
        "start" :"nodemon index.js"
=>   in index.js
    ->require express ,fs, path
    ->search for static files in particular path directory
        syntax: 
            app.use(express.static(path.join(__dirname,'public')))
    ->routing
    ->listening
=>   install ejs package from npm
    npm i ejs
=>   create 'views' folder
    ->create 'index.ejs' file inside views
=>   create 'public' folder
    -> create 'images' folder consisting of images. 
    -> create 'javascripts' folder consisting of all script files.
        ->create 'scripts.js' file
    -> create 'stylesheets' folder consisting of all style files.
        ->create 'style.css' file
=>   in index.ejs file write basic html template
    -> create form  
        1. INPUT
        2. TEXTAREA
        3. SUBMIT   
    -> list of files notes created
            

    




