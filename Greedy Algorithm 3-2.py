# Greedy Algorithm Problem 1
result = 0
i = 0
n,m,k = map(int, input().split()) # Use map function

data = list(map(int, input().split()))
data.sort(reverse = True)

while(True) :
    if i == m :
        break
    for _ in range(k) :
        result += data[0]
        i += 1
    result += data[1]
    i += 1
    
print(result)

# What I missed was, using map function and using loop statement well.
