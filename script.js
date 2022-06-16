const container = document.querySelector('#container');
let gridSize = 16; //default
resizeGrid(16);

document.querySelector('#reset').addEventListener('click', function() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.classList.remove('draw');});
});


document.querySelector('#sizeRange').addEventListener('input', function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      };
    const input = document.getElementById("sizeRange").value;
    gridSize = input;
    return resizeGrid(gridSize)
});

function resizeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++){
        let column = document.createElement('div');
        column.setAttribute('id',`column-${i}`);
        column.classList.add('column');
        container.appendChild(column);

        for (let c = 0; c < gridSize; c++){
            let block = document.createElement('div');
            block.setAttribute('id',`block-${c}`);
            block.classList.add('block');
            column.appendChild(block);
        };
    };
    
    draw();
}

function draw() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.addEventListener('pointerover', () => {
        block.classList.add('draw')
      });
    });
}

