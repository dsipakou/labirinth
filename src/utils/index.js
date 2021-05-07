export const dijkstra = (maze) => {
  let sizeMatrix = new Array(maze.length).fill(-1).map(() => new Array(maze[0].length).fill(-1));
  for (let i = 0; i < maze.length; i += 1) {
    for (let j = 0; j < maze[0].length; j += 1) {
      if (maze[i][j] === 0) {
        sizeMatrix[i][j] = Infinity;
      }
    }
  }
  console.log(sizeMatrix);
}
