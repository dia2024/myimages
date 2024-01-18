const generateBtn = document.getElementById('generateBtn');
const gridContainer = document.getElementById('gridContainer');

gridContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    event.target.remove();
  }
});

generateBtn.addEventListener('click', () => {
  if (gridContainer.children.length > 30) {
    if (confirm("모든 사진을 지우시겠습니까?")) {
      gridContainer.innerHTML = "";
    }
  } else {
    const randomNumber = Math.floor(Math.random() * 1000);
    const img = document.createElement('img');
    img.src = `https://picsum.photos/200/200?random=${randomNumber}`;
    gridContainer.appendChild(img);
  }
});
