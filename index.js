// Importation du module Express
const express = require("express");
// Instancie le serveur
const app = express();
// Le serveur est démarré et attend les requêtes arrivant sur le port 7500.
// La fonction callback sert a afficher un message informatif lorsque le serveur est prêt à recevoir des requêtes
app.listen(7500, () => {
    console.log("Serveur démarré (http://localhost:7500/) !");
});
// La fonction pour répondre(res) aux requêtes(req) GET pointant sur la racine du site.
// La méthode app.get répond aux requêtes passées en paramètre c'est à dire "/" la racine du site.
app.get("/", (req, res) => {
    res.send("Bienvenue dans l'api rest des planetes");
})

const sqlite3 = require("sqlite3").verbose();
const dbname = 'univers.db';
let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});
db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, nom VARCHAR(25), image VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');