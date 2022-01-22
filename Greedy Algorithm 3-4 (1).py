# Greedy Algotirhm Problem 3 (1)
n, k = map(int, input().split())
count = 0

while (True) :
    target = (n // k) * k
    count += n - target
    n = target
    if n < k :
        break
    n = int(n / k)
    count += 1

count += (n-1)

print(count)

# Length of code is longer than original one, but time complexity is better.
