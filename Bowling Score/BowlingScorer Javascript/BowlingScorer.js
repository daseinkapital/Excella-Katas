function BowlingGame() {
    this.rolls = new Array();
};

BowlingGame.prototype.roll = function (pins) {
    this.rolls.push(pins);
};

BowlingGame.prototype.isSpare = function (frameIndex) {
    if ((this.rolls[frameIndex] + this.rolls[frameIndex + 1]) == 10) {
        return true;
    } else {
        return false;
    };
};

BowlingGame.prototype.isStrike = function (frameIndex) {
    if (this.rolls[frameIndex] == 10) {
        return true;
    } else {
        return false;
    };
};

BowlingGame.prototype.sumOfBallsInFrame = function (frameIndex) {
    num = (this.rolls[frameIndex] + this.rolls[frameIndex + 1]);
    return num;
};

BowlingGame.prototype.spareBonus = function (frameIndex) {
    num = (this.rolls[frameIndex + 2]);
    return num;
};

BowlingGame.prototype.strikeBonus = function (frameIndex) {
    num = (this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]);
    return num;
};

BowlingGame.prototype.rollMany = function (n, pins) {
    for (i = 0; i < n; i++) {
        this.roll(pins);
    };
};

BowlingGame.prototype.rollStrike = function () {
    this.roll(10);
}

BowlingGame.prototype.rollSpare = function () {
    this.roll(5);
    this.roll(5);
}

BowlingGame.prototype.score = function () {
    score = 0;
    frameIndex = 0;

    for (frame = 0; frame < 10; frame++) {
        if (this.isStrike(frameIndex)) {
            score += 10 + this.strikeBonus(frameIndex);
            frameIndex++;
        } else if (this.isSpare(frameIndex)) {
            score += 10 + this.spareBonus(frameIndex);
            frameIndex++;
            frameIndex++;
        } else {
            score += this.sumOfBallsInFrame(frameIndex);
            frameIndex++;
            frameIndex++;
        };
    };
    return score;
};

function TestGutterGame() {
    var game = new BowlingGame();
    game.rollMany(20, 0);
    score = game.score();
    if (0 == score) {
        $('#Test1Result').html('Gutter Game Test passed!');
    } else {
        $('#Test1Result').html('Gutter Game Test failed! :(');
    };
};

function TestAllOnes() {
    var game = new BowlingGame();
    game.rollMany(20, 1);
    score = game.score()
    if (20 == score) {
        $('#Test2Result').html('All Ones Game Test passed!');
    } else {
        $('#Test2Result').html('All Ones Game Test failed! :(');
    };
};

function TestPerfectGame() {
    var game = new BowlingGame();
    game.rollMany(12, 10);
    score = game.score();
    if (300 == score) {
        $('#Test3Result').html('Perfect Game Test passed!');
    } else {
        $('#Test3Result').html('Perfect Game Test failed! :(');
    };
};

function TestSingleSpare() {
    var game = new BowlingGame();
    game.rollSpare();
    game.roll(3);
    game.rollMany(17, 0);
    if (16 === game.score()) {
        $('#Test4Result').html('Single Spare Game Test passed!');
    } else {
        $('#Test4Result').html('Single Spare Game Test failed! :(');
    };
};

function TestSingleStrike() {
    var game = new BowlingGame();
    game.rollStrike();
    game.roll(3);
    game.roll(4);
    game.rollMany(16, 0);
    if (24 === game.score()) {
        $('#Test5Result').html('Single Strike Game Test passed!');
    } else {
        $('#Test5Result').html('Single Strike Game Test failed! :(');
    };
};

$(document).ready(function () {
    TestGutterGame();
    TestAllOnes();
    TestPerfectGame();
    TestSingleSpare();
    TestSingleStrike();

});
