# DFS/BFS Problem 1
from collections import deque
#Width and Height is entered
n, m = map(int, input().split())

# Map data is initialized
data = []

# Map data is entered
for _ in range(n):
    data.append(list(map(int, input())))

_data = data
truetable = [[1] * m] * n


def dfs(_data, truetable, x, y):
    if _data == truetable or x < 0 or y < 0 or x == m or y == n:
        # Do not execute
        return 0
    if _data[x][y] == 0:
        _data[x][y] = 1
        print(_data, x, y)
    if _data[x][y+1] == 0:
        # x or y exceed m or n => list index error occurs
        dfs(_data, truetable, x, y+1)
        print(_data, x, y)
    if _data[x+1][y] == 0:
        dfs(_data, truetable, x+1, y)
        print(_data, x, y)
    # Icecream number is needed


dfs(_data, truetable, 0, 0)
