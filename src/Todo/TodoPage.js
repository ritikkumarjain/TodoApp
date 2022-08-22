import React, { useState, useEffect } from 'react';
import "./todoPage.css";
import 'font-awesome/css/font-awesome.min.css';
import Popup from "../Popup/Popup.js";

export default function TodoPage() {

    const [buttonPop, setButtonPop] = useState(false);
    const [addTasks, setAddTasks] = useState([{
        title: "",
        summary: ""
    }]);
    const [submitted, setSubmitted] = useState(false);
    const [editPop, setEditPop] = useState(false);
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(0);

    useEffect(() => {

    })

    const handleTitle = (event) => {
        setAddTasks({ ...addTasks, title: event.target.value })
    }

    const handleTaskSummary = (event) => {
        setAddTasks({ ...addTasks, summary: event.target.value })
    }

    const handleDeleteTask = (index, event) => {

        if (window.confirm("Do you want to delete this task")) {
            var clonedTasks = [...list];
            clonedTasks.splice(index, 1);
            setList(clonedTasks);
        }
        else {
            event.preventDefault();
        }
    }

    const handleEditTask = (index, event) => {
        setEditIndex(index);
        setEditPop(true);
    }

    function AddTask(event) {
        event.preventDefault();
        if (addTasks) {
            setList([...list, addTasks])
        }
        setAddTasks({ title: "", summary: "" })

        setButtonPop(false);
        setSubmitted(true);
    }

    function EditTask(event) {
        event.preventDefault();
        if (addTasks) {
            list[editIndex].title = addTasks.title;
            list[editIndex].summary = addTasks.summary;
        }
        setAddTasks({ title: "", summary: "" });

        setEditPop(false);
        setSubmitted(true);
    }


    return (
        <div className="todo-container">
            <div>
                <h3 className="display-1 text-white">Todo App</h3>
                <button onClick={() => setButtonPop(true)} className="btn btn-info">Add a Task</button>
                {<div style={{ marginTop: "10px" }}>
                    {(submitted && list.length !== 0)
                        ?
                        <div className="parent-flex">
                            {list.map((val, idx) =>
                            (
                                <div className="flex-item" >
                                    <div className="card" key={idx}>
                                        <div className="card-header fw-bold justify-content-between">
                                            {val.title}
                                            <button type="button" className="edit-button" onClick={(e) => handleEditTask(idx, e)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                </svg>
                                            </button>
                                            <button type="button" className="trash-button" onClick={(e) => handleDeleteTask(idx, e)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>


                                        </div>
                                        <div className="card-body" >
                                            {val.summary}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="none-card">
                            <h5 className="bg-light p-2 border-rounded">No Task Found</h5>
                        </div>
                    }
                </div>}

                <Popup trigger={buttonPop} setTrigger={setButtonPop} >
                    <hr />
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputTitle" placeholder="Task Title" onChange={(e) => handleTitle(e)} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label htmlFor="taskArea" className="col-sm-2 col-form-label">Task Summary</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="taskArea" rows="5" placeholder="Task Summary" onChange={(e) => handleTaskSummary(e)}></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            {/* <button type="button" className="btn text-danger ">Cancel</button> */}
                            <button type="submit" className="btn btn-success" onClick={(e) => AddTask(e)}>Create Task</button>
                        </div>
                    </form>
                </Popup>

                <Popup trigger={editPop} setTrigger={setEditPop}>
                    <hr />
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputTitle" placeholder="Task Title" defaultValue={list.length !== 0 ? list[editIndex].title : ""} onChange={(e) => handleTitle(e)} />
                                
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label htmlFor="taskArea" className="col-sm-2 col-form-label">Task Summary</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="taskArea" rows="5" placeholder="Task Summary" defaultValue={list.length !== 0 ? list[editIndex].summary : ""} onChange={(e) => handleTaskSummary(e)} />
                                {/* value={list.length !== 0 ? list[editIndex].summary : ""} */}
                            </div>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            {/* <button type="button" className="btn text-danger ">Cancel</button> */}
                            <button type="submit" className="btn btn-success" onClick={(e) => EditTask(e)}>Edit Task</button>
                        </div>
                    </form>
                </Popup>



            </div >
        </div >
    );
};


// // useEffect(() => {
// //     setTimeout(() => {
// //         setTimePop(true);
// //     }, 3000);
// // }, []);
// //    const [timePop, setTimePop] = useState(false);


// //Code for timed Popup
// {/* <Popup trigger={timePop} setTrigger={setTimePop}>
//                     <h3>My Popup Time Triggered</h3>
//                 </Popup> */}