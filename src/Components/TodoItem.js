import React, {useState} from "react";


function TodoItem(props) {
    const [itemValue, setItemValue] = useState(props.item.text);
    const [editStatus, setEditStatus] = useState(false);
    let editItemChange = e => {
        setItemValue(e.target.value);
    }
    function changeData() {
        props.edit(props.item.id, itemValue)
        setEditStatus(false)
    }
    return (
        <>
            {
                ! editStatus ? (
                    <div
                        className="col-md-6 col-8 border border-1 mt-1  p-3 rounded d-flex align-items-center justify-content-between">
                        <div>
                            <span>{props.item.text}</span>
                        </div>
                        <div className="d-flex">

                            <button className={`btn mx-1 ${props.item.done ? 'btn-danger' : 'btn-success'}`}
                                    onClick={() => props.done(props.item.id)}>{props.item.done ? 'انجام نشده' : 'انجام شده'}</button>
                            <button className="btn btn-warning mx-1" onClick={() => props.delete(props.item.id)}>حذف</button>
                            <button className="btn btn-primary " onClick={() => setEditStatus(true)}>ویرایش</button>
                        </div>
                    </div>
                ) : (


                    <div
                        className="col-md-6 col-8 border border-1 mt-1  p-3 rounded d-flex align-items-center justify-content-between">
                        <div>
                            <input type="text" className="form-control" value={itemValue} onChange={editItemChange}/>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-primary " onClick={() => changeData()}>ویرایش
                            </button>
                        </div>
                    </div>
                )
            }

        </>


    )
}

export default TodoItem;