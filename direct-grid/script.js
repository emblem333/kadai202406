const container = document.getElementById('container');

let dragged;

container.addEventListener('dragstart',(event) => {
  dragged = event.target;
  event.target.style.opacity = 0.5;
});
container.addEventListener('dragend',(event) => {
  event.target.style.opacity = '';
});
container.addEventListener('dragover',(event)=> {
  event.preventDefault();
});
container.addEventListener('drop',(event)=> {
  event.preventDefault();
  if(event.target.className === 'grid-item'){
    container.insertBefore(dragged, event.target.nextSibling)
  }
});