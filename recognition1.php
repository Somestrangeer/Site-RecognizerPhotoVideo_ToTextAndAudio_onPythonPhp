<?php
session_start();
if ($_FILES && $_FILES["file"]["error"]== UPLOAD_ERR_OK)
{
    $name = $_FILES["file"]["name"];
    move_uploaded_file($_FILES["file"]["tmp_name"], $name);
}
$lan = $_POST['language'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Converting</title>
		<link rel="stylesheet" href="styles\style-for-ready.css">
		<link rel="stylesheet" href="styles\style-for-ready-800.css">
		<link rel="stylesheet" href="styles\style-for-ready-1024.css">
		<link rel="stylesheet" href="styles\style-for-ready-1280.css">
		<link rel="stylesheet" href="styles\style-for-ready-1600.css">
		<link rel="stylesheet" href="styles\style-for-ready-1920.css">
	</head>
	<body>
		<main>
			<div id="page" class="preloader">
				<div class="loader"></div>
			</div>
			<div class="third-container">
				<span>Recognition result</span>
				<div class="result-text">
					<form method="post" action="get-word-file.php" name="word-download" enctype="multipart/form-data">
						<textarea id="text-copy" name="text_copy"><?php  require_once 'C:\Users\Dr.House\vendor\autoload.php';
									use thiagoalessio\TesseractOCR\TesseractOCR;
									$text = new TesseractOCR($name);
									echo($text)
								  	->executable('C:\Program Files (x86)\Tesseract-OCR\tesseract.exe')
								 	->lang($lan[0])
								 	->run();
									unlink($name);
						?></textarea>
						<div class="copy-text" onclick="myFunction()"><img src="images\copy-text-press-button.png" id="copy-img"><p>Copy text</p></div>
						<button type="submit" class="word-convert"><img src="images\word.png" id="word-img"><p>Download as Word</p></button>
					</form>
					<div class="back-of-site" onclick="redirectMainSite()"><img src="images\4343.png" class="back-world"><p>Back</p></div>	
					<img src="images\back1.png">
				</div>
			</div>
		</main>
		<script src="scripts\copy.js"></script>
		<script src="scripts\redirect-download.js"></script>
	</body>
</html>
