function projectCreate(name, i) {
    this.name = name;
    this.list = new Array();
    this.index = i;
}
function createTask(name, checked, duedate, priority){
    this.name=name;
    this.checked=checked;
    this.duedate=duedate;
    this.priority=priority;
}

export {projectCreate, createTask};
