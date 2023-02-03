import React, { useState } from "react";

function App() {
  const [test, setTest] = useState([
    {
      match1: [
        {
          game1: []
        }
      ]
    }
  ]);

  const addMatch = (type) => {
    if (type === "match") {
      addMatches(0);
    } else if (type === "game") {
      addGames(0, 1);
    }
  };
  function addMatches(matchIndex) {
    setTest(
      test.map((match, mIndex) => {
        if (mIndex === matchIndex) {
          return {
            [Object.keys(match)[0]]: [3, ...match[Object.keys(match)[0]]]
          };
        }
        return match;
      })
    );
  }
  const addGames = (matchIndex, gameIndex) => {
    setTest((prev) => {
      console.log("addGames runed");
      // const updatedTest = [...prev];
      // const match = updatedTest[matchIndex];
      // const matchKey = Object.keys(match)[0];
      // const games = match[matchKey][1];
      // const gameKey = Object.keys(games)[gameIndex];
      // games[gameKey].unshift(5);
      const newTest = prev.map((match, i) => {
        if (i === matchIndex) {
          const gameKey = Object.keys(match)[matchIndex];
          const newMatch = match[Object.keys(match)[matchIndex]].map(
            (game, gameI) => {
              if (gameI === gameIndex) {
                const gameKey = Object.keys(game)[0];
                return {
                  ...game,
                  [gameKey]: [5, ...game[Object.keys(game)[0]]]
                };
              } else {
                return game;
              }
            }
          );

          return { ...match, [gameKey]: newMatch };
        }
      });
      return newTest;
    });
  };
  return (
    <div>
      Goal: Add game1 to the value 5. Error is, it gets added twice. game1[5, 5]
      <hr></hr>
      <button onClick={() => addMatch("match")}>Step one: Add Match</button>
      <button onClick={() => addMatch("game")}>Step Two: Add Game</button>
      {console.log(test)}
    </div>
  );
}

export default App;
