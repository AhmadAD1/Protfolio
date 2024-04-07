let taskss = [
    {
        "title": "Task 1",
        "date": "2024-03-01",
        "isDone": false
    },
    {
        "title": "Task 2",
        "date": "2024-03-01",
        "isDone": false
    },
    {
        "title": "Task 3",
        "date": "2024-03-01",
        "isDone": true
    },]
let count = 0;


function taskSetStorage() {
    localStorage.setItem("tasks", JSON.stringify(taskss)) || [];
}
function taskGetStorage() {
    taskss = JSON.parse(localStorage.getItem("tasks")) || [];
}
taskGetStorage();


function update() {
    document.getElementById("tasks").innerHTML = "";
    for (task of taskss) {
        document.getElementById("tasks").innerHTML += ` <div class="task ${task.isDone ? 'doneTask' : ''} " >
                        <div style="width: 70%; ">
                            <h1>${task.title}</h1>
                            <div>
                                <span class="material-symbols-outlined">
                                    calendar_month
                                </span>
                                <span>${task.date}</span >
                            </div >
                        </div >

        <div class="btns">
            <button onclick="deleteTask(${count})" class="delete btncir">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
            <button  onclick="doneTask(${count})" class="done btncir">
                <span class="material-symbols-outlined">
                    done
                </span>
            </button>
            <button  onclick="editTask(${count})" class="edit btncir">
                <span class="material-symbols-outlined">
                    edit
                </span>
            </button>
        </div>


                    </div >
        <hr>`
            ;
        count++;
    }
    count = 0;

}
update();


addTask();
function addTask() {
    const addbtn = document.getElementById("add");
    addbtn.addEventListener("click", function () {
        let taskTitle = prompt("Enter the task title");
        if (taskTitle == " ") {
            alert("Please enter a title for the task");
            return;
        }
        if (taskTitle == null) {
            return;
        }
        var date = new Date();
        var taskDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " || " + date.getHours() + ":" + date.getMinutes();
        let task = {
            "title": taskTitle,
            "date": taskDate,
            "isDone": false
        }
        taskss.push(task);
        taskSetStorage();



        update();
        count = 0;



    })




}
function deleteTask(count) {
    let task = taskss[count];
    let confirmDelete = confirm("Are you sure you want to delete this task? : " + task.title);
    if (confirmDelete == true) {
        taskss.splice(count, 1);
        taskSetStorage();

        update();

    }



}


function doneTask(count) {
    const cancelbtn = document.getElementsByClassName("material-symbols-outlined");
    if (taskss[count].isDone == true) {
        taskss[count].isDone = false;
        cancelbtn[count].value = "done";
    }
    else if (taskss[count].isDone == false) {
        taskss[count].isDone = true;
        cancelbtn[count].value = "cancel";
    }

    taskSetStorage();
    update();




}
function editTask(count) {
    let oldTitle = taskss[count].title;
    let newTitle = prompt("Enter the new title of the task");
    taskss[count].title = newTitle;
    let confirmEdit = confirm("Are you sure you want to change the title of the task from " + oldTitle + " to " + newTitle);
    if (confirmEdit == true) {
        var date = new Date();
        var taskDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " || " + date.getHours() + ":" + date.getMinutes();
        taskss[count].date = taskDate;
        taskSetStorage();

        update();
    }


}
function toProject() {
    var img = document.getElementById("logo");
    img.addEventListener('click', function () {
        // Navigate to another page
        window.location.href = '../../index.html';
    });
}
toProject();


