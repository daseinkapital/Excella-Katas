# -*- coding: utf-8 -*-
"""
Created on Sat Mar 04 20:24:20 2017

@author: Andrew
"""

from BowlingScoreKata import BowlingGame
import unittest

class bowling_kata_tests(unittest.TestCase):
    g = BowlingGame()
    def test_gutter_game(self):
        g = BowlingGame()
        g.roll_many(20, 0)
        self.assertEqual(0, g.score())
    
    def test_all_ones(self):
        g = BowlingGame()
        g.roll_many(20, 1)
        self.assertEqual(20, g.score())
    
    def test_perfect_game(self):
        g = BowlingGame()
        g.roll_many(12, 10)
        self.assertEqual(300, g.score())
    
    def test_one_strike(self):
        g = BowlingGame()
        g.roll_strike()
        g.roll(4)
        g.roll(3)    
        g.roll_many(16, 0)
        self.assertEquals(24, g.score())
    
    def test_one_spare(self):
        g = BowlingGame()
        g.roll_spare()
        g.roll(3)
        g.roll_many(17, 0)
        self.assertEquals(16, g.score())

if __name__ == "__main__":
    unittest.main()