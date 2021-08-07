# Implementation Practice 2
n = int(input())
count = 0

time = [0, 0, 0]

while(time[0] != n + 1) :
    time[2] += 1
    if time[2] == 60 :
        time[1] += 1
        time[2] = 0
    if time[1] == 60 :
        time[0] += 1
        time[1] = 0
    if '3' in (str(time[0]) + str(time[1]) + str(time[2])) :
        count += 1

print(count)
# Use 'in' statement! I think while loop can be more simple than now.
