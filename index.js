const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./configs/connection");
const response = require("./res/response");

// routes / URL / endpoint utama kita method GET
app.use(bodyParser.json());

//////////////////// TABLE PLAYER \\\\\\\\\\\\\\\\\\\\

app.get("/player", (req, res) => {
  const sql = "CALL getallplayers()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data player", res);
    // console.log(result);
  });
});

// get per id
app.get("/player/:id_player", (req, res) => {
  const id_player = req.params.id_player;
  const sql = "CALL select_player(2);";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "get satu satu", res);
  });
});

app.post("/player/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/player/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/player/delete", (req, res) => {
  res.send("INI DELETE");
});

//////////////////// TABLE AGENT \\\\\\\\\\\\\\\\\\\\
app.get("/agent", (req, res) => {
  const sql = "CALL getallagents()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data agent", res);
    // console.log(result);
  });
});

// get per id
app.get("/agent/:id_agent", (req, res) => {
  const id_agent = req.params.id_agent;
  const sql = "CALL select_agent(4);";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "get satu satu", res);
  });
});

app.post("/playeragent/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/agent/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/agent/delete", (req, res) => {
  res.send("INI DELETE");
});

//////////////////// TABLE STATUS \\\\\\\\\\\\\\\\\\\\
app.get("/status", (req, res) => {
  const sql = "CALL getallstatuss()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data status", res);
    // console.log(result);
  });
});

// get per id
app.get("/status/:id_status", (req, res) => {
  const id_status = req.params.id_status;
  const sql = "CALL select_status(4);";
  db.query(sql, (err, fields) => {
    if (err) throw err;
    response(200, fields, "get satu satu", res);
  });
});

app.post("/status/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/status/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/status/delete", (req, res) => {
  res.send("INI DELETE");
});

//////////////////// TABLE MAP \\\\\\\\\\\\\\\\\\\\
app.get("/map", (req, res) => {
  const sql = "CALL getallmaps()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data map", res);
    // console.log(result);
  });
});

// get per id
app.get("/map/:id_map", (req, res) => {
  const id_map = req.params.id_map;
  const sql = "CALL select_map(2);";
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "get satu satu", res);
  });
});

app.post("/map/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/map/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/map/delete", (req, res) => {
  res.send("INI DELETE");
});

//////////////////// TABLE PERTANDIGAN \\\\\\\\\\\\\\\\\\\\
app.get("/pertandingan", (req, res) => {
  const sql = "CALL getallpertandingans()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data pertandingan", res);
    // console.log(result);
  });
});

// get per id
app.get("/pertandingan/:id_pertandingan", (req, res) => {
  const id_pertandingan = req.params.id_pertandingan;
  const sql = "CALL select_pertandingan(2);";
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "get satu satu", res);
  });
});

app.post("/pertandingan/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/pertandingan/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/pertandingan/delete", (req, res) => {
  res.send("INI DELETE");
});

//////////////////// TABLE HISTORY PERTANDINGAN \\\\\\\\\\\\\\\\\\\\
app.get("/historypertandingan", (req, res) => {
  const sql = "CALL getallhistorypertandingans()";

  db.query(sql, (err, result) => {
    if (err) throw err;
    //hasil data dari mysql
    response(200, result, "ambil semua data history pertandingan", res);
    // console.log(result);
  });
});

// get per id
app.get("/player/:id_player", (req, res) => {
  const id_player = req.params.id_player;
  const sql = "CALL select_player(2);";
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "get satu satu", res);
  });
});

app.post("/historypertandingan/post", (req, res) => {
  res.send("INI POSTING");
});

app.put("/historypertandingan/put", (req, res) => {
  res.send("INI PUT");
});

app.delete("/historypertandingan/delete", (req, res) => {
  res.send("INI DELETE");
});

// PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
