const gifDiv = document.querySelector('.gif_div');
const btn = document.querySelector('.btn');

for (let i = 0; i < 16; i++) {
	gifDiv.innerHTML += `<div class="each color"></div>`;
}

const eachCell = document.querySelectorAll('.each');
const eachCells = Array.from(eachCell);
let index = 0;
for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		eachCells[index].style.backgroundPosition = `${-109 * j}px ${-109 * i}px`;
		index++;
	}
}

btn.addEventListener('click', function () {
	gifDiv.classList.toggle('three_d');
	eachCells.forEach(function (each) {
		each.classList.toggle('color');
		each.classList.toggle('rotate');
	});
});
