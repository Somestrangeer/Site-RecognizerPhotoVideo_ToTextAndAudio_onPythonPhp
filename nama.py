import speech_recognition as sr


a = 'how-to-get-the-best-out-of-your-stay-in-Italy-if-youre-learning-Italian-subtitled.wav'
r = sr.Recognizer()
will_convert = sr.AudioFile(f"{a}")
with will_convert as source:
    audio = r.record(source)
converted_soundfile = r.recognize_google(audio, language=f'it-IT')
print(converted_soundfile)
