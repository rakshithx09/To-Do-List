import { projectCreate, createTask } from "./createNew.js";
import { display,updateMenu } from "./displayProject.js";
import { displayTaskPrompt, closeTaskPrompt, closeTaskIcon,closeProjectIcon ,closeProjectPrompt,displayProjectPrompt} from "./prompt.js";
import { taskData, projectData} from "./retrieveData.js";

const switchBtn = document.querySelector('.switch');
const toggle = document.getElementById('toggle');
const root = document.documentElement;


toggle.addEventListener('click', () => {
    switchBtn.classList.toggle('darkMode');
    root.classList.toggle('dark');
});


const content = document.querySelector('.content');
const allProjectsBtn = document.querySelector('.all');
const addedProjectsBtn = document.querySelector('.addProject');
const addTaskBtn = document.getElementById('addTaskBtn');


addTaskBtn.addEventListener('click', () => {
    displayTaskPrompt();
});
closeTaskIcon.addEventListener('click', () => {
    taskData(projects[0],all)
    closeTaskPrompt();
});


addedProjectsBtn.addEventListener('click', () => {
    displayProjectPrompt();
});
closeProjectIcon.addEventListener('click', () => {
    closeProjectPrompt();
});

const all = new projectCreate("all", 0);
let currentProject = all;
const submit = document.getElementById('submit');
const submitProject = document.getElementById('submitProject');

submit.addEventListener('click', () => {
    taskData(projects[0], all); //retrieves data from prompt pushes to respective projects
    closeTaskPrompt();
    display(currentProject);
});
submitProject.addEventListener('click', () => {
    projectData(); //retrieves data from prompt pushes to respective projects
    closeProjectPrompt();
    display(currentProject);
    updateMenu();
});



const projects = new Array();/* 


/* projects.push(all); */
/* projects.push(webDev); */
console.log(projects);
allProjectsBtn.addEventListener('click', () => {
    currentProject = all;
    display(all);
});

export { content,projects };
