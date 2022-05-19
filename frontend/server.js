const express = require("express");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();
const port = 5500;

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use(fileupload());

function Guid()  
{  
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(ch) {  
      var rand = Math.random()*16|0, value = ch === 'x' ? rand : (rand&0x3|0x8);  
      return value.toString(16);  
   });  
} 

app.post("/uploadImage", (req, res) => {
    const fileName = Guid() + path.extname(req.files.profilePic.name);
    var image = req.files.profilePic;
    const imagePath = __dirname + "/static/img/" + fileName;
    image.mv(imagePath, error => {
        if(error) {
            res.writeHead(500, {"Content-Type":"apllication/json"});
            res.end(JSON.stringify({status:"error", message: error.message}));
        } else {
            res.writeHead(200, {
                "Content-Type":"application/json"
            });
            res.end(JSON.stringify({status:"success",message: fileName}));
        }
    });
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("pages/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("pages/register.html"));
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}...`);
});