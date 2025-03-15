import { Link } from "react-router-dom"
import "./style.css"
export default function BreadCrumb(props) {
  return (
    <>


    <div className="row mt-3 px-2">
      <div className="col-lg-6 ">
        <div>
            <Link to="/" className="breacCrumb_link"><i className="fa-solid fa-home"></i> Home /</Link>
            <Link to={"/"+props.typ}><span>{props.typ}</span></Link>
        </div>
          <div>
            {props.typ}
          </div>
        </div>
      <div className="col-lg-6 px-3 ">
            <div className="info_bread">
            <input type="search" className="form-control mx-3" name="search" id="search" placeholder="Search" /> 
            <Link to="/login" ><span className="px-3"><i>Sign In</i></span></Link>
            <span><i className="fa-solid fa-branch">2</i></span>
            <span><i>3</i></span>
          </div>

      </div>
    </div>
 
    <div className=" mt-3 px-3row">
     <div className="brcrmb">
   
     </div>
    
    </div>
    </>
  )
}
