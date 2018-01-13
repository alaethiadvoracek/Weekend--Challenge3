console.log('client.js sourced');

$( document ).ready(onLoad);

function onLoad (){
console.log('jq');
$('#submitTask').on('click', addNewTask);


}//end on load 

function addNewTask(){
$.ajax({
    method: 'GET', 
    url: '/task',
    success: function(response){
        console.log('Get request response:', response);
    }
});//end ajax get task to database 

}//end add new task to list 