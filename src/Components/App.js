import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../assets/css/App.css';
import AddTodo from "./AddTodo";
function App() {
    const [todoList , setTodoList] = useState([])
    let addTodo = item => {
        setTodoList([
            ...todoList,
            {id : Date.now() , done : false , text : item}
        ])
    }
   return(
       <>
           <header>
               <nav className="navbar bg-dark">
                   <div className="container-fluid">
                       <a className="navbar-brand link-light" href="http://localhost:3000">کار هایی که باید انجام بدی :/</a>
                   </div>
               </nav>
           </header>
           <main>
               <div className="bg-body-secondary p-5">
                   <div className="container d-flex justify-content-center ">
                       <div className="d-flex flex-column align-items-center">
                           <h1 className="fs-3">افزودن کار :</h1>
                           <AddTodo add={addTodo}/>
                       </div>
                   </div>
               </div>
               <div className="container mt-3">
                   <div className="d-flex flex-column align-items-center">
                       <ul className="nav nav-tabs col-md-6 col-8">
                           <li className="nav-item">
                               <a className="nav-link active" aria-current="page" href="#">
                                   <span>کار ها</span>
                                   <span className="badge bg-danger mx-1">10</span>
                               </a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link link-secondary" href="#">
                                   <span>انجام شده</span>
                                   <span className="badge bg-success mx-1">10</span>
                               </a>
                           </li>

                       </ul>
                   </div>
                   <div className="d-flex flex-column align-items-center">
                       <div className="col-md-6 col-8 border border-1 mt-2 p-3 rounded d-flex align-items-center justify-content-between">
                            <div>
                                <span>فکر کردن اضافی</span>
                            </div>
                           <div className="d-flex">
                               <button className="btn btn-warning mx-1">حذف</button>
                               <button className="btn btn-primary ">ویرایش</button>
                           </div>
                       </div>
                   </div>
               </div>
           </main>
       </>

   );
}
export default App;