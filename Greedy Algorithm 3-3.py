# Greedy Algorithm Problem 2
n, m = map(int, input().split())

data = []

for _ in range(m) :
    data.append(list(map(int, input().split())))
    
results = []

for i in range(n) :
    data[i].sort()
    results.append(data[i][0])

results.sort(reverse = True)
result = results[0]

print(result)

# Not that much hard
