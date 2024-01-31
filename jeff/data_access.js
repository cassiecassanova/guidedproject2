const { MongoClient } = require("mongodb");
var url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "starwars";
const collectionFilms = "collectionFilms";
const collectionCharacters = "collectionCharacters";
const collectionPlanets = "collectionPlanets";
const collectionFilmCharacters = "collectionFilmCharacters";
const collectionFilmPlanets = "collectionFilmPlanets";
// module.exports.findallcharacters = function(){
//     return characters[]
// }
module.exports.call = async function call(operation, parameters, callback) {
  // connect to the db server
  await client.connect();
  const parser = parseInt(parameters.id);
  // set the database to use
  const db = client.db(dbName);
  // set the collection to use
  //const collection = db.collection(collectionCharacters);

  //Execute Operations
  // available operations:
  // ['initbooks'|'clearbooks'|'findallbooks'|'findbook'|'updatebook' ]
  switch (operation.toLowerCase()) {
    case "findallcharacters":
      const characters = await db
        .collection(collectionCharacters)
        .find({})
        .toArray();
      callback({ characters: characters });
      break;

    case "findallplanets":
      const planets = await db.collection(collectionPlanets).find({}).toArray();
      callback({ planets: planets });
      break;

    case "findallfilms":
      const films = await db.collection(collectionFilms).find({}).toArray();
      callback({ films: films });
      break;

    case "findcharacter":
      const character = await db
        .collection(collectionCharacters)
        .findOne({ id: parser });
      callback({ character: character });
      break;

    case "findfilm":
      const film = await db.collection(collectionFilms).findOne({
        id: parser,
      });
      callback({ film: film });
      break;

    case "findplanet":
      const planet = await db
        .collection(collectionPlanets)
        .findOne({ id: parser });
      callback({ planet: planet });
      break;

    case "findfilmsforcharacters":
      const filmschar = await db
        .collection(collectionFilmCharacters)
        .find({ character_id: parseInt(parameters.id) })
        .toArray();
      callback({ filmschar: filmschar });
      break;

    case "findcharactersforfilms":
      const charfilms = await db
        .collection(collectionFilmCharacters)
        .find({ film_id: parseInt(parameters.id) })
        .toArray();
      callback({ charfilms: charfilms });

    case "planetsforfilms":
      const planfilms = await db
        .collection(collectionFilmPlanets)
        .find({ film_id: parseInt(parameters.id) })
        .toArray();
      callback({ planfilms: planfilms });

    case "planetsforcharacters":
    //   const answer =  db
    //     .collection(collectionCharacters)
    //     .find({ homeworld: parseInt(parameters.id) });
      const plancharacters = await db
        .collection(collectionCharacters)
        .find({ homeworld: parseInt(parameters.id) })
        .toArray();
      callback({ plancharacters: plancharacters });

    case "filmsforplanets":
      const filmplanets = await db
        .collection(collectionFilmPlanets)
        .find({ planet_id: parseInt(parameters.id) })
        .toArray();
        console.log(filmplanets)
      callback({ filmplanets: filmplanets });

    default:
      break;
  }
  console.log("call complete: " + operation);
  client.close();
  return "call complete";
};
