// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  for (let i = 0; i <=2; i++) {
    let randomNum = Math.round(Math.random());
    return randomNum;
  }
}
inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, inningNum){
  let homeScore = 0;
  let awayScore = 0;
   for (let i = 0; i < inningNum; i++){
    homeScore += callback()
    awayScore += callback()
   }
    return {
      "Home": homeScore,
      "Away": awayScore
  };
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(callback, inningNum){
  return function (){
   let homeTeam = 0;
   let awayTeam = 0;
   for (let i = 0; i < inningNum; i++){
     homeTeam += callback()
     awayTeam += callback()
    
    if (i===0){
    console.log(`1st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===1){
    console.log(`2nd inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===2){
    console.log(`3rd inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===3){
    console.log(`4st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===4){
    console.log(`5st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===5){
    console.log(`6st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===6){
    console.log(`7st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===7){
    console.log(`8st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  } if (i===8){
    console.log(`9st inning: awayTeam:${awayTeam} - homeTeam:${homeTeam}`);
  }  
  }
}
}

const showScoreboard = scoreboard(inning, 9);
showScoreboard();