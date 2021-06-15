var button = document.getElementById("trash-button");
button.onclick = delRow();

var button2 = document.getElementById("add-new-task");
button2.onclick = addRow();


function delRow(x) {
    var i = x.rowIndex;
  document.getElementById("myTasks").deleteRow(i);
}

function addRow(){
  var addRow = document.getElementById("myTasks").insertRow();
  addRow.innerHTML =

  "<td contenteditable='true'></td> <td contenteditable='true'></td> <td contenteditable='true'></td> <td contenteditable='true'></td> <td           <button id='trash-button' onclick = 'delRow(this)'> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z'/></svg></td>";
}