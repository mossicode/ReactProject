import "./dashboard .css"
import '../../assets/fonts/css/all.min.css'
export default function DashboardItem(props) {
  return (
   <>
    <div className="row  mt-1 border chartda py-2 mx-2 px-1 px-2">
        <div className="col-9 ">
            <p className="price">{props.name}</p>
            <h6 className="discount">{props.price} <span className={(props.discount>0)?"text-success":"text-danger"}>
                {(props.discount>0)?` + ${props.discount}`:(props.discount)}
                 %</span></h6>
        </div>
        <div className="col-3 mt-1 text-right ">
            <span className="logo p-2">
               <i className={`text-light ${props.logo}`}></i>
            </span>
        </div>
    </div>
   </>
  )
}
