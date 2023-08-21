import { content } from "./index.js";
function display(project){
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

export {display};