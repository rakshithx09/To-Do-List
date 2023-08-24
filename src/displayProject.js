import { content, projects} from "./index.js";
import { getCurrentProject } from "./retrieveData.js";
const projectsInMenu=document.querySelector('.projects');
const currentProjectDisplay=document.querySelector('.currentProject> h2');/* the display div in content box */

const menu=document.querySelector('.menu');
function display(project){
    const oldDivs= document.querySelectorAll('.content .task');
            oldDivs.forEach((oldDiv) => {
                content.removeChild(oldDiv);
            });
            project.list.forEach(task=> {
            const div=document.createElement('div');
            div.classList.add('task');
            div.innerHTML=`<input type="checkbox">
            <div class="taskName"><h4>${task.name}</h4></div>
            <div class="dueDate">${task.duedate}</div>
            <div class="favoriteBtn"><i class="far fa-star"></i></div>
            <div class="editIcon"><div class="editIconDots"></div><div class="editIconDots"></div><div class="editIconDots"></div></div>`
            content.appendChild(div);
            const starIcon=div.querySelector('.favoriteBtn i');
            if(task.priority==true){
                starIcon.classList.add("fas");
                starIcon.classList.remove("far");
            }
            starIcon.addEventListener('click',()=>{
                console.log("hey");
                starIcon.classList.toggle("fas");
                starIcon.classList.toggle("far");
            });            
        });
}
function updateMenu(){
    const oldProjects= document.querySelectorAll('.userAddedProject');
            oldProjects.forEach((oldProject) => {
                menu.removeChild(oldProject);
            });
    projects.forEach((project)=>{
        const div=document.createElement('div');
        const h=document.createElement('h4');
        div.classList.add('menuContent');
        div.classList.add('userAddedProject');
        div.dataset.index=project.index;
        div.addEventListener('click',()=>{
            display(projects[div.dataset.index]);
            getCurrentProject(div);
            currentProjectDisplay.textContent=project.name;  /* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh added new line */
        });
        div.appendChild(h);
        h.textContent=project.name;
        projectsInMenu.insertAdjacentElement('afterend', div);
    } );
}

export {display,updateMenu,currentProjectDisplay,menu};



