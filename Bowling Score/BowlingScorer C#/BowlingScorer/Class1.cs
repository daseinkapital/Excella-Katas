using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BowlingScorer
{
    public class BowlingGame
    {
        private List<int> rolls = new List<int>();

        public void roll(int pins)
        {
            rolls.Add(pins);
        }

        public Boolean IsStrike(int frameIndex)
        {
            return rolls[frameIndex] == 10;
        }

        public Boolean IsSpare(int frameIndex)
        {
            return (rolls[frameIndex] + rolls[frameIndex + 1]) == 10;
        }

        public int sumOfBallsInFrame(int frameIndex)
        {
            return rolls[frameIndex] + rolls[frameIndex + 1];
        }

        public int spareBonus(int frameIndex)
        {
            return rolls[frameIndex + 2];
        }

        public int strikeBonus(int frameIndex)
        {
            return rolls[frameIndex + 1] + rolls[frameIndex + 2];
        }

        public int score()
        {

            int score = 0;
            int frameIndex = 0;

            for (int frame = 0; frame < 10; frame++)
            {
                if (IsStrike(frameIndex))
                {
                    score += 10 + strikeBonus(frameIndex);
                    frameIndex += 1;
                } else if (IsSpare(frameIndex))
                {
                    score += 10 + spareBonus(frameIndex);
                    frameIndex += 2;
                }
                else
                {
                    score += sumOfBallsInFrame(frameIndex);
                    frameIndex += 2;
                }
            }

            return score;
        }
    }
}
