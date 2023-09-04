import { all } from "./index.js";
function editPriority(project,taskIndex){
    if(project.list[taskIndex].priority){
        project.list[taskIndex].priority = false;
        /* all.list[project.list[taskIndex].index].priority=false; */
        console.log(project.list[taskIndex].index);
    }else{
        project.list[taskIndex].priority = true;
       /*  all.list[project.list[taskIndex].index].priority=true; */
        console.log(project.list[taskIndex].index);
    }
    
}
export {editPriority} ;