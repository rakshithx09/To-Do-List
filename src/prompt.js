const taskPrompt = document.getElementById('taskPrompt');
const close = document.getElementById('crossIcon');

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
export {displayTaskPrompt,closeTaskPrompt,close, displayProjectPrompt,closeProjectPrompt};