import { BarChart } from 'recharts'
import Navbar from '../navbar/Navbar'
import {Data} from '../../data'
import DashboardItem from './DashboardItem'
import './dashboard .css'
import rocketimg from "../../assets/images/rocket-white.png"
import personimg from "../../assets/images/ivancik.jpg"
import { Link, useParams } from 'react-router-dom'
import { dataCard } from './data'
import BreadCrumb from '../../breacCrumb/BreadCrumb'
import { useState } from 'react'


export default function Dashboard() {

  const params=useParams();
  const [val, setVal]=useState({
     typ:"dashboard",
  })
  return (
    <>
    <div className="row">
      <div className="col-md-2 navbar">
      <Navbar />
      </div>
      <div className="col-md-10 body">
        <div className="">
          <BreadCrumb {...val}/>
        </div>
      <div className="row">
       {Data.map(
        (e)=>(
          <div key={e.id} className="col-md-4 col-lg-3 col-sm-2  chart">
            <DashboardItem {...e} />
          </div>
        )
       )}
      </div>
      <div className='row mt-1'>
        <div className="col-md-7 r_rocket container">
          <div className="row ">
          <div className="col-7">
              <div>
                <p>{dataCard[0].make}</p>
                <h5 className="p-0 m-0">{dataCard[0].name}</h5>
                <p>{dataCard[0].desc}</p>
                <br />
              </div>
              <div>
                <Link className='rocket_link py-2 mb-2' to="1">Read more</Link>
              </div>
          </div>
            <div className="col-5 rocketimg my-2">
              <img className='rocketimg1' src={rocketimg} alt="" />
            </div>
           
          </div>
        </div>
        <div className="col-md-5 w_rocket p-2">
          <div className="crd_rocket w-100 h-100 container">
             
             <span className='font-bold text-20'>{dataCard[1].make}</span>
             
             <br />
             {dataCard[1].desc}
             <br />
             <br /><br />
             <Link className=' wRocket p-0 m-0' to="2">Read mores</Link>
          </div>
        </div>
      </div>
      </div>
    </div>
   
    </>

  )
}
