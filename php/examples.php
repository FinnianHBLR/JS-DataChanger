<!DOCTYPE html>
<html>
<body>


<?php
// Printing "lo" (The first message sent on the internet in 1969).

echo "lo" . "<br>";

// Vars
$num = "lo";
// echo "What was the first message on the internet in 1969?: " . $num . "<br>";
echo "What was the first message on the internet in 1969?: $num " . "<br>";
$x = 6;
$y = 9;

// Functions
function calc($a, $b){
    return $a + $b;
}


echo "simple maths = " . calc($x, $y) . "<br>";

// var dump
print "<h3>" . "Print function! " . calc(90, 32) . "<h3>" . "<br>";
print var_dump($x) . "Is the var type of \$x : $x" . "<br>";

// Arrays
$carArray = array("BMW", "Jaguar", "Nissan", "Kia");

// For loops
for($i = 0; $i < count($carArray); $i++){
    print "$carArray[$i] ";
}

// Classes

class Car {
    public $model;
    public $id;
    public function __construct($model, $id){
        $this->model = $model;
        $this->id = $id;
    }
    public function getModelAndID() {
        return "We got a " . $this->model . " with an ID of " . $this->id;
    }
    public function getModel() {
        return $this->model;
    }
}

$parkedCar = new Car("BMW", "325ci");
print $parkedCar -> getModelAndID();

// If statement
if($parkedCar-> getModel() == "BMW") {
    print $parkedCar-> getModel;
}

?> 

</body>
</html>
