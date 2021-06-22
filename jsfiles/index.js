const hamburger = document.querySelector('#hbg');
const closeButton = document.querySelector('.btn-x');
const listItem = document.querySelectorAll('.list-item');
const dropdown = document.getElementById('drop-down');
function toggleElement() {
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
}
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', toggleElement);
}
hamburger.addEventListener('click', toggleElement);
closeButton.addEventListener('click', toggleElement);