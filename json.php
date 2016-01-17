

<?php


$file = fopen('todos.json', 'a') ;
if (filesize('todos.json') == 0){

	$json ="[" . $_POST['json'] ."]" ;
}

else
{
	$str=file_get_contents('todos.json');


	$str=str_replace("]", ",",$str);
	file_put_contents('todos.json', $str);
	$json =$_POST['json'] ."]" ;
}

fwrite($file, $json);
fclose($file);

?>
