// Importation du module Express
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

// Instancie le serveur
const app = express();

// Configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Le serveur est démarré et attend les requêtes arrivant sur le port 7500.
// La fonction callback sert a afficher un message informatif lorsque le serveur est prêt à recevoir des requêtes
app.listen(7500, () => {
    console.log("Serveur démarré (http://localhost:7500/) !");
});

// La fonction pour répondre(res) aux requêtes(req) GET pointant sur la racine du site.
// La méthode app.get répond aux requêtes passées en paramètre c'est à dire "/" la racine du site.
app.get("/", (req, res) => {
    // Cette ligne est dans le fichier /views/index.ejs
    // res.send("Bienvenue dans l'api rest des planetes");
    res.render("index");
})

// app.get("/planetes", (req, res) => {
//     res.send("Affichage des planetes");
// })

// GET /livres
app.get("/planetes", (req, res) => {
    const sql = 'SELECT * FROM planetes';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("planetes", { model: rows });
    });
});

const dbname = 'univers.db';
let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});
//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, nom VARCHAR(25), image VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');
db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Vénus", "./planetes/venus.jpeg"]);
db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Terre", "./planetes/terre.jpeg"]);
db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Mercure", "./planetes/mercure.jpeg"]);
db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Mars", "./planetes/mars.jpeg"]);
// // db.get : Affiche la 1ere ligne
// db.All : Affiche tout les enregistrements on ne peut afficher une ligne ou un champs demandé
// db.all('SELECT * FROM planetes', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });