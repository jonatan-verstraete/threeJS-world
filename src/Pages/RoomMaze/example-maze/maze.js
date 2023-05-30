/* eslint-disable  */


/**
 * Seeder, mulberry32
 * @source https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
class Seeder {
	constructor(seed = 0, ) {
	  this.s = seed
	}
	get() {
	  let t = this.s += 0x6D2B79F5;
	  t = Math.imul(t ^ t >>> 15, t | 1);
	  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	  return ((t ^ t >>> 14) >>> 0) / 4294967296;
	} 
}





let id=0
function GenerateMaze(size,seed){
	const __VISITED = 0;
	const __UNVISITED = 1;
	const height=size
	const width=size
	const maze = new Array(width);


	function getValAt(x, y) {
		if (x < 0 || x >= width || y < 0 || y >= height) {
			return null;
		}
		return maze[x][y];
	}

	function randomSort(a, b) {
		return Math.floor(seeder.get() * 4) - 1;
	}
	function scaleNum(a){
		return mapNums(a, 0, width, 0, 1)
	}
	


	const seeder=new Seeder(seed)


	/**
	 * Maze generator using Prim's algorithm
	 * adaptation of @author m0ose 
	 * cody smith   2011     m0ose at yahoo dot com
	 */

	class Cell {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.front = true;
			this.back = true;
			this.left = true;
			this.right = true;
			this.state = __UNVISITED;
		}
		getNeighbors() {
			return {
				front: getValAt(this.x, this.y - 1),
				back: getValAt(this.x, this.y + 1),
				left: getValAt(this.x - 1, this.y),
				right: getValAt(this.x + 1, this.y)
			};
		};
	}

	class Mazer {
		constructor() {
			this.totalCells = 0;
			this.visited = [];
			this.id=id++

			// init grid
			for (let i = 0; i < width; i++) {
				maze[i] = new Array(height);
				for (let j = 0; j < height; j++) {
					let newCell = new Cell(i, j, this);
					maze[i][j] = newCell;
					this.totalCells++;
				}
			}
		}

		create() {
			//get the first cell. a random one.	
			let current = maze[Math.floor(seeder.get() * width)][Math.floor(seeder.get() * height)];
			current.state = __VISITED;
			this.visited.push(current);

			let iterstop=0
			const check=()=>iterstop++>10000


			while (this.visited.length < this.totalCells) {
				if(check())return console.log('room maze: cut-loop',1)

				current = this.visited[Math.floor(seeder.get() * this.visited.length)];
				let canMove = true;
				while (canMove) {
					if(check())return console.log('room maze: cut-loop',2)

					let directions = ['left', 'right', 'front', 'back'];
					directions.sort(randomSort);
					let neighbors = current.getNeighbors();
					canMove = false;
					while (directions.length > 0 && canMove === false) {
						if(check())return console.log('room maze: cut-loop',3)

						let dir = directions.pop();
						if (neighbors[dir] && neighbors[dir].state === __UNVISITED) {
							//move there
							canMove = true;
							let past = current;
							current = neighbors[dir];
							if (dir === 'front') {
								past.front = false;
								current.back = false;
							}
							else if (dir === 'back') {
								past.back = false;
								current.front = false;
							}
							else if (dir === 'left') {
								past.left = false;
								current.right = false;
							}
							else if (dir === 'right') {
								past.right = false;
								current.left = false;
							}
							current.state = __VISITED;
							this.visited.push(current);
						}
					}
				}

			}
		};

		constructPoints() {
			let a=0
			let b=0
			const cells = [];
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					const c = maze[x][y];
					if (c) {
						if (y != height - 1 && c.back === true) {
							a++
							cells.push({
								rotate: false,
								x: scaleNum(x),
								y: scaleNum(y + 1)
							});
						}
						if (x !== width - 1 && c.right === true) {
							b++
							cells.push({
								rotate: true,
								x: scaleNum(x + 1),
								y: scaleNum(y)
							});
						}
					}
				}
			}
			//console.log("back:",a,"right:",b)
			return cells;
		};


		constructVertices() {
			if (this.totalCells <= 0) {
				return null;
			}
			this.vertices = [];
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					const c = maze[x][y];
					if (c) {
						if (y !== height - 1 && c.back === true){
							this.vertices.push({
								p1: {
									x: x,
									y: y + 1
								},
								p2: {
									x: x + 1,
									y: y + 1
								}
							});
						}
						if (x !== width - 1 && c.right === true){
							this.vertices.push({
								p1: {
									x: x + 1,
									y: y
								},
								p2: {
									x: x + 1,
									y: y + 1
								}
							});
						}
					}
				}
			}
			return this.vertices
		};

		draw() {
			this.constructVertices();
			let xRatio = cnv.width / width;
			let yRatio = cnv.height / height;

			for (let v = 0; v < this.vertices.length; v++) {
				const { p1, p2 } = this.vertices[v];
				ctx.strokeStyle = "gray";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(p1.x * xRatio, p1.y * yRatio);
				ctx.lineTo(p2.x * xRatio, p2.y * yRatio);
				ctx.closePath();
				ctx.stroke();

				if (p1.x == 3 && p1.y == 3) {
					markPoint(p1.x * xRatio, p1.y * yRatio, 20);
				}
				else{
					point(p1.x * xRatio, p1.y * yRatio, 5, "blue");
				}
					
				fillText(v + ": " + JSON.stringify(p1), ((p1.x * xRatio) + p2.x * xRatio) / 2 - 20, (p1.y * yRatio) + 20);
			}
		};

		init() {
			this.create();
			//this.draw();
			return{
				vertices: this.constructVertices(),
				points: this.constructPoints(),
			}
		}
	}






	const m = new Mazer();
	return m.init();
}