/* eslint-disable  */

interface ICell {
	x: number
	y: number
	up?: boolean
	down?: boolean
	left?: boolean
	right?: boolean
	state: number
}

let __VISITED:number = 0;
let __UNVISITED:number = 1;
let maze:Array<any>=[]
let seeder:Seeder={get:()=>0} as any
let width:number=0
let height:number=0


/**
 * Seeder
 * @name mulberry32
 * @source https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
class Seeder {
	private s:number =0
	constructor(seed = 0, ) {
		this.s = seed
	}
	get():number {
		let t = this.s += 0x6D2B79F5;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	} 
}

class Cell implements ICell {
	x:number = 0;
	y:number = 0;
	up:boolean = true;
	down:boolean = true;
	left:boolean = true;
	right:boolean = true;
	state = __UNVISITED;

	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
		this.up = true;
		this.down = true;
		this.left = true;
		this.right = true;
		this.state = __UNVISITED;
	}
	getNeighbors() {
		return {
			up: getValAt(this.x, this.y - 1),
			down: getValAt(this.x, this.y + 1),
			left: getValAt(this.x - 1, this.y),
			right: getValAt(this.x + 1, this.y)
		}
	};
}
function getValAt(x:number, y:number) {
	if (x < 0 || x >= width || y < 0 || y >= height) {
		return null;
	}
	return maze[x][y];
}
function randomSort(args:any):number {
	return Math.floor(seeder.get() * 4) - 1;
}

/**
 * Maze generator using Prim's algorithm
 * own implementation of the a maze of @author m0ose
 * cody smith   2011     m0ose at yahoo dot com
 */
export const GenerateMaze = ({size, seed}:{size:number, seed?:number}):Array<object> => {
    width=size as any
    height=size as any//mazeHeight||mazeWidth as any

	maze=new Array(width);
	seeder=new Seeder(seed)



	class Mazer {
        private totalCells:number = 0;
        private visited:Array<any> = [];
		private cells:Array<any>=[]
		constructor() {
			this.cells=[]
			for (let i = 0; i < width; i++) {
				maze[i] = new Array(height);
				for (let j = 0; j < height; j++) {
					let newCell = new Cell(i, j);
					maze[i][j] = newCell;
					this.totalCells++;
				}
			}
		}

		constructMaze() {
			let current = maze[Math.floor(seeder.get() * width)][Math.floor(seeder.get() * height)];
			current.state = __VISITED;
			this.visited.push(current);

			let stopLoop=0
			const check=()=>++stopLoop>10000;

			while (this.visited.length < this.totalCells) {
				if(check())return console.error('Infinite loop',1)
				current = this.visited[Math.floor(seeder.get() * this.visited.length)];
				let canMove = true;
				while (canMove) {
					if(check())return console.error('Infinite loop',2)
					let directions = ['left', 'right', 'up', 'down'];
					directions.sort(randomSort);

					let neighbors = current.getNeighbors();
					canMove = false;
					while (directions.length > 0 && canMove == false) {
						if(check())return console.error('Infinite loop',3)
						let dir = directions.pop() as any

						if (neighbors[dir] && neighbors[dir].state == __UNVISITED) {
							//move there
							canMove = true;
							let past = current;
							current = neighbors[dir];
							if (dir == 'up') {
								past.up = false;
								current.down = false;
							}
							else if (dir == 'down') {
								past.down = false;
								current.up = false;
							}
							else if (dir == 'left') {
								past.left = false;
								current.right = false;
							}
							else if (dir == 'right') {
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
		constructPoints(){
			this.cells.length=0

			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					const cell = maze[x][y];
					if (cell){
						if (y!=height-1 && cell.down === true){
							this.cells.push({
								rotate:false,
								x: x,
								y: y+0.5
							});
						}
						if (x!==width-1 && cell.right === true){
							this.cells.push({
								rotate:true,
								x: x+0.5,
								y: y
							});
						}
					}
				}
			}
		}
		init() {
			this.constructMaze();
			this.constructPoints();
			return this.cells
		}
	}

	const daMaze = new Mazer();
	return daMaze.init();
}

