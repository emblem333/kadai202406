document.getElementById('add-item').
addEventListener('click' ,() => {
  const container = document.getElementById('container');
  const newItem = document.createElement('div');
  newItem.className = 'grid-item'
  newItem.textContent = container.children.length + 1;
  container.appendChild(newItem);
});