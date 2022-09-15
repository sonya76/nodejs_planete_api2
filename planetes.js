const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";
let db = new sqlite3.Database(dbname, (err) => {
  if (err) throw err;
  console.log("Base de donnée initialisé dans le fichier : " + dbname);
});
//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, nom VARCHAR(25), image VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');
db.run("INSERT INTO planetes(nom,image) values (?,?)", [
  "Vénus",
  "./planetes/venus.jpeg",
]);
db.run("INSERT INTO planetes(nom,image) values (?,?)", [
  "Terre",
  "./planetes/terre.jpeg",
]);
db.run("INSERT INTO planetes(nom,image) values (?,?)", [
  "Mercure",
  "./planetes/mercure.jpeg",
]);
db.run("INSERT INTO planetes(nom,image) values (?,?)", [
  "Mars",
  "./planetes/mars.jpeg",
]);
// // db.get : Affiche la 1ere ligne

// //db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, nom VARCHAR(25), image VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');
// db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Vénus", "./planetes/venus.jpeg"]);
// db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Terre", "./planetes/terre.jpeg"]);
// db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Mercure", "./planetes/mercure.jpeg"]);
// db.run('INSERT INTO planetes(nom,image) values (?,?)', ["Mars", "./planetes/mars.jpeg"]);
// // db.get : Affiche la 1ere ligne
// db.All : Affiche tout les enregistrements on ne peut afficher une ligne ou un champs demandé
db.all("SELECT * FROM planetes", (err, data) => {
  if (err) throw err;
  console.log(data);
});
