import Navbar from "../navbar/Navbar";
import "./table.css"
import { data } from "./data.js";
import TableItem from "./TableItem";
import BreadCrumb from "../../breacCrumb/BreadCrumb.jsx";
import { useState } from "react";
export default function Table() {
    const [val, setVal]=useState({
        typ:"table",
    })
  return (
    <>
    <div className="tables">
        <div className="row">
            <div className="col-md-2">
                <Navbar />
            </div>
            <div className="col-md-10 my-2 ">
                <div className="w-100" style={{color:"white"}}>
                    <BreadCrumb {...val} />
                </div>
               <div className="Authot_table bg-light p-2 container">
               <h3 className="mb-4">Authors table</h3>
                

                <div className="row table_header ">
                    <div className="col-md-4 pb-3 border-bottom"><h5>AUTHOR</h5></div>
                    <div className="col-md-2 border-bottom"><h5>FUNCTION</h5></div>
                    <div className="col-md-2 border-bottom"><h5>STATUS</h5></div>
                    <div className="col-md-2 border-bottom"><h5>EMPLOYED</h5></div>
                    <div className="col-md-2 border-bottom"><h5>ACTION</h5></div>
                </div>

                <div className="row table_body">
                   {data.map((item)=>(
                    <TableItem key={item.id} {...item} />
                   ))}
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}
