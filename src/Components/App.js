import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../assets/css/App.css';
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
function App() {
    const [todoList , setTodoList] = useState([
        {id:1 , done : true , text: 'کار و زندگی'}
    ])
    const [statusDone , setStatusDone] = useState(false)
    let addTodo = item => {
        setTodoList([
            ...todoList,
            {id : Date.now() , done : false , text : item}
        ])
    }
    let deleteTodo = key => {
        setTodoList(
            todoList.filter(item => item.id !== key)
        )
    }

    let doneTodo = key => {
        let find = todoList.find(item => item.id === key)
        setTodoList([
                {id : key , done: ! find.done , text: find.text},
                ...todoList.filter(item => item.id !== key),
            ]
        )
    }
    let editTodo = (key , edit) => {
        let find = todoList.find(item => item.id === key)
        setTodoList([
                {id : key , done: find.done , text: edit},
                ...todoList.filter(item => item.id !== key),
            ]
        )
    }
    let filterTodos = todoList.filter(item => item.done === statusDone)
   return(
       <>
           <header>
               <nav className="navbar bg-dark">
                   <div className="container">
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
                               <a onClick={() => setStatusDone(false)} className={`nav-link ${!statusDone ? 'active' : 'link-secondary'}`} href="#" aria-current="page" >
                                   <span>کار ها</span>
                                   <span className="badge bg-danger mx-1">{todoList.filter(item => !item.done ).length}</span>
                               </a>
                           </li>
                           <li className="nav-item">
                               <a onClick={() => setStatusDone(true)} className={`nav-link ${statusDone ? 'active' : 'link-secondary'}`} href="#">
                                   <span>انجام شده</span>
                                   <span className="badge bg-success mx-1">{todoList.filter(item => item.done ).length}</span>
                               </a>
                           </li>

                       </ul>
                   </div>
                   <div className="d-flex flex-column align-items-center mt-4">

                       {
                           filterTodos.length === 0 ? <p>کاری وجود ندارد</p> :
                           filterTodos.map(item => <TodoItem key={item.id} item={item} delete={deleteTodo} done={doneTodo} edit={editTodo}/>)
                       }

                   </div>
               </div>
           </main>
       </>

   );
}
export default App;