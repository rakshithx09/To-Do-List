import { projectCreate } from "./createNew.js";
import { display, updateMenu, currentProjectDisplay, menu } from "./displayProject.js";
import { displayTaskPrompt, closeTaskPrompt, closeTaskIcon, closeProjectIcon, closeProjectPrompt, displayProjectPrompt } from "./prompt.js";
import { taskData, projectData } from "./retrieveData.js";

const switchBtn = document.querySelector('.switch');
const toggle = document.getElementById('toggle');
const root = document.documentElement;


toggle.addEventListener('click', () => {
    switchBtn.classList.toggle('darkMode');
    root.classList.toggle('dark');
});


const content = document.querySelector('.content');
const addedProjectsBtn = document.querySelector('.addProject');
const addTaskBtn = document.getElementById('addTaskBtn');

const all = new projectCreate("all", 0);
const allBtn = document.querySelector('.all');
allBtn.addEventListener('click', () => {
    display(all);
    currentProjectDisplay.textContent = "All";
});

const projects = new Array();


addTaskBtn.addEventListener('click', () => {
    displayTaskPrompt();
});
closeTaskIcon.addEventListener('click', () => {
    closeTaskPrompt();
});


addedProjectsBtn.addEventListener('click', () => {
    displayProjectPrompt();
});
closeProjectIcon.addEventListener('click', () => {
    closeProjectPrompt();
});


const submit = document.getElementById('submit');
const submitProject = document.getElementById('submitProject');

submit.addEventListener('click', () => {
    taskData(all); //retrieves data from prompt pushes to respective projects
    closeTaskPrompt();
    /* console.log(all); */
});
submitProject.addEventListener('click', () => {
    projectData(); //retrieves data from prompt pushes to project array
    closeProjectPrompt();
    updateMenu();

});
const burger = document.querySelector('.burger');
const menuChild = document.querySelector('.menuChild');
burger.addEventListener('click', () => {
    menu.classList.toggle("active");

});

const dueDateAndProjects = document.querySelectorAll('.menu > *:not(:first-child):not(:last-child).menuContent'); /* selects all the duedates(all this week and today) and user added projects */
dueDateAndProjects.forEach((dueDateAndProject)=>{
    dueDateAndProject.addEventListener('click',()=>{
        dueDateAndProjects.forEach((dueDateAndProject)=>{
                dueDateAndProject.classList.remove("menuContentClicked");
        });
        dueDateAndProject.classList.add("menuContentClicked")
        currentProjectDisplay.textContent = dueDateAndProject.textContent;
    });
});


export { content, projects };



