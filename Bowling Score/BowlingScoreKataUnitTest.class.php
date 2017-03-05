--TEST--
This test will check for various bowling scores
--FILE--
<?php
$g = new BowlingGame;

private function ManyRoll($pins, $n){
  for ($i = 0; $i < $n; $i++) {
    $g.roll($pins)
  }
}
?>

--EXPECT--
