// Example program
#include <iostream>
#include <string>
using namespace std;

class BowlingGame {
    int rolls [20] = {};
    int CurrentCounter = 0;
    public:
        void roll (int);
        void rollMany(int, int);
        void rollStrike();
        void rollSpare();
        bool isStrike (int);
        bool isSpare (int);
        int spareBonus (int);
        int strikeBonus (int);
        int sumOfBallsInFrame (int);
        int score ();
};

void BowlingGame::roll (int pins) {
    rolls[CurrentCounter] = pins;
    CurrentCounter++;
};

void BowlingGame::rollMany (int n, int pins) {
    for (int i = 0; i < n; i++){
        roll(pins);
    };
};

void BowlingGame::rollStrike () {
    roll(10);
};

void BowlingGame::rollSpare () {
    roll(5);
    roll(5);
};

bool BowlingGame::isStrike (int frameIndex) {
    return (rolls[frameIndex] == 10);
};

bool BowlingGame::isSpare (int frameIndex) {
    return ((rolls[frameIndex] + rolls[frameIndex + 1]) == 10);
};

int BowlingGame::spareBonus (int frameIndex) {
    return (rolls[frameIndex + 2]);
};

int BowlingGame::strikeBonus (int frameIndex) {
    return (rolls[frameIndex + 1] + rolls[frameIndex + 2]);
};

int BowlingGame::sumOfBallsInFrame (int frameIndex) {
    return (rolls[frameIndex] + rolls[frameIndex + 1]);
};

int BowlingGame::score () {
    int frameIndex = 0;
    int score = 0;

    for (int frame = 0; frame < 10; frame++) {
        if(isStrike(frameIndex)) {
            score += 10 + strikeBonus(frameIndex);
            frameIndex++;
        } else if (isSpare(frameIndex)) {
            score += 10 + spareBonus(frameIndex);
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

void TestGutterGame() {
    BowlingGame g;
    g.rollMany(20, 0);
    if (0 == g.score()) {
      std::cout << "Gutter game test passed!" << '\n';
    } else {
      std::cout << "Gutter game test failed :(" << '\n';
    };
};

void TestAllOnes() {
  BowlingGame g;
  g.rollMany(20, 1);
  if (20 == g.score()) {
    std::cout << "All ones test passed!" << '\n';
  } else {
    std::cout << "All ones test failed :(" << '\n';
  };
};

void TestPerfectGame() {
  BowlingGame g;
  g.rollMany(12, 10);
  if (300 == g.score()) {
    std::cout << "Perfect game test passed!" << '\n';
  } else {
    std::cout << "Perfect game test failed :(" << '\n';
  };
};

void TestSingleStrike() {
  BowlingGame g;
  g.rollStrike();
  g.roll(3);
  g.roll(4);
  g.rollMany(16, 0);
  if (24 == g.score()) {
    std::cout << "Single strike test passed!" << '\n';
  } else {
    std::cout << "Single strike test failed :(" << '\n';
  };
};

void TestSingleSpare() {
  BowlingGame g;
  g.rollSpare();
  g.roll(3);
  g.rollMany(17, 0);
  if (16 == g.score()) {
    std::cout << "Single spare test passed!" << '\n';
  } else {
    std::cout << "Single spare test failed :(" << '\n';
  };
};

int main() {
  TestGutterGame();
  TestAllOnes();
  TestPerfectGame();
  TestSingleStrike();
  TestSingleSpare();
  return 0;
}
