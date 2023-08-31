import { createTask, projectCreate } from "./createNew";
import { projects ,allBtn} from "./index.js";
import { display } from "./displayProject";
const descriptionInput = document.getElementById('description');
const duedateInput = document.getElementById('duedate');
const impInput = document.getElementById('impCheckBox');
const projectDescription=document.getElementById('projectDescription');
let i=0; /* for projects */
let currentProjectIndex=null;

let totalNumberOfTasks = 0;

function setSpecialProject(){
    currentProjectIndex=null;
}


function getCurrentProject(div){
    currentProjectIndex=div.dataset.index;
}
function taskData(all){
   all.list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
   
     if(currentProjectIndex!=null){
        projects[currentProjectIndex].list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
        display(projects[currentProjectIndex]);   
    }
    
    else{
        display(all);
    }
    totalNumberOfTasks++;
    
}
function projectData(){
    projects.push(new projectCreate(projectDescription.value,i));  
    i++;
}
export {taskData,projectData,getCurrentProject, setSpecialProject};