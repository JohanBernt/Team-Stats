const team = {
  _players: [
    {
      firstName: 'Cherie',
      lastName: 'Yoong',
      age: 22
    },
    {
      firstName: 'Johan',
      lastName: 'Bernt',
      age: 31
    },
    {
     firstName: 'Kevin',
     lastName: 'Bui',
     age: 28
    }
   ],
  _games: [
    {
      opponent: 'Bulls',
      teamPoints: 103,
      opponentPoints: 82
    },
    {
      opponent: 'Hornets',
      teamPoints: 91,
      opponentPoints: 89
    },
    { 
      opponent: 'Lakers',
      teamPoints: 76,
      opponentPoints: 97
}
  ],
  
    get players() {
      return this._players;
    },

    get games() {
      return this._games;
    },

addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

addGame(oppName, points, oppPoints) {
  const game = {
    opponent: oppName,
    points: points,
    opponentPoints: oppPoints
  }
  this.games.push(game);
}
}

team.addPlayer("Steph", "Curry", 32);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

//console.log(team.players);

team.addGame("Sea Lions", 100, 80);
team.addGame("Wolves", 66, 90);
team.addGame("Titans", 75, 89);

console.log(team.games);

