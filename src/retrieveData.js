import { createTask, projectCreate } from "./createNew";
import { projects ,allBtn} from "./index.js";
import { display } from "./displayProject";
const descriptionInput = document.getElementById('description');
const duedateInput = document.getElementById('duedate');
const impInput = document.getElementById('impCheckBox');
const projectDescription=document.getElementById('projectDescription');
let i=1; /* for projects */     /* edited today */
let currentProjectIndex=null;

let totalNumberOfTasks = 0;

function setSpecialProject(){
    currentProjectIndex=0;  /* edited today */
}


function getCurrentProject(div){
    currentProjectIndex=div.dataset.index;
}
function taskData(all){
   
   
     if(currentProjectIndex!=0){
        projects[currentProjectIndex].list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
        display(projects[currentProjectIndex]);   
    }
    
    else{
        all.list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
       
        projects.forEach((project)=>{
            display(project);
        });
         /* display(all); */
    }
    totalNumberOfTasks++;
    
}
function projectData(){
    projects.push(new projectCreate(projectDescription.value,i));  
    i++;
}
export {taskData,projectData,getCurrentProject, setSpecialProject};