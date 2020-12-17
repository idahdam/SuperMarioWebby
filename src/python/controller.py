import pygame
import socket, os

class Controller:
    def start(self):
            dirname = os.path.dirname(__file__)
            filename = os.path.join(dirname)
            print(filename)
            # print(cwd)
            os.system('start /wait cmd /k "cd {} && cd ../gui && npm start'.format(filename))

if __name__ == "__main__":
    main = Controller()
    main.start()

