import eel

eel.init("web")

@eel.expose
def tester():
    print("hello")
    return "hell0"

eel.start('index.html')