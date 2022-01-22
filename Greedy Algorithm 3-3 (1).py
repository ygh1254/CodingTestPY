# Greedy Algorithm Problem 2 (1)
n, m = map(int, input().split())

result = 0
data = []

for _ in range(m) :
    data.append(list(map(int, input().split())))
    min_value = min(data) # Find minimum value in data.
    result = max(result, min_value) # Find max value among the minimum value and variation result

print(result)

# By using min function and max function. Much more brief code!
