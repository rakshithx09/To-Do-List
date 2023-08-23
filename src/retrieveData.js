import { createTask, projectCreate } from "./createNew";
import { projects } from "./index.js";
import { display } from "./displayProject";
const descriptionInput = document.getElementById('description');
const duedateInput = document.getElementById('duedate');
const impInput = document.getElementById('impCheckBox');
const projectDescription=document.getElementById('projectDescription');
let i=0;

let currentProjectIndex=null;
function getCurrentProject(div){
    currentProjectIndex=div.dataset.index;
}
function taskData(all){
    if(currentProjectIndex!=null){
        projects[currentProjectIndex].list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked));
    }
    display(projects[currentProjectIndex]);
    all.list.push(projects[currentProjectIndex].list[projects[currentProjectIndex].list.length-1]);
}
function projectData(){
    projects.push(new projectCreate(projectDescription.value,i));
    console.log(projects[projects.length-1]);   
    i++;
}
export {taskData,projectData,getCurrentProject};