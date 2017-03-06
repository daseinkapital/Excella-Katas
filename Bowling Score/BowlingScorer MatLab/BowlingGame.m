classdef BowlingGame < handle
    properties
        rolls
    end
    methods
        function BG = BowlingGame(rolls)
            BG.rolls = rolls;
        end
        
        function roll(BG, pins)
            BG.rolls = horzcat(BG.rolls, pins);
            disp(BG.rolls)
        end
        
        function bool = isStrike(BG, frameIndex)
            bool = BG.rolls(frameIndex) == 10;
        end
        
        function bool = isSpare(BG, frameIndex)
            bool = (BG.rolls(frameIndex) + BG.rolls(frameIndex + 1) == 10);
        end
        
        function score = sumOfBallsInFrame(BG, frameIndex)
            score = BG.rolls(frameIndex) + BG.rolls(frameIndex + 1);
        end
        
        function score = spareBonus(BG, frameIndex)
            score = BG.rolls(frameIndex + 2);
        end
        
        function score = strikeBonus(BG, frameIndex)
            score = BG.rolls(frameIndex + 1) + BG.rolls(frameIndex + 2);
        end
        
        function rollMany(BG, n, pins)
            j = 0;
            while j < n
                BG.roll(pins);
                j = j + 1;
            end
        end
        
        function rollStrike(BG)
            BG.roll(10);
        end
        
        function rollSpare(BG)
            BG.roll(5);
            BG.roll(5);
        end
        
        function score = scored(BG)
            score = 0;
            frameIndex = 1;
            frame = 0;
            
            while frame < 10
                bool1 = BG.isStrike(frameIndex);
                bool2 = BG.isSpare(frameIndex);
                if (bool1)
                    score = score + 10 + BG.strikeBonus(frameIndex);
                    frameIndex = frameIndex + 1;
                elseif (bool2)
                    score = score + 10 + BG.spareBonus(frameIndex);
                    frameIndex = frameIndex + 2;
                else
                    score = score + BG.sumOfBallsInFrame(frameIndex);
                    frameIndex = frameIndex + 2;
                end
                frame = frame + 1;
            end
        end
    end
end