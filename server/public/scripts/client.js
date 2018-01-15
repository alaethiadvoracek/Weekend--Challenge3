console.log('client.js sourced');

$(document).ready(onLoad);


//event listeners 
function onLoad (){
getTask();
$('#submitTask').on('click', addNewTask);
$('#complete').on ('click', completeTask);
$('#delete').on('click', deleteTask);
}//end on load 

function getTask(){
    $.ajax({
        method: 'GET', 
        url: '/task',
        success: function(response){
            console.log('Get request response:', response);
            toDOM(response);
    }//end success 
    });//end ajax get task to database 
}//end get new task to list 

function toDOM(response) {
    $('#viewTasks').empty();
    for (let i = 0; i < response.length; i++) {
      let $row = $('<tr>');
      $row.data('id', response[i].id);
      $row.append('<td> ' + response[i].task + '</td>');
      $row.append('<td> ' + response[i].day_of_the_week + '</td>');
      $row.append('<td> ' + response[i].importance + '</td>');
      $row.append('<td><button type="button" id="Delete">Delete Task</button></td>');
      $row.append('<td><button type="button" class="completeReady" id="complete">Complete Task</button></td>')
      }//end for loop
  }//end toDOM function 


//add new task to list 
function addNewTask (){
    let newTask = {
        task: $('#task').val(),
        day_of_the_week : $('#day').val(),
        importance: $('#importance').val()
    }//end newTask variable
    $.ajax({
        method: 'POST',
        url:'/task',
        data: newTask, 
        success: function(response){
            console.log('POST response', response);
            getTask();
            resetInput();
        }//end success
    });//end ajax post to get new task from server 
}//end add new task function 


//Reset Inputs
function resetInput(){
    $('#task').val('');
    $('#day').val('Day Of the Week');
    $('#importance').val('Importance of Task');
}//end empty input

//delete task 
function deleteTask(){
    let taskId = $(this).parents('tr').data('id');
    $.ajax({
        method: 'DELETE',
        url: '/task/'+ taskId,
        success: function(response){
            console.log('task deleted:', response);
            getTask();
        }//end success 
    })//end ajax put 
}//end delete task function 

//complete task function 
function completeTask(){
    let taskId = $(this).parents('tr').data('id');
    $.ajax({
        method: "PUT",
        url: '/task/' + taskId, 
        data: {complete: completeReady},
        success: function (response){
            console.log('PUT response: ', response);
            getTask();
        }//end success function 
    });//end ajax put 
}//end complete task 