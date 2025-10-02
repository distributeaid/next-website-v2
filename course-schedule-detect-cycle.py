#Problem: Course Schedule (Detect Cycle in Directed Graph)
#Description

#You are given numCourses and a list of prerequisites prerequisites[i] = [a, b] meaning to take course a, you must first take course b.

#Determine if it’s possible to finish all courses.

#Equivalent to detecting a cycle in a directed graph.

#Medium-level problem using DFS / Topological Sorting.




def can_finish(numCourses, prerequisites):
    graph = [[] for _ in range(numCourses)]
    for course, prereq in prerequisites:
        graph[course].append(prereq)

    visited = [0]*numCourses  # 0=unvisited, 1=visiting, 2=visited

    def dfs(u):
        if visited[u] == 1:  # found a cycle
            return False
        if visited[u] == 2:
            return True
        visited[u] = 1
        for v in graph[u]:
            if not dfs(v):
                return False
        visited[u] = 2
        return True

    for i in range(numCourses):
        if not dfs(i):
            return False
    return True

# ---------------- Example Usage ----------------
if __name__ == "__main__":
    numCourses = 2
    prerequisites = [[1,0]]
    print("Can finish courses:", can_finish(numCourses, prerequisites))
