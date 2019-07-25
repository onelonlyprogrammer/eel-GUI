import eel

eel.init("web") #telling eel where folder with html is

@eel.expose #exposes function right below to javascript
def main(date, team):
    print(date + team)
    return "got" + date + team

eel.start('index.html', size=(500, 250)) #lounches GUI
