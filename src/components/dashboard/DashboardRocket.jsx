import { useParams } from "react-router-dom";
import { dataCard } from "./data";
import Navbar from "../navbar/Navbar";

export default function DashboardRocket() {
    const params=useParams().id;
    const dataInfo=  dataCard.find(item => item.id==params);
    console.log("hello" ,dataInfo)
  return (
    <>
  
    <div className="container">
       <div className="row">
        <div className="col-md-3">
        <Navbar />
        </div>
        <div className="col-md-9 mt-5">
           {dataInfo.desc}
        </div>
       </div>
      
    </div>
    </>
  )
}

