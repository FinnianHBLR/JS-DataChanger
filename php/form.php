<html>
<body>

<?php
    $name = "";
    $email = "";
    // What's up React components!
    function debugLogger(){
        return $_POST["name"] . $_POST["email"];
    }
    
    function quickReturn(){
        return "<a href=\"http://localhost/tester/index.html\"> Return </a>";
    }
    
    // Check if if name or email are vaild.
    if(empty($_POST["name"]) || (empty($_POST["email"]))) {
        echo "Sorry, must have missed your fantastic name or amazing email. Please try again." . "<br>"; 
        echo quickReturn();
        // Log debug info.
        echo debugLogger();
    } else {
        echo "Great " . $_POST["name"] . "! We'll get back to you soon at " . $_POST["email"] . "." . "<br>";
        echo quickReturn();
    }
?>


</body>
</html> 