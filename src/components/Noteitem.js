import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext"



const Noteitem = (props) => {
    const context = useContext(noteContext);
    const  { deleteNote } = context;
    const { note , updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{note.title}</h5>
                            <h6 onClick={()=>{deleteNote(note._id); props.showAlert('Deleted Successfully','success')}}><i className="far fa-trash-alt mx-3 icon1"></i></h6>
                            <h6 onClick={()=>{updateNote(note)}}><i className="far fa-pen-to-square icon2 mx-3" ></i></h6>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div> 
    )
}

export default Noteitem
// default width of bootstrap card is: style="width: 18rem;"