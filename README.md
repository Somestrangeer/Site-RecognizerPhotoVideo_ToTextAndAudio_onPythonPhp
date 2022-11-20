# Site-RecognizerPhotoVideo_ToTextAndAudio_onPythonPhp

Этот проект был расчитан на отработку навыков HTML и CSS (вёрстка сайта), а так же симбиоз JS, PHP и Python на одном из небольших фрейморков - ***Bottle***.

Написанный мной сайт распознаёт текст с любой фотографии через библиотеку ***Tesseract OCR*** на PHP, а так же распознаёт речь с видео с помощью библиотеки ***speech_recognition*** на Python
## Почему не DJango?

* ***DJango*** следует использовать, впервую очередь, для крупных проектов с учётом того, что Python бдует являться целевым языком. В моём случае проект идёт по ветке PHP и Python, потому мой выбор пал на довольно простой в обращении фреймворк - ***Bottle***.

### Пример использования фреймворка Bottle
```python
from bottle import route, run, template, static_file

def exempi():
	@route('/downloading')
	def greet1():
		return template("index_video.html")
	run(port=8080, debug=True)


@route('/static/<filename>')
def serve_pictures(filename):
   return static_file(filename, root='./images') #для статических файлов

if __name__ == '__main__':
	exempi()
```
## Зачем использовать PHP и Python в одном проекте?

 * Действительно, использование PHP и Python в одной связке не имеет смысла, так как это создаёт комплекс проблем, а к этому добавим бесполезность использования PHP в современных реалиях (лучше использовать чистый Python, C#, C++ и т.д). Однако я решил взять PHP для эксперимента.

* Во время разработки на PHP возникло множество проблем, в особенности с библиотекой ***Tesseract OCR***. Для установки каких-либо библиотек на PHP вам понадобится ***Composer*** и при установки обязательно следует разместить файлы в дериктории проекта, иначе PHP не поймёт, что вы от него требуете. Так же необходимо через оф. сайт докачать нужные языки.

### Пример использования Tesseract OCR
```PHP
<?php  
require_once 'директория проекта\autoload.php';
use thiagoalessio\TesseractOCR\TesseractOCR;
$text = new TesseractOCR($name); //$name - наш файл
echo($text)
    ->executable('директория библиотеки\Tesseract-OCR\tesseract.exe')
    ->lang($lan[0]) //установка языка
    ->run(); //активация
    unlink($name);
?>
```

Для удобства ***CSS*** файлы и ***JS*** были помещены в отдельные папки, как и изображения. Были соблюдены медиа-запросы на 4 типа экранов.
