const taskPrompt = document.getElementById('taskPrompt');
const closeTaskIcon = document.getElementById('crossIconTask');
const closeProjectIcon = document.getElementById('crossIconProject');
function displayTaskPrompt(){
    taskPrompt.style.display = "flex";
}
function closeTaskPrompt(){
    taskPrompt.style.display = "none";
}
function displayProjectPrompt(){
    projectPrompt.style.display="flex";
}
function closeProjectPrompt(){
    projectPrompt.style.display = "none";
}
export {displayTaskPrompt,closeTaskPrompt,closeTaskIcon,closeProjectIcon, displayProjectPrompt,closeProjectPrompt};