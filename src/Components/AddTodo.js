import React, {useState} from "react";

function AddTodo(props) {
    const [todoItem , setTodoItem] = useState('')
    let formHandler = e => {
        e.preventDefault();
        props.add(todoItem)
        setTodoItem('')
    }
    let inputHandler = e => setTodoItem(e.target.value)
    return (
        <form onSubmit={formHandler}>
            <div className="row m-3">
                <div className="col-9">
                    <input type="text" className="form-control " value={todoItem} onChange={inputHandler} placeholder="کار مورد نظر را وارد کنید ..." />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-success ">افزودن</button>
                </div>

            </div>
        </form>
    )
}
export default AddTodo;