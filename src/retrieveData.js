import { createTask, projectCreate } from "./createNew";
import { projects } from "./index.js";
const descriptionInput = document.getElementById('description');
const duedateInput = document.getElementById('duedate');
const impInput = document.getElementById('impCheckBox');
const projectDescription=document.getElementById('projectDescription');
let i=0;
function taskData(project,all){
    project.list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked));
    all.list.push(project.list[project.list.length-1]);
}
function projectData(){
    projects.push(new projectCreate(projectDescription.value,i));
    console.log(projects[projects.length-1]);
   /*  projects[projects.length-1].addEventListener('click', function(){
       console.log(this.index);
    }); */
    
    i++;
}
export {taskData,projectData};