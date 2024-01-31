const express = require('express');
const dao = require("./data_access");
const app = express();

app.use(express.json());

//GET REQUESTS
//findplanet
app.get("/planets/:id", (req, res) => {
  dao.call("findplanet", { id: req.params.id }, (result) => {
    if (result.planet !== undefined) {
      res.send(result.planet);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});
//findfilm
app.get("/films/:id", (req, res) => {
  dao.call("findfilm", {id: req.params.id}, (result) => {
    if (result.film !== undefined) {
      res.send(result.film);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});
//set of films for character
app.get("/characters/:id/films", (req, res) => {
  dao.call("findfilmsforcharacters", { id: req.params.id }, (result) => {
    if (result.filmschar !== undefined) {
      res.send(result.filmschar);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});
//set of characters for film
app.get("/films/:id/characters", (req, res) => {
  dao.call("findcharactersforfilms", { id: req.params.id }, (result) => {
    if (result.charfilms !== undefined) {
      res.send(result.charfilms);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});

app.get("/films/:id/planets", (req, res) => {
  dao.call("planetsforfilms", { id: req.params.id }, (result) => {
    if (result.planfilms !== undefined) {
      res.send(result.planfilms);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});

app.get("/planets/:id/films", (req, res) => {
  dao.call("filmsforplanets", { id: req.params.id }, (result) => {
    if (result.filmplanets !== undefined) {
      res.send(result.filmplanets);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});

app.get("/planets/:id/characters", (req, res) => {
  dao.call("planetsforcharacters", { id: req.params.id }, (result) => {
    if (result.plancharacters !== undefined) {
      res.send(result.plancharacters);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});
//findcharacter
app.get("/characters/:id", (req, res) => {
  dao.call("findcharacter", {id: req.params.id}, (result) => {
    if (result.character !== undefined) {
      res.send(result.character);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});
//findallcharacters
app.get("/characters", (req, res) =>{
    // let sw = dao.findallcharacters(req.params.id);
    dao.call("findallcharacters", {}, (result) => {
      if (result.characters !== undefined) {
        res.send(result.characters);
        console.log("In if statement");
      } else {
        res.statusCode = 404;
        res.end();
        console.log("In else statement");
      }
    });
});

app.get("/planets", (req, res) => {
  dao.call("findallplanets", {}, (result) => {
    if (result.planets !== undefined) {
      res.send(result.planets);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });

  app.get("/characters/:id", (req, res) => {
  dao.call("findcharacter", {id: req.params.id}, (result) => {
    if (result.character !== undefined) {
      res.send(result.character);
      console.log("In if statement");
    } else {
      res.statusCode = 404;
      res.end();
      console.log("In else statement");
    }
  });
});

  app.get("/films", (req, res) => {
    // let sw = dao.findallcharacters(req.params.id);
    dao.call("findallfilms", {}, (result) => {
      if (result.films !== undefined) {
        res.send(result.films);
        console.log("In if statement");
      } else {
        res.statusCode = 404;
        res.end();
        console.log("In else statement");
      }
    });
    // console.log(sw);
    // res.send(sw);
  });
  // console.log(sw);
  // res.send(sw);
});



//PUT REQUESTS

const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);
