var friendList = require('../data/friend');

module.exports = function(app){
  
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    
    for(var i = 0; i < friendList.length; i++){
      var scoresDiff = 0;
     
      for(var m = 0; m < newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[m]) - parseInt(newFriendScores[m])));
      }

      
      scoresArray.push(scoresDiff);
    }

  
    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }


    var bff = friendList[bestMatch];
    res.json(bff);


    friendList.push(req.body);
  });
};