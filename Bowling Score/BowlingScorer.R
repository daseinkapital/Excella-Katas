rollMany <- function(rolls, n, pins){
  i <- 0
  while (i < n){
    rolls <- roll(rolls, pins)
    i <- i + 1
  }
  return (rolls)
}

rollStrike <- function(rolls){
  rolls <- roll(rolls, 10)
  return (rolls)
}

rollSpare <- function(rolls){
  rolls <- roll(rolls, 5)
  rolls <- roll(rolls, 5)
  return (rolls)
}

roll <- function(rolls, pins){
  return (c(rolls, pins))
}

isStrike <- function(rolls, frameIndex){
  return (isTRUE(rolls[frameIndex] == 10))
}

isSpare <- function(rolls, frameIndex){
  return (isTRUE((rolls[frameIndex] + rolls[frameIndex + 1]) == 10))
}

sumOfBallsInFrame <- function(rolls, frameIndex){
  return (rolls[frameIndex] + rolls[frameIndex + 1])
}

spareBonus <- function(rolls, frameIndex){
  return (rolls[frameIndex + 2])
}

strikeBonus <- function(rolls, frameIndex){
  return (rolls[frameIndex + 1] + rolls[frameIndex + 2])
}

score <- function(rolls){
  score <- 0
  frameIndex <- 1
  frame <- 0
  while (frame < 10){
    if(isStrike(rolls, frameIndex)){
      score <- score + 10 + strikeBonus(rolls, frameIndex)
      frameIndex <- frameIndex + 1
    } else if (isSpare(rolls, frameIndex)){
      score <- score + 10 + spareBonus(rolls, frameIndex)
      frameIndex <- frameIndex + 2
    } else {
      score <- score + sumOfBallsInFrame(rolls, frameIndex)
      frameIndex <- frameIndex + 2
    }
    frame <- frame + 1
  } 
  return (score)
}
