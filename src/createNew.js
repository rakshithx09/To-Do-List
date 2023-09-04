function projectCreate(name, i) {
    this.name = name;
    this.list = new Array();
    this.index = i;
}
function createTask(name, checked, duedate, priority,index){
    this.name=name;
    this.checked=checked;
    this.duedate=duedate;
    this.priority=priority;
    this.index=index;
    
}

export {projectCreate, createTask};
