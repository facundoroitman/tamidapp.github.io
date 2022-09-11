import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BucketList from "./BucketList";



const Notes = () => {
    const[todo, setTodo] = useState('');

    const {data:todos, isPending, error} = useFetch('http://localhost:8000/todos');


    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {todo: todo, starred: false};

        fetch('http://localhost:8000/todos', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(item)
        }).then(()=>{
            setTodo('');
        }).catch((err=>{
            console.log(err)
        }))
        

        window.location.reload();

    }
     


    return ( 

        <div className="notepad-padding">
            <div className="notepad">
                <div className="submitter">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="bar" 
                            type="text"
                            autoFocus= "True" 
                            required
                            placeholder="Enter a To-do"
                            value={todo}
                            onChange ={(e)=> setTodo(e.target.value)}
                        />
                        <input 
                            type="submit"
                            style={{fontSize:"20px"}}
                        />
                    </form>


                    {error && <div>error</div>}
                    {/* {isPending && <div>Loading...</div>} */}
                    {todos && <BucketList todos={todos}  /> } 

                </div>
            </div>
        </div>
        

    );
}
 
export default Notes;