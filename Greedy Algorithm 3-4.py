# Greedy Algorithm Problem 3
n, k = map(int, input().split())
count = 0

while (n != 1) :
    count += 1
    if n % k == 0 :
        n /= k
    else :
        n -= 1

print(count)

# Although code is very shot, it is not the best way to slove the problem. The code have to execute if and else statements in while loop too much.
