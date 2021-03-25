const express = require("express");
const getPlayerInfo = require("../models/players");

const app=express();

const router = express.Router();

router.get("/:playerid", async (req, res) => {
  try {
    let playerId = req.params.playerid;
    const getPlayers = await getPlayerInfo.find({});
    let player=JSON.stringify(getPlayers[playerId]);
    if(player==undefined){
      res.render('noPlayer',{playerId:playerId});
    }
    else{
      let {playerName,from,price,img}=JSON.parse(player);
      res.render('index',{
          name:playerName,
          team:from,
          price:price,
          image:img,
          playerId:playerId,
      })
      //res.json(getPlayers);
    }
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
