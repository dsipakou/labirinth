export const dijkstra = (maze) => {
  let sizeMatrix = new Array(maze.length).fill(-1).map(() => new Array(maze[0].length).fill(-1));
  let visitedMatrix = new Array(maze.length).fill(false).map(() => new Array(maze[0].length).fill(false));
  for (let i = 0; i < maze.length; i += 1) {
    for (let j = 0; j < maze[0].length; j += 1) {
      if (maze[i][j] === 0) {
        sizeMatrix[i][j] = Infinity;
        visitedMatrix[i][j] = true;
      }
    }
  }

  let stopFlag = false
  while (!stopFlag) {
    stopFlag = true;
  }
  console.log(sizeMatrix);
}
