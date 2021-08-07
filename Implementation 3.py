# Implementation Problem 1
location = input()
count = 0

x = ord(location[0]) - ord('a') + 1
y = int(location[1])

moves = ['UL', 'UR', 'RU', 'RD', 'DR', 'DL', 'LD', 'LU']
x_move = [-1, 1, 2, 2, 1, -1, -2, -2]
y_move = [-2, -2, -1, 1, 2, 2, 1, -1]

for i in range(len(moves)) :
    next_x = x + x_move[i]
    next_y = y + y_move[i]
    if next_x <= 8 and next_x >= 1 and next_y <= 8 and next_y >= 1 :
        count += 1
        
print(count)
# How can I use ASCII code? -> By using ord() function!!
