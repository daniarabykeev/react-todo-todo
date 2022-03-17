import React from 'react';

const ToDoList = (props) => {
    return (
        <div>
            {props.tasks.map((item)=>(
                <ul key={item.id}>
                    <li>{item.task}</li>
                
                        <button onClick={()=> props.handleDeleteTask(item.id)} >Delete</button>

                        <button onClick={()=>props.getTaskToEdit(item)} >Edit</button>

                </ul>
            ))}
        </div>
    );
};

export default ToDoList;