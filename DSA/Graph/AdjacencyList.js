class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjecentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjecentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + this.adjacencyList[vertex].join(", "));
    }
  }
  checkCycle(start) {
    let visited = {};
    let queue = [start];

    while (queue.length) {
      let current = queue.shift();
      visited[current] = 1;

      for (let v of this.adjacencyList[current]) {
        if (!visited[v]) {
          queue.push(v);
          visited[v] = -1;
        } else if (visited[v] == -1) {
          return true;
        }
      }
    }
    return false;
  }
  
  dfs(start){
    const result=[]
    const visited={}
    const adjacencyList= this.adjacencyList

    (function dfsHelper(vertex){
      if(!vertex){
        return
      }
      visited[vertex]=true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor)=>{
        
        if(!visited[neighbor]){
          dfsHelper(neighbor)
        }
      })
    })(start)

  }


  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      let current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }






}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "C");
graph.display();
console.log(graph.checkCycle("A"));
