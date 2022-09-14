const sqlite3 = require("sqlite3").verbose();
const dbname='univers.db';
let db = new sqlite3.Database(dbname, err => {
    if(err)
    throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});
db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, name VARCHAR(25), image VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');