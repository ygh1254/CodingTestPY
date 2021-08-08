# Implementation Problem 2
n, m = map(int, input().split())
a, b, d = map(int, input().split())
count = 0

direction = [0, 1, 2, 3]
a_move = [-1, 0, 1, 0]
b_move = [0, 1, 0, -1]
1 
map_data = []
for _ in range(m) :
    map_data.append(list(map(int, input().split())))

history = []
history.append((a,b))

keep = 0

while (keep != 1) :
    next_d = (d + 1) % 4
    for i in range(len(direction)) :
        next_a = a + a_move[i]
        next_b = b + b_move[i]
        # If there is undiscovered space in left side
        if map_data[next_a][next_b] == 0 and (next_a,next_b) not in history :
            d = next_d
            a = next_a
            b = next_b
            history.append((a,b))
            continue
        # If there is no undiscovered space in left side
        d = next_d
    # If every spaces are discovered or sea
    for i in range(len(direction)) :
        temp = 0
        next_a = a + a_move[i]
        next_b = b + b_move[i]
        if (map_data[next_a][next_b] not in history) or (map_data[next_a][next_b] != 1) :
            # Look backward
            next_a += a_move[d+2]
            next_b += b_move[d+2]
            if map_data[next_a][next_b] == 1 :
                keep = 1

        
count = len(history)

print(count)
# It was very difficult to implement. Espicially, the case if every spaces are discovered or sea was hard. I think there is better way to execute the problem.
