import { useState } from "react"
import "./table.css"
import { Link } from "react-router-dom";
export default function TableItem(props) {
    const [status, setStatus]=useState("ONLINE");
    const [back, setBack]=useState("bg-success")
    function clickHandler(){
        if(status=="ONLINE"){
            setStatus("OffLINE")
            setBack("bg-secondary")
        }else{
            setStatus("ONLINE")
            setBack("bg-success")
        }
    }
  return (
    <>
      <div className="col-md-4 border-bottom">
        <div className="row athorTable ">
         <div className="col-2 my-3 pe-2">
            <img src={props.image} alt="" className="w-100 image_table" />
         </div> 
         <div className="col-10">
            <h6>{props.name}</h6>
            <p>{props.email}</p>
         </div>
        </div>
      </div>
      <div className="col-md-2 border-bottom">
        <h6>{props.job}</h6>
        <p>{props.team}</p>
      </div>
      <div className="col-md-2 border-bottom status ">
        <button onClick={clickHandler} className={`statusbtn ${back}`}>{status}</button>
      </div>
      <div className="col-md-2 border-bottom employed">
        <p>{props.employed}</p>
      </div>
      <div className="col-md-2 border-bottom action">
        <Link to="edit" className="edit_link">Edit</Link>
      </div>
    </>
  )
}
