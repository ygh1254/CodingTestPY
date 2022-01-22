# Implementation Example 1(1)
n = int(input())
plans = input().split()
location = [1, 1]

move = ['L', 'R', 'U', 'D']
x_move = [0, 0, -1, 1]
y_move = [-1, 1, 0, 0]

for plan in plans :
    for i in range(4) :
        if plan == move[i] :
            nx = location[0] + x_move[i]
            ny = location[1] + y_move[i]
    if nx < 1 or nx > n or ny < 1 or ny > n :
        continue
    location[0] = nx
    location[1] = ny

print(location)
# Change location after check whether nx or ny meets some conditions or not.
