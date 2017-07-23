<?php

$directory = "../images/pets/";
$subFolders = ['Freddy', 'Ramses', 'Ulala'];

foreach($subFolders as $subFolder) {

    $output = "";
    $currentPath = $directory . $subFolder . "/";

    foreach (new DirectoryIterator($currentPath) as $file) {
        
        if ($file->isFile()) {
            // print_r($file->getFilename() . "\n");
            $output .= "'". $file->getFilename() . "', " ;
        }
    }

    if (!empty($output)) {
        $myfile = fopen($subFolder . ".txt", "w") or die("Unable to open file!");
        fwrite($myfile, $output);
        fclose($myfile);
    }
}

$directory = "../images/timeline/";
$subFolders = ['wedding', 'Ichinomiya', 'Tokyo'];

foreach($subFolders as $subFolder) {

    $output = "";
    $currentPath = $directory . $subFolder . "/";

    foreach (new DirectoryIterator($currentPath) as $file) {
        
        if ($file->isFile()) {
            // print_r($file->getFilename() . "\n");
            $output .= "'". $file->getFilename() . "', " ;
        }
    }

    if (!empty($output)) {
        $myfile = fopen($subFolder . ".txt", "w") or die("Unable to open file!");
        fwrite($myfile, $output);
        fclose($myfile);
    }
}

?>
