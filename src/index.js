import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>GRAPHS </br>
Breadth Search</h1>
<h1>DIJKSTRA\`s SEARCH</h1>  
`;

//width search breadth search in graphs

const graph = [];
graph["a"] = ["b", "c"]; // 'a' -> node 'b' and 'c' ribs from a to b and c
graph["b"] = ["f"];
graph["c"] = ["d", "e"];
graph["d"] = ["f"];
graph["e"] = ["f", "k"];
graph["f"] = ["g"];
//graph["f"] = ["g"];
//graph["f"] = ["g"];
//graph["f"] = ["g"];
//graph["f"] = ["g"];
//graph["f"] = ["g"];

function breadthSearch(graph, start, end) {
  let queue = [];
  let way = [];
  queue.push(start);
  //console.log(queue[0]); // 'a'
  while (queue.length > 0) {
    // queue.length > 0 or this // !queue.isEmpty

    const current = queue.shift(); // take first element from queue put it to the current as it is FIFO
    way.push(current);
    if (!graph[current]) graph[current] = []; //???? its just checking ( but it wotkig without)

    if (graph[current].includes(end)) {
      console.log("way ", way);
      return true;
    } else {
      //console.log("...queue =",...queue, "...graph[current] = ",...graph[current]);
      //queue = [...queue, ...graph[current]]; //previous unwrapping arrays or

      graph[current].forEach((element) => queue.push(element)); // just push every neighbour

      console.log(...queue);
    }
  }
  return false;
}
console.log(breadthSearch(graph, "a", "g"));

/////////////////////////
