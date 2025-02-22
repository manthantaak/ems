const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData

    data.forEach(function (elem) {
        if (asignTo == elem.firstName) {
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }
    })
    setUserData(data)
    console.log(data);

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')

}