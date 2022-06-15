const container = document.querySelector('#container');
let gridSize = 16; //default
resizeGrid(16);

document.querySelector('#button').addEventListener('click', function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      };
    setGridSize();
});

document.querySelector('#reset').addEventListener('click', function() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.classList.remove('draw');});
});


function setGridSize() {
    let userGrid = prompt("What Size Grid?"); //need to set maximum to 100
    if (userGrid > 100) {
        return setGridSize()
    } else {
        gridSize = userGrid;
        return resizeGrid(gridSize)
    }
}

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

