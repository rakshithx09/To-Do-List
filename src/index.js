//import { web } from "webpack";
import {projectCreate, createTask} from "./createNew.js";
import  {display}  from "./displayProject.js";

const switchBtn = document.querySelector('.switch');
const toggle = document.getElementById('toggle');
const root = document.documentElement;


toggle.addEventListener('click', () => {
    switchBtn.classList.toggle('darkMode');
    root.classList.toggle('dark');
});


const content=document.querySelector('.content');

const projects = new Array();


const all=new projectCreate("all",0);
const webDev=new projectCreate("webDev",1);


webDev.list.push(new createTask("gym",false,"today","high"));
webDev.list.push(new createTask("college",false,"today","high"));
all.list.push(new createTask("gym",false,"today","high"));
all.list.push(new createTask("college",false,"today","high"));;
all.list.push(new createTask("gym",false,"today","high"));
all.list.push(new createTask("college",false,"today","high"));;
all.list.push(new createTask("gym",false,"today","high"));
all.list.push(new createTask("college",false,"today","high"));;
all.list.push(new createTask("gym",false,"today","high"));
all.list.push(new createTask("trip",false,"sept 17","very high"));;

projects.push(all);
projects.push(webDev);
console.log(projects);

display(webDev);

export {content};
