import React from "react";


function TodoItem(props) {
    return (
        <div className="col-md-6 col-8 border border-1 mt-1  p-3 rounded d-flex align-items-center justify-content-between">
            <div>
                <span>{props.text}</span>
            </div>
            <div className="d-flex">
                <button className="btn btn-warning mx-1">حذف</button>
                <button className="btn btn-primary ">ویرایش</button>
            </div>
        </div>
    )
}

export default TodoItem;