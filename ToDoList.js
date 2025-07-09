const arr = ['add', 'view', 'remove', 'exit']
let tasks = ['Study', 'Code', 'Read', 'write']
let choice = prompt("What do you want to do? (add, view, remove, exit)");

if (choice == "add") {
    document.querySelector('#head').textContent = "Adding element"
    let task = prompt("Enter task to add")
    if (task) {
        tasks.push(task)
        document.querySelector('#add').textContent = tasks

    }
}
else if (choice == "view") {
    document.querySelector('#head2').textContent = "View Tasks"
    if (tasks.length == 0) {
        document.querySelector('#view').textContent = "No tasks in the list"
    }
    else {
        document.querySelector('#view').textContent = tasks
    }
}
else if (choice == "remove") {
    document.querySelector('#head3').textContent = "Removing element"

    if (tasks.length == 0) {
        document.querySelector('#remove').textContent = "No tasks in the list"
    }
    else {
        let removeIndex = prompt("Enter the task number you want to remove");

        let index = 0;

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, removeIndex)
            document.querySelector('#remove').textContent = tasks
        }
        else {
            document.querySelector('#remove').textContent = "Invalid Number"
        }
    }
}
else if (choice == "exit") {
    document.querySelector('#exit').textContent = "Good Bye!!"
}
else {
    alert("Please enter: add, view, remove, or exit.");
}