// making use of the Js import modules
import data from './data.js';
//Mobile section 
const menuBtn = document.querySelector('.menu-btn');
const menuOpen = document.querySelector('header nav ul');
const menuClose = document.querySelector('.close-menu button');
const menuItems = [...document.querySelectorAll('header nav ul li a')];
menuBtn.addEventListener('click', () => menuOpen.classList.add('mobileMenu'));
menuClose.addEventListener('click', () => menuOpen.classList.remove('mobileMenu'));
menuItems.forEach((item) => item.addEventListener('click', () => menuOpen.classList.remove('mobileMenu')));
window.addEventListener('resize', () => {
	if (window.innerWidth > 767.98) {
		menuOpen.classList.remove('mobileMenu');
	}
});

// Accessing projects from Data.js 
const myProjects = data.projects;

// Access portfolio Data
const projectsWrap = document.querySelector('.works .work-items');
const implementProjects = () => {
  myProjects.forEach((item) => {
    // Create the details of project
    const list = document.createElement('li');
    list.classList.add('work-item');
    // create project image with the createelement method
    const workImgWrap = document.createElement('div');
    workImgWrap.classList.add('work-img');
    const workImg = document.createElement('img');
    workImg.src = item.projectImage;
    workImg.alt = item.projectName;
    workImgWrap.appendChild(workImg);
    list.appendChild(workImgWrap);
    const workInfoWrap = document.createElement('div');
    workInfoWrap.classList.add('work-info');
    // Create heading with createelement method
    const projectHead = document.createElement('h2');
    projectHead.innerText = item.projectName;
    workInfoWrap.appendChild(projectHead);
    // Create project details
    const workInfoDetails = document.createElement('div');
    workInfoDetails.classList.add('work-info-details');
    // create company name and details
    const companyName = document.createElement('p');
    companyName.classList.add('company-name');
    companyName.innerText = item.companyName;
    workInfoDetails.appendChild(companyName);
    // the Dot image
    const dotImg = document.createElement('img');
    dotImg.src = './images/dot.png';
    dotImg.alt = '';
    workInfoDetails.appendChild(dotImg);
    // project details details 
    const projectPosition = document.createElement('p');
    projectPosition.classList.add('position');
    projectPosition.innerText = item.projectPosition;
    workInfoDetails.appendChild(projectPosition);
    //Dotted image
    const secDotImg = document.createElement('img');
    secDotImg.src = './images/dot.png';
    secDotImg.alt = '';
    workInfoDetails.appendChild(secDotImg);
    // Project date
    const projectDate = document.createElement('p');
    projectDate.classList.add('date');
    projectDate.innerText = item.projectDate;
    workInfoDetails.appendChild(projectDate);
    workInfoWrap.appendChild(workInfoDetails);
    // Project description
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.innerText = item.projectDescription;
    workInfoWrap.appendChild(projectDescription);
    // project technologies
    const projectTechnologies = document.createElement('ul');
    projectTechnologies.classList.add('project-technologies');
    item.projectTechnologies.forEach((tech) => {
      const techItem = document.createElement('li');
      techItem.innerText = tech;
      projectTechnologies.appendChild(techItem);
    });
    workInfoWrap.appendChild(projectTechnologies);
    // See project button
    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.type = 'button';
    seeMoreBtn.classList.add('see-project');
    seeMoreBtn.innerText = 'See Project';
    seeMoreBtn.dataset.key = item.key;
    workInfoWrap.appendChild(seeMoreBtn);
    list.appendChild(workInfoWrap);
    projectsWrap.appendChild(list);
  });
};

implementProjects();

// Implementing pop up for project
const portfolioPopUpClose = document.querySelector('.portfolio-window-body .close-portfolio-window-btn button');
const projectPopUpWrap = document.querySelector('.portfolio-window-wrap');
const projectPopUpBody = document.querySelector('.portfolio-window-body');
const seeProjectBtns = [...document.querySelectorAll('.works .work-items .work-item .work-info button')];
const showProjectPopUpWindow = (btn) => {
  projectPopUpBody.style.display = 'block';
  projectPopUpWrap.style.display = 'block';
  const portfolioProject = myProjects.filter((project) => project.key === Number(btn.dataset.key));
  // Name of project
  document.querySelector('.portfolio-window-body h2').innerText = portfolioProject[0].projectName;
  // project image
  const projectImage = document.querySelector('.portfolio-window-body .project-image img');
  projectImage.src = portfolioProject[0].projectImage;
  projectImage.alt = portfolioProject[0].projectName;
  // project technologies
  const projectTechnologies = document.querySelector('.portfolio-window-body .project-details .technologies');
  const projectTechnologiesChild = [...projectTechnologies.childNodes];
  projectTechnologiesChild.forEach((child, index) => {
    projectTechnologies.removeChild(projectTechnologiesChild[index]);
  });
  portfolioProject[0].projectTechnologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.innerText = tech;
    projectTechnologies.appendChild(techItem);
  });
  // project text
  const projectText = document.querySelector('.portfolio-window-body .project-details .project-text p');
  projectText.innerText = portfolioProject[0].projectText;
  // links to project
  const projectSource = document.querySelector('.portfolio-window-body .project-details .projects-links .see-source-of-project');
  projectSource.href = portfolioProject[0].sourceLink;
  const projectLive = document.querySelector('.portfolio-window-body .project-details .projects-links .see-live-project');
  projectLive.href = portfolioProject[0].liveLink;
  // work details
  const companyName = document.querySelector('.portfolio-window-body .company-name');
  companyName.innerText = portfolioProject[0].companyName;
  const projectPosition = document.querySelector('.portfolio-window-body .position');
  projectPosition.innerText = portfolioProject[0].projectPosition;
  const projectDate = document.querySelector('.portfolio-window-body .date');
  projectDate.innerText = portfolioProject[0].projectDate;
};
seeProjectBtns.forEach((btn) => btn.addEventListener('click', () => showProjectPopUpWindow(btn)));
portfolioPopUpClose.addEventListener('click', () => {
  projectPopUpBody.style.display = 'none';
  projectPopUpWrap.style.display = 'none';
});

// Access form elements
const submitFormBtn = document.querySelector('footer form button');
const emailInput = document.querySelector('footer form input[type="email"]');
const nameInput = document.querySelector('footer form input[type="text"]');
const messageInput = document.querySelector('footer form textarea');
const inputsArray = [emailInput, nameInput, messageInput];
// Get user form data from the browser local storage
window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('formInfo'))) {
    const { name, email, message } = JSON.parse(localStorage.getItem('formInfo'));
    emailInput.value = email;
    nameInput.value = name;
    messageInput.value = message;
  }
});
// Validate form
submitFormBtn.addEventListener('click', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    emailInput.parentElement.classList.add('invalidInput');
  } else {
    // SAVE DATA TO LOCAL STORAGE ON SUBMIT
    saveFormDataToLocalStorage(nameInput, emailInput, messageInput);
  }
});




























	