const express = require('express')
const router = express.Router()

// Player Model
const Player = require('../../models/Player')

// Setup full REST-API
// ===================

// @route   GET api/players
// @desc    Get All Players
// @access  Public
router.get("/", (req, res) => {   // ("/api/players")
  Player.find()
    .sort({ name: 1 })
    .then(players => res.json(players))
});

// @route   GET api/players/:id
// @desc    Get Single Player
// @access  Public
router.get("/:id", (req, res, err) => {
  Player.find({ _id: `${req.params.id}` })
    .then(player => res.json(player))
    .catch(err => res.status(404).json({
      success: false
    }))
});

// @route   POST api/players
// @desc    Create A Player
// @access  Public
router.post("/", (req, res) => {
  let { team, shirt, name, position, age, birthday, country } = req.body;

  // New instance of Players
  const newPlayer = new Player({
    team: team,
    shirt: shirt,
    name: name,
    position: position,
    age: age,
    birthday: birthday,
    country: country
  });

  newPlayer.save()
    .then(player => res.json(player))
});

// @route   PUT api/players
// @desc    Update A Player
// @access  Public
router.put("/", (req, res, err) => {
  let { _id, team, shirt, name, position, age, birthday, country } = req.body;

  if (_id === "") {
    res.send("Id is missing.");
  }

  let filter = { _id: `${_id}` };
  let update = {
    $set: {
      team,
      shirt,
      name,
      position,
      age,
      birthday,
      country
    }
  };

  Player.updateOne(filter, update)
    .then(() => res.json({
      success: true
    }))
    .catch(err => res.status(404).json({
      success: false
    }))
});

// @route   DELETE api/players/:id
// @desc    Delete A Player
// @access  Public
router.delete("/:id", (req, res, err) => {
  Player.findById(req.params.id)
    .then(player => player.remove()
      .then(() => res.json({
        success: true
      })))
    .catch(err => res.status(404).json({
      success: false
    }))
})

module.exports = router