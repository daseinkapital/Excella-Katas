function tests = AllTheTests
    tests = functiontests(localfunctions);
end

function testGutterGame(testCase)
    rolls = [];
    NewGame = BowlingGame(rolls);
    NewGame.rollMany(20, 0);
    assert(isequal(0, NewGame.scored()))
end

function testAllOnes(testCase)
    rolls = [];
    NewGame = BowlingGame(rolls);
    NewGame.rollMany(20, 1);
    assert(isequal(20, NewGame.scored()))
end

function testPerfectGame(testCase)
    rolls = [];
    NewGame = BowlingGame(rolls);
    NewGame.rollMany(12, 10);
    assert(isequal(300, NewGame.scored()))
end

function testOneSpare(testCase)
    rolls = [];
    NewGame = BowlingGame(rolls);
    NewGame.rollSpare();
    NewGame.roll(3);
    NewGame.rollMany(17, 0);
    assert(isequal(16, NewGame.scored()))
end

function testOneStrike(testCase)
    rolls = [];
    NewGame = BowlingGame(rolls);
    NewGame.rollStrike();
    NewGame.roll(4);
    NewGame.roll(3);
    NewGame.rollMany(16, 0)
    assert(isequal(24, NewGame.scored()))
end