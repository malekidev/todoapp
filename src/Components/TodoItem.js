import React from "react";


function TodoItem(props) {
    return (
        <div className="col-md-6 col-8 border border-1 mt-1  p-3 rounded d-flex align-items-center justify-content-between">
            <div>
                <span>{props.item.text}</span>
            </div>
            <div className="d-flex">

                <button className={`btn mx-1 ${props.item.done ? 'btn-danger' : 'btn-success'}`} onClick={() => props.done(props.item.id)}>{props.item.done ? 'انجام نشده' : 'انجام شده'}</button>
                <button className="btn btn-warning mx-1" onClick={() => props.delete(props.item.id)}>حذف</button>
                <button className="btn btn-primary " >ویرایش</button>
            </div>
        </div>
    )
}

export default TodoItem;