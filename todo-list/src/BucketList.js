
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";




const BucketList = (todos) => {
    


    const handleDelete = (e) => {
    
        const id = e.nativeEvent.path[1].id;
        fetch('http://localhost:8000/todos/' + id, {
            method:'DELETE'
        }).catch((err)=>{
            console.log(err)
        })
        window.location.reload();
    }

    const handleStarred = (e) =>{
        console.log("starred");
    }
    
    return ( 
        <div className="bucket-list">
            {todos.todos.map(todo => (
                <div  id={`${todo.id}`} key={todo.id}>
                    <div  onClick={handleDelete} className="preview" id={`${todo.id}`} key={todo.id}>
                        <h3 onClick={handleDelete}>{ todo.todo }</h3>
                    </div>
                </div>   
            ))}

        <h3 className="toDelete">To delete a todo, click on its box</h3>

        </div>
    );
}
 
export default BucketList;




