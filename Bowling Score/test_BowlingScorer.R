library(testthat)
source("C:/Users/Andrew/Documents/Junior Year/Excella/Excella-Katas/Bowling Score/BowlingScorer.R")

context("Test Bowling Scorer")

test_that("Test Gutter Game", {
  rolls <- vector()
  rolls <- rollMany(rolls, 20, 0)
  expect_equal(0, score(rolls))
})

test_that("Test All Ones Game", {
  rolls <- vector()
  rolls <- rollMany(rolls, 20, 1)
  expect_equal(20, score(rolls))
})

test_that("Test Perfect Game", {
  rolls <- vector()
  rolls <- rollMany(rolls, 12, 10)
  expect_equal(score(rolls), 300)
})

test_that("Test Single Spare", {
  rolls <- vector()
  rolls <- rollSpare(rolls)
  rolls <- roll(rolls, 3)
  rolls <- rollMany(rolls, 17, 0)
  expect_equal(16, score(rolls))
})

test_that("Test Single Strike", {
  rolls <- vector()
  rolls <- rollStrike(rolls)
  rolls <- roll(rolls, 3)
  rolls <- roll(rolls, 4)
  rolls <- rollMany(rolls, 16, 0)
  expect_equal(24, score(rolls))
})