# Greedy Algorithm Problem 3-2 (1)
result = 0
i = 0
n,m,k = map(int, input().split())

data = list(map(int, input().split()))
data.sort(reverse = True)

count = int(m / (k + 1) * k + m % (k + 1))

result += data[0] * count
result += data[1] * (m - count)

print(result)

# By using generalization realated with progression
