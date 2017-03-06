class BowlingGame{
  this.rolls = new Array();

  roll(pins) {
    this.rolls.push(pins);
  };

  isSpare(frameIndex){
    return ((this.rolls[frameIndex] + this.rolls[frameIndex + 1]) === 10);
  };

  isStrike(frameIndex){
    return (this.rolls[frameIndex] === 10);
  };

  sumOfBallsInFrame(frameIndex){
    return (this.rolls[frameIndex] + this.rolls[frameIndex + 1]);
  };

  spareBonus(frameIndex){
    return(this.rolls[frameIndex + 2]);
  };

  strikeBonus(frameIndex){
    return(this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]);
  };

  rollMany(n, pins){
    for(i = 0; i < n; i++){
      this.roll(pins);
    };
  };

  rollStrike(){
    this.roll(10);
  }

  rollSpare(){
    this.roll(5);
    this.roll(5);
  }

  score(){
    score = 0;
    frameIndex = 0;

    for (frame = 0; frame < 10; frame++){
      if (isStrike(frameIndex)){
        score += score + strikeBonus(frameIndex);
        frameIndex++;
      } else if (isSpare(frameIndex)) {
        score += score + spareBonus(frameIndex);
        frameIndex++;
        frameIndex++;
      } else {
        score += sumOfBallsInFrame(frameIndex);
        frameIndex++;
        frameIndex++;
      };
    };
    return score;
  };
};

function TestGutterGame(){
  var game = new BowlingGame();
  game.rollMany(20, 0);
  if (0 === game.score()){
    console.log('Gutter Game Test passed! /n/n');
  } else{
    console.log('Gutter Game Test failed! :( /n/n');
  };
};

function TestAllOnes(){
  var game = new BowlingGame();
  game.rollMany(20, 1);
  if (20 === game.score()){
    console.log('All Ones Game Test passed! /n/n');
  } else {
    console.log('All Ones Game Test failed! :( /n/n');
  };
};

function TestPerfectGame(){
  var game = new BowlingGame();
  game.rollMany(12, 10);
  if (300 === game.score()){
    console.log('Perfect Game Test passed! /n/n');
  } else {
    console.log('Perfect Game Test failed! :( /n/n');
  };
};

function TestSingleSpare(){
  var game = new BowlingGame();
  game.rollSpare();
  game.roll(3);
  game.rollMany(17, 0);
  if (16 === game.score()){
    console.log('Single Spare Game Test passed! /n/n');
  } else {
    console.log('Single Spare Game Test failed! :( /n/n');
  };
};

function TestSingleStrike(){
  var game = new BowlingGame();
  game.rollStrike();
  game.roll(3);
  game.roll(4);
  game.rollMany(16, 0);
  if (24 === game.score()){
    console.log('Single Strike Game Test passed! /n/n');
  } else {
    console.log('Single Strike Game Test failed! :( /n/n');
  };
};

TestGutterGame();
TestAllOnes();
TestPerfectGame();
TestSingleSpare();
TestSingleStrike();
