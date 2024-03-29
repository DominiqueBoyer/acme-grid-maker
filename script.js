const button = document.querySelector('button');
const inputRow = document.querySelector('[name="rows"]');
const inputCol = document.querySelector('[name="columns"]');

const form =document.querySelector('form');
const errorRow = document.querySelector('#errorRow');
const errorCol = document.querySelector('#errorCol');
const grid = document.querySelector('#grid');
const index = document.querySelector('#index');


form.addEventListener('submit',(ev)=>{
  ev.preventDefault();;
  grid.innerHTML = '';
  index.innerHTML = '';
  let row = inputRow.value;
  let column = inputCol.value
  render();
});



inputRow.addEventListener('keyup', (ev)=>{
  const row = ev.target.value;
  if (row < 1 || row > 50){
    errorRow.innerHTML = 'rows must be between 1 and 50';
  }
  else{
    errorRow.innerHTML = '';
  }
});

inputCol.addEventListener('keyup', (ev)=>{
  if (ev.target.value < 1 || ev.target.value >50){
    errorCol.innerHTML = 'columns must be between 1 and 50';
  }
  else{
    errorCol.innerHTML = '';
  }
});

const render = ()=>{
  for (let i=0; i<inputRow.value; i++){
    let row = `<div id = "${i}">`
    for (let j=0; j<inputCol.value; j++){
      row = row + `<div style="background-color:"></div>`
    }
    row = row + `</div>`;
    grid.innerHTML = grid. innerHTML + row;
  }
};

grid.addEventListener('click', (ev)=>{
  const cell = ev.target;
  const row = cell.parentNode;
  const cdx = [...row.children].indexOf(cell);
  const rdx = [...row.parentNode.children].indexOf(row)
  //console.log(cdx, rdx);
  index.innerHTML = `rIdx: ${rdx} cIdx: ${cdx}`;
  ev.target.setAttribute('style', 'background-color:dodgerblue');


});
