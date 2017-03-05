# -*- coding: utf-8 -*-
"""
Created on Sat Mar 04 20:09:38 2017

@author: Andrew
"""

#creates a bowling game scorer
class BowlingGame:
    def __init__(self):
        self.rolls = []
    
    def roll(self, pins):
        self.rolls.append(pins)
    
    def is_strike(self, frame_index):
        return self.rolls[frame_index] == 10
        
    def is_spare(self, frame_index):
        return (self.rolls[frame_index] + self.rolls[frame_index + 1]) == 10
        
    def sum_of_balls_in_frame(self, frame_index):
        return self.rolls[frame_index] + self.rolls[frame_index + 1]
    
    def spare_bonus(self, frame_index):
        return self.rolls[frame_index + 2]
        
    def strike_bonus(self, frame_index):
        return self.rolls[frame_index + 1] + self.rolls[frame_index + 2]        
        
    def roll_many(self, n, pins):
        i = 0
        while i < n:
            self.roll(pins)
            i += 1
        
    def roll_strike(self):
        self.roll(10)
        
    def roll_spare(self):
        self.roll(5)
        self.roll(5)
    
    def score(self):
        score = 0
        frame_index = 0
        frame = 0        
        
        while frame < 10:
            if(self.is_strike(frame_index)):
                score += 10 + self.strike_bonus(frame_index)
                frame_index += 1
            elif(self.is_spare(frame_index)):
                score += 10 + self.spare_bonus(frame_index)
                frame_index += 2
            else:
                score += self.sum_of_balls_in_frame(frame_index)
                frame_index += 2
            frame += 1
        
        return score

