const form = document.querySelector('#add-new-task');

function addTask() {
    var table = document.getElementById("myTasks");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML= document.getElementbyId('cellOne').value;
    cell2.innerHTML= document.getElementbyId('cellTwo').value;
    cell3.innerHTML= document.getElementbyId('cellThree').value;
    cell4.innerHTML= document.getElementbyId('cellFour').value;

}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('cafes').add({
      task: form.task.value,
      notes: form.notes.value,
      due: form.due.value,
      urgency: form.urgency.value
    });
})
form.task.value = '';
form.notes.value ='';
form.due.value ='';
form.urgency.value ='';
