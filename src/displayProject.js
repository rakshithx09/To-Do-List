import { content, projects } from './index.js';
import { getCurrentProject } from './retrieveData.js';
import { editPriority } from './edit.js';
const projectsInMenu = document.querySelector('.projects');
const currentProjectDisplay = document.querySelector('.currentProject> h2');/* the display div in content box */

const menu = document.querySelector('.menu');
function display (project) {
  let taskIndex = 0; /* data- an index given to each task to get its index in the project array */
  /* const oldDivs = document.querySelectorAll('.content .task');
  if(flag){
    console.log("deleting old divs");
    oldDivs.forEach((oldDiv) => {
      content.removeChild(oldDiv);
    });
  } */
  /* oldDivs.forEach((oldDiv) => {
    content.removeChild(oldDiv);
  }); */
  project.list.forEach(task => {
    const div = document.createElement('div');
    div.classList.add('task');
    div.innerHTML = `<input type="checkbox">
            <div class="taskName"><h4>${task.name}</h4></div>
            <div class="dueDate">${task.duedate}</div>
            <div class="favoriteBtn"><i class="far fa-star" data-index=${taskIndex} data-projectIndex=${project.index}></i></div>
            <div class="editIcon"><div class="editIconDots"></div><div class="editIconDots"></div><div class="editIconDots"></div><div class="popUp">
            <div class="popUpItems">edit</div>
            <div class="popUpItems">delete</div>
        </div></div>`;
    content.appendChild(div);
    const starIcon = div.querySelector('.favoriteBtn i');
    if (task.priority === true) {
      starIcon.classList.add('fas');
      starIcon.classList.remove('far');
    }
    starIcon.addEventListener('click', (e) => {
      console.log(projects[e.target.dataset.projectindex]);
      console.log(e.target.dataset.projectindex);
      console.log(e.target.dataset.index);
      editPriority(projects[e.target.dataset.projectindex], e.target.dataset.index);
      starIcon.classList.toggle('fas');
      starIcon.classList.toggle('far');
    });
    const editIcon= document.querySelector('.editIcon');
    const popUp= document.querySelector('.popUp');
    editIcon.addEventListener('click',()=>{
      popUp.classList.toggle('popUpActive');
    })
    taskIndex++;
  });
  /* console.log(project.name); */
  console.log(project);
}
function updateMenu () {
  const oldProjects = document.querySelectorAll('.userAddedProject');
  oldProjects.forEach((oldProject) => {
    menu.removeChild(oldProject);
  });
  projects.forEach((project) => {
    if (project.index === 0) {
      return;
    }
    const div = document.createElement('div');
    const h = document.createElement('h4');
    div.classList.add('menuContent');
    div.classList.add('userAddedProject');
    div.dataset.index = project.index;
    div.addEventListener('click', () => {
      removeTasks();   /* the code to remove tasks have been put into a function, whenever a project is clicked all prev tasks are removed */
      display(projects[div.dataset.index]);  /* edited TODAY */
      getCurrentProject(div);
      currentProjectDisplay.textContent = project.name;
      currentProjectDisplay.dataset.projectIndex = div.dataset.index;
    });
    div.appendChild(h);
    h.textContent = project.name;
    projectsInMenu.insertAdjacentElement('afterend', div);
  });
}

function removeTasks(){
  const oldDivs = document.querySelectorAll('.content .task');
  oldDivs.forEach((oldDiv) => {
    content.removeChild(oldDiv);
  });
}


export { display, updateMenu, currentProjectDisplay, menu, removeTasks};
