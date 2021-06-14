// const form = document.querySelector('#add-new-task');
// const taskList = document.querySelector('#task-list');

var button = document.getElementById("add-new-task");
button.onclick = delRow();



function delRow(x) {
    var i = x.rowIndex;
  document.getElementById("myTasks").deleteRow(i+1);
// table.deleteRow(i);
}


// function createTask(doc){
//     let li = document.createElement('li');
//     let task = document.createElement('span');
//     let notes = document.createElement('span');
//     let due = document.createElement('span');
//     let urgency = document.createElement('span');



//     li.appendChild(task);
//     li.appendChild(notes);
//     li.appendChild(due);
//     li.appendChild(urgency);
//     // li.appendChild(trash);

//     taskList.appendChild();

// }
