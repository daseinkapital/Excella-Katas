using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BowlingScorer;

namespace test_BowlingScorer
{
    [TestClass]
    public class BowlingGameTests
    {
        protected void Setup()
        {
            BowlingGame g = new BowlingGame();
        }

        public void rollStrike(BowlingGame g)
        {
            g.roll(10);
        }

        public void rollSpare(BowlingGame g)
        {
            g.roll(5);
            g.roll(5);
        }

        public void rollMany(BowlingGame g, int n, int pins)
        {
            for (int i = 0; i < n; i++)
            {
                g.roll(pins);
            }
        }

        [TestMethod]
        public void GutterGame()
        {
            BowlingGame g = new BowlingGame();
            rollMany(g, 20, 0);
            Assert.AreEqual(0, g.score());
        }

        [TestMethod]
        public void AllOnes()
        {
            BowlingGame g = new BowlingGame();
            rollMany(g, 20, 1);
            Assert.AreEqual(20, g.score());
        }

        [TestMethod]
        public void PerfectGame()
        {
            BowlingGame g = new BowlingGame();
            rollMany(g, 12, 10);
            Assert.AreEqual(300, g.score());
        }

        [TestMethod]
        public void SingleSpare()
        {
            BowlingGame g = new BowlingGame();
            rollSpare(g);
            g.roll(3);
            rollMany(g, 17, 0);
            Assert.AreEqual(16, g.score());
        }

        [TestMethod]
        public void SingleStrike()
        {
            BowlingGame g = new BowlingGame();
            rollStrike(g);
            g.roll(3);
            g.roll(4);
            rollMany(g, 16, 0);
            Assert.AreEqual(24, g.score());
        }
    }
}
