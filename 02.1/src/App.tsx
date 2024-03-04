import React, {useState} from 'react'
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TasksType = {
    [key: string]: TaskType[]
}
type todolistsType = {
    id: string, title: string, filter: FilterValuesType
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<todolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, taskId: string) {
        setTasks({...tasks, [id]: tasks[id].filter(el => el.id !== taskId)});
    }

    function addTask(id: string, title: string) {
        let task = {id: v1(), title, isDone: false};
        setTasks({...tasks, [id]: [task, ...tasks[id]]});
    }

    function changeStatus(id: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [id]: tasks[id].map(el => el.id === taskId ? {...el, isDone} : el)})
    }


    function changeFilter(id: string, filter: FilterValuesType) {
         setTodolists(todolists.map(el => el.id === id ? {...el, filter} : el))
    }


    return (
        <div className="App">
            {todolists.map(el => {
                function getFilteredTasks() {
                    let tasksForTodolist = tasks[el.id];

                    if (el.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                    }
                    return tasksForTodolist
                }

                return (
                    <Todolist title="What to learn"
                              tasks={getFilteredTasks()}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              id={el.id}
                              changeTaskStatus={changeStatus}
                              filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
