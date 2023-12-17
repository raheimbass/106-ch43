
function saveTask(){
    console.log("saveTask");
    //get the values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,description,color,date,status,budget);

    //build an object
    let taskToSave = new Task(title, description, color, date, status, budget);
    //save to server

    //display the task
}

function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net",
        success:function(respone)
        {
            let data = JSON.parse(respone);
            
        },
        error:function(error){
            console.log(error);}
    
    });
}
function init() {

    // load the data

    // hook events
    // this is JQuery
    $("#btnAdd").click(saveTask);
    //document.getElementById("btnAdd").addEventListener("click",)

  
}

window.onload = init;