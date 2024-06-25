const tasks = document.querySelectorAll('.task'); //全選択
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
  task.addEventListener('dragstart', dragStart);
  task.addEventListener('dragend',dragEnd);
});

columns.forEach(column => {
  column.addEventListener('dragover',dragOver)
  column.addEventListener('dragenter',dragEnter)
  column.addEventListener('dragleave',dragLeave)
  column.addEventListener('drop',drop)
});

let draggedTask = null;

//タスクをドラッグした時の関数
function dragStart(event){
  draggedTask = event.target;
  setTimeout(() => envent.target.style.display = 'none', 0);
}

//タスクをドロップした時の関数
function dragEnd(event){
  setTimeout(() => {
    draggedTask.style.display = 'block';
    draggedTask = null;
  }, 0);
}

//ドラッグしながらドロップ対象の上にいる時のイベント
function dragOver(event){
  event.preventDefault();
}
//ドラッグしながらドロップ対象に入ってきた時のイベント
function dragEnter(event){
  event.preventDefault();
}
//ドラッグしながらドロップ対象を出た時のイベント
function dragLeave(){} //今回は何もしない（追加機能を入れたり、制限をかけられる）

//ドロップ時イベント
function drop(event){
  event.preventDefault();
  if(event.target.classList.contains('column')){
    event.target.appendChild(draggedTask);
  }
}