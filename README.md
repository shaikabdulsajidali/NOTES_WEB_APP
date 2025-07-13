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
    -> list of files notes created ('files' folder) and using forEach each file is displayed

=>  index.ejs is rendered on home page in index.js

        app.get("/",(req,res)=> {
            fs.readdir(`./files`,(err,filelist)=>{               //reading files from 'files' folder, 'err' will contain an error if reading the folder fails,filelist is list of files in 'files' folder
                res.render("index",{ filesarray: filelist})
            })
            
        })
=>  display of the tasks from the 'files' folder
    <div class="tasks p-8 flex gap-2 flex-wrap  "> 
                <% if(filesarray.length > 0){ %>    <!--filesarray is array passed from index.js files-->
                    <% filesarray.forEach((val)=>{ %>
                        <div class="task1 min-w-90 rounded-md p-5 bg-zinc-600">
                            <h1 class=" text-3xl tracking-tighter "><%= val %></h1>
                            <a href="/files/<%= val%>" class="text-blue-800 inline-block mt-3 ">read more</a>
                        </div>
                    <% }) %>
                <% }else{ %>
                        <h1 class=" text-3xl tracking-tighter ">No task present here</h1>
                <% } %>
            
            </div>
            

    




