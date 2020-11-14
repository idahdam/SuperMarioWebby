import pygame
import socket
from controller import Controller

width = 600
height = 400

white = (255, 255, 255) 
black = (0, 0, 0) 

class Main:
    def __init__(self):
        self.start()

    def start(self):
        pygame.font.init()
        screen = pygame.display.set_mode((width, height))
        pygame.display.set_caption('why did i do this')
        screen.fill((0,0,0))

        pygame.display.flip()

        running = True
        while running:

            font = pygame.font.Font(None, 45)
            smallFont = pygame.font.Font(None, 25)

            title = font.render(' controller ', True, black, white)
            titletextRect = title.get_rect()
            titletextRect.center = (width//2, height//2 - height//3)
        
            start = font.render(' start ', True, black, white)
            startRect = start.get_rect()
            startRect.center = (width//2, height//2 - height//10)

            stop = font.render(' stop ', True, black, white)
            stopRect = stop.get_rect()
            stopRect.center = (width//2, height//2)

            screen.blit(title, titletextRect)
            screen.blit(start, startRect)
            screen.blit(stop, stopRect)

            mouse = pygame.mouse.get_pos()
            click = pygame.mouse.get_pressed()
            hostname = socket.gethostname()
            ip_address = socket.gethostbyname(hostname)
            # print(mouse)
            
            if(257 + 85 > mouse[0] > 256 and 33 + 144 > mouse[1] > 33):
                start = font.render(' start ', True, white, black)
                startRect = start.get_rect()
                startRect.center = (width//2, height//2 - height/10)
                screen.blit(start, startRect)

                if click[0] == 1:
                    print(ip_address)
                    controller = Controller()
                    controller.start()

                    

            elif(262 + 85 > mouse[0] > 262 and 33 + 188 > mouse[1] > 33):
                stop = font.render(' stop  ', True, white, black)
                stopRect = start.get_rect()
                stopRect.center = (width//2, height//2)
                screen.blit(stop, stopRect)

                if click[0] == 1:
                    controller = Controller()
                    controller.start()

            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    quit()
                    
                pygame.display.update()



if __name__ == "__main__":
    main = Main()