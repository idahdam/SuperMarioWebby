import sys, pyautogui, pydirectinput

gerak = sys.argv[1]

def move(arg):
    if(arg == 'jump'):
        pydirectinput.press('s')
    elif (arg == 'right'):
        pydirectinput.keyDown('k')
    elif (arg == 'left'):
        pydirectinput.keyDown('h')
    elif (arg == 'stay'):
        pydirectinput.press('s')
        pydirectinput.press('k')
        pydirectinput.press('h')             
    elif (arg == 'run'):
        pydirectinput.press('a')

move(gerak)