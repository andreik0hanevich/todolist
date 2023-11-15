import React, {FC} from 'react';
import Button from "./Button";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = ({title, tasks}) => {

    // const {title, tasks} = props

    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const listItem: JSX.Element = <li><input type="checkbox" checked={tasks[i].isDone}/> <span>{tasks[i].title}</span></li>
        listItems.push(listItem)
    }

    return (
        <div className='todolist'>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button  name="+"/>
            </div>
            <ul>
                {listItems}
            </ul>
            <div>
                <Button name='All'/>
                <Button name='Active'/>
                <Button name='Completed'/>
            </div>
        </div>
    );
};

export default TodoList;