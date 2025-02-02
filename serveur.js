const http = require ("http");
const fs= require ("fs");


fs.writeFile ("welcome.txt","Hello Node",(err)=>{
    if (err) {console.log("Erreur lors de la création du fichier:",err)}
    else {console.log("Le fichier a été crée avec succès!")}
});


fs.readFile("welcome.txt","utf-8",(err,data)=>{
    err ? console.log("Erreur lors de la lecture du fichier:",err) :
    console.log(data)
}
);

const password = require("./password-generator.js");
console.log("Mot de passe généré :", password);


const serveur=http.createServer((req,res)=> {
    res.end("<h1>Hello Node !!!!</h1>")
}).listen(3000);
