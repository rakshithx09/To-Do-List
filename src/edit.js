import { all } from "./index.js";
function editPriority(project,taskIndex){
    if(project.list[taskIndex].priority){
        project.list[taskIndex].priority = false;
        /* all.list[project.list[taskIndex].index].priority=false; */
    }else{
        project.list[taskIndex].priority = true;
       /*  all.list[project.list[taskIndex].index].priority=true; */
    }
    
}
export {editPriority} ;