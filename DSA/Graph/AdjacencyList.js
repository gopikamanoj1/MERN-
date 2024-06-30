class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
      if( !this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=[]
      }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)

    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!==vertex2)
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=>v!==vertex1)
    }
    removeVertex(vertex){
        while( this.adjacencyList[vertex].length){
            const adjecentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for( let vertex in this.adjacencyList){
            console.log(vertex  + '->' + this.adjacencyList[vertex].join(', '))
        }
    }
}
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A','C')
graph.display();
