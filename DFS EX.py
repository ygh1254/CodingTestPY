INF = 999999999

graph = [
    [0, 7, 5],
    [7, 0, INF],
    [5, INF, 0]
]

print(graph)

N_graph = [[] for _ in range(3)]

N_graph[0].append((1, 7))
N_graph[0].append((2, 5))

N_graph[1].append((0, 7))

N_graph[2].append((0, 5))

print(N_graph)


def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)


graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

visited = [False] * 9

dfs(graph, 1, visited)

# Time Complexity of DFS Algorithm is O(N)
