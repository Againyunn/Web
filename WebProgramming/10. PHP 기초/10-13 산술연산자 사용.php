<?php 		
	$a = 3;
	$b = 5;

	$c = $a + $b;		// $c : 8
	$c++;				// $c : 9

	$c = $c + $a;		// $c : 12 
	$d = $a + $c * $b;	// $d = 3 + 12 * 5 = 63

	echo "\$d : $d";
	echo "<br>";

	$a = 10;
	$b = $a % 3;		// $b : 1
	$b--;				// $b : 0

    $c = $a - $b;		// $c : 10
    $c = $c - 5;		// $c : 5

    echo "\$c : $c";
?>     		
<!-- 
나누기 :  /
나머지 :  % 
-->
