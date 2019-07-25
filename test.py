import eel

eel.init("web")

@eel.expose
def main(date, team):
    print(date + team)
    return "got" + date + team

eel.start('index.html', size=(500, 250))
