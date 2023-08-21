import { content, projects } from "./index.js";
const projectsInMenu=document.querySelector('.projects');
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
            <div class="taskName">${task.name}</div>
            <div class="dueDate">${task.duedate}</div>
            <div class="favoriteBtn">${task.priority}</div>
            <div class="editIcon">...</div>`
            content.appendChild(div);
            
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
        div.classList.add('userAddedProject')
        div.appendChild(h);
        h.textContent=project.name;
        projectsInMenu.insertAdjacentElement('afterend', div);
    } );
}

export {display,updateMenu};