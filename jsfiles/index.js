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










let messsage = [];
projectDetails = (e) => {
	e.preventDefault
	const popUpText = document.createElement('p');
}

const seeProject = document.querySelectorAll('.project');
for (let i = 0; i < seeProject.length; i++) {
	seeProject[i].addEventListener('click', projectDetails);

}
const mobileProjects = document.querySelector('.project-works');
const desktopProjects = document.querySelector('.grid-container')

const projects = [mobileProjects, desktopProjects];
for (let i = 0; i < projects.length; i++){
	console.log(projects[i]);
}




// console.log(mobileProjects);
// console.log(desktopProjects);

