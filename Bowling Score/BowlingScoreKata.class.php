<?php

function roll ($array, $pins){
    if (sizeof($array) == 0){
        $array = array($pins);
    } else {
        array_push($array, $pins);
    }
    return $array;
  }

function score ($rolls){
    $score = 0;
    $frameIndex = 0;
    for ($frame = 0; $frame < 10; $frame++){
      if($rolls[$frameIndex] == 10){
        $score += 10 + $rolls[$frameIndex + 1] + $rolls[$frameIndex + 2];
        $frameIndex++;
      } elseif (($rolls[$frameIndex] + $rolls[$frameIndex + 1]) == 10) {
        $score += 10 + $rolls[$frameIndex + 2];
        $frameIndex += 2;
      } else {
        $score += $rolls[$frameIndex] + $rolls[$frameIndex + 1];
        $frameIndex += 2;
      }

    }
    return $score;
  }

function RollStrike() {
    $array = array();
    $array = roll($array, 10);
    return $array;
}

function RollSpare() {
    $array = array();
    $array = roll($array, 5);
    $array = roll($array, 5);
    return $array;
}

function AreEqual( $a, $b )
  {
      if ( $a != $b )
      {
          throw new Exception( 'Subjects are not equal.' );
      } else {
          $result = 'Passed';
          return $result;
      }
  }

function rollMany($n, $pins){
    $rolls = array();
    for ($i = 0; $i < $n; $i++) {
      array_push($rolls, $pins);
    }
    return $rolls;
  }

function testGutterGame() {
    $gutterRolls = rollMany(20, 0);
    $result1 = AreEqual(0, score($gutterRolls));
    $test1Name = 'Test Gutter Game';
    echo $test1Name . "\xA";
    echo $result1 . "\xA\xA";
}

function testStrikeGame() {
    $strikeRolls = rollMany(12, 10);
    $result2 = AreEqual(300, score($strikeRolls));
    $test2Name = 'Test Strike Game';
    echo $test2Name . "\xA";
    echo $result2 . "\xA\xA";
}

function testAllOnes() {
    $allOneRoll = rollMany(20, 1);
    $result3 = AreEqual(20, score($allOneRoll));
    $test3Name = 'Test All Ones';
    echo $test3Name . "\xA";
    echo $result3 . "\xA\xA";
}

function testOneSpare() {
    $oneSpareRoll = rollSpare();
    $rollaThree = roll($oneSpareRoll, 3);
    $zeroRoll = rollMany(17,0);
    $combined = array_merge($rollaThree, $zeroRoll);
    $result4 = AreEqual(16, score($combined));
    $test4Name = 'Test One Spare';
    echo $test4Name . "\xA";
    echo $result4 . "\xA\xA";
}

function testOneStrike() {
    $oneStrikeRoll = rollStrike();
    $rollAThree = roll($oneStrikeRoll, 3);
    $rollAFour = roll($rollAThree, 4);
    $zeroRoll2 = rollMany(16,0);
    $combined = array_merge($rollAFour, $zeroRoll2);
    $result5 = AreEqual(24, score($combined));
    $test5Name = 'Test One Strike';
    echo $test5Name . "\xA";
    echo $result5 . "\xA\xA";
}

testGutterGame();
testStrikeGame();
testAllOnes();
testOneSpare();
testOneStrike();
?>
