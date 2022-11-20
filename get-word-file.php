<?php 
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
require_once 'vendor\autoload.php';
$document = new \PhpOffice\PhpWord\TemplateProcessor('./example.docx ');
$uploaddir = __DIR__;
$output = 'Recognizied_file.docx';
$text_copy = $_POST["text_copy"];
echo $text_copy;
$document->setValue("text_copy", $text_copy);
$document->saveAs($output);
$file = $output;
header('Content-Description: File Transfer');
header('Content-Type: application/vnd.opendocxformats-officedocument.wordprocessingml.document');
header('Content-Disposition: attachment; filename='.$file.'');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: ' . filesize($file));
ob_clean();
flush();
readfile($output);
unlink($output); 
exit();
} 			