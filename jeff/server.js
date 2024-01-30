const { MongoClient } = require("mongodb");
var url = "mongo://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "starwars";
const collectionFilms = "films";
const collectionCharacters = "characters";
const collectionPlanets = "planets";
const collectionFilmCharacters = "films_characters";
const collectionFilmPlanets = "films_planets";


