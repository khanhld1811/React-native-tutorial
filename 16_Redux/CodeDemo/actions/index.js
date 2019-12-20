import {ADD_NEW_TASK,TOGGLE_ONE_TASK} from './actionTypes'

//Action: "add new task"\
let newTaskId = 0;
export const addNewTask = (inputTaskName) => {
    return{
        type:ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName
    }
}

//Action "toogle 1 task to completed / uncompleted"
export const toogleTask = (taskId) => {
    return{
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    }
}