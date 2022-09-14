// Importation du module Express
const express = require("express");
// Instancie le serveur
const app = express();
// Le serveur est démarré et attend les requêtes arrivant sur le port 3000.
// La fonction callback sert a afficher un message informatif lorsque le serveur est prêt à recevoir des requêtes
app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
});
// La fonction pour répondre(res) aux requêtes(req) GET pointant sur la racine du site.
// La méthode app.get répond aux requêtes passées en paramètre c'est à dire "/" la racine du site.
app.get("/", (req, res) => {
    res.send("Bonjour bienvenu dans l'api planete...");
});