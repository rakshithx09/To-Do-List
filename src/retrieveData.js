import { createTask, projectCreate } from "./createNew";
import { projects ,allBtn} from "./index.js";
import { display, removeTasks } from "./displayProject";
const descriptionInput = document.getElementById('description');
const duedateInput = document.getElementById('duedate');
const impInput = document.getElementById('impCheckBox');
const projectDescription=document.getElementById('projectDescription');
let i=1; /* for projects */     /* edited today */
let currentProjectIndex=0;

let totalNumberOfTasks = 0;

function setSpecialProject(){
    currentProjectIndex=0;  /* edited today */
}


function getCurrentProject(div){   /* whenever a project is clicked in the menu it retrives the index of that project in the array */
    currentProjectIndex=div.dataset.index;
}
function taskData(all){
   
   
     if(currentProjectIndex!=0){
        console.log(projects);
        console.log(projects[currentProjectIndex]);
        projects[currentProjectIndex].list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
        removeTasks();
        display(projects[currentProjectIndex]);   
    }
    
    else{
        all.list.push(new createTask(descriptionInput.value,false, duedateInput.value, impInput.checked,totalNumberOfTasks));
        removeTasks();
        projects.forEach((project)=>{
            
            display(project);
        });
         /* display(all); */
    }
    totalNumberOfTasks++;
    
}
function projectData(){
    projects.push(new projectCreate(projectDescription.value,i));  /* instead of pushing try splicing it after all projects */
    i++;
}
export {taskData,projectData,getCurrentProject, setSpecialProject};