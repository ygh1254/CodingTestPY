# Implementaion Example 1
n = int(input())
plans = input().split()
location = [1, 1]

move = ['L', 'R', 'U', 'D']
x_move = [0, 0, -1, 1]
y_move = [-1, 1, 0, 0]

for plan in plans :
    for i in range(4) :
        if location[0] == 1 and plan == move[2] :
            continue
        if location[1] == 1 and plan == move[0] :
            continue
        if location[0] == n and plan == move[3] :
            continue
        if location[1] == n and plan == move[1] :
            continue
        if plan == move[i] :
            location[0] += x_move[i]
            location[1] += y_move[i]

print(location)
# There are too many continue statements.
