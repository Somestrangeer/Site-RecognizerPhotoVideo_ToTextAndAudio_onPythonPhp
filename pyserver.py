from bottle import route, run, template, response, get, request, redirect, view, static_file
import requests
import subprocess
import os
import speech_recognition as sr
from pydub import AudioSegment


def convert_video_to_audio_ffmpeg(video_file, name_file):
	subprocess.call(["ffmpeg", "-y", "-i", video_file, f"{name_file}.mp3"],
		stdout=subprocess.DEVNULL,
		stderr=subprocess.STDOUT)
	tts()

def tts():
  global converted_soundfile
  global src_filename
  global dest_filename
  src_filename = f'{name2}.mp3'
  dest_filename = f'{name2}.wav'
  sound = AudioSegment.from_mp3(f"{src_filename}")
  sound.export(f"{dest_filename}", format="wav")
  r = sr.Recognizer()
  will_convert = sr.AudioFile(f"{dest_filename}")
  with will_convert as source:
  	audio = r.record(source)
  try:
  	converted_soundfile = r.recognize_google(audio, language=f'{language_target[:-1]}-{language_target[:-1].upper()}')
  except:
  	converted_soundfile = "Произошла ошибка"
       

@route('/download')
def down():
	return template("recognition.html", name=converted_soundfile, audiofile=dest_filename)

@route('/get_files', method='POST')
def getfiles():
	global language_target
	global name2
	title_of_video = request.files.get('video_file')
	language_target = request.forms.get('language[]')
	name = [os.path.splitext(title_of_video.filename)]
	name1 = "" #full name
	name2 = "" #shot name without format
	for i in range(len(name)):
		name1+=name[i][0]
		name2+=name[i][0]
		name1+=name[i][1]
	print(name1, name2)
	title_of_video.save(name1, name2)
	convert_video_to_audio_ffmpeg(name1, name2)
	os.remove(name1)
	os.remove(src_filename)
	redirect("/download")
        

def exempi():
	@route('/downloading')
	def greet1():
		return template("index_video.html")
	run(port=8080, debug=True)


@route('/static/<filename>')
def serve_pictures(filename):
   return static_file(filename, root='./images')

@route('/static2/<name>')
def serve_styles(name):
	return static_file(name, root='./styles')

@route('/static3/<name1>')
def serve_scrs(name1):
	return static_file(name1, root='./scripts')

@route('/static4/<audioname>')
def serve_scrs(audioname):
	return static_file(audioname, root='.')

if __name__ == '__main__':
	exempi()
