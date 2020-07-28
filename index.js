const SCREEN_W = window.innerWidth - 40;
const SCREEN_H = window.innerHeight - 40;

const canvas = document.querySelector("canvas");
canvas.width = SCREEN_W;
canvas.height = SCREEN_H;
canvas.style.backgroundColor = "gray";
const ctx = canvas.getContext("2d");

const x = 100;
const y = 100;
const sizeX = 40;
const sizeY = 30;

const colors = [
	"red",
	"blue",
	"yellow",
	"pink",
	"green"
];

for (let j = 0; j < 8; j++) {
	for (let i = 0; i < 10; i++) {
		ctx.fillStyle = colors[(i + j) % colors.length];
		const positionX = x + i * (sizeX + 4);
		const positionY = y + j * (sizeY + 4) + i * 10;
		ctx.fillRect(positionX, positionY, sizeX, sizeY);
	}
}

