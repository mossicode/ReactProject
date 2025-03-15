import Navbar from '../navbar/Navbar'
import image1 from '../../assets/images/table/curved0.jpg'
import image2 from '../../assets/images/table/bruce-mars.jpg'
import "./profile.css"
import {conversation, data} from "./data.js"
export {conversation} from "./data.js"
import { Link } from 'react-router-dom'
import ConversationItem from './ConversationItem.jsx'
import BreadCrumb from '../../breacCrumb/BreadCrumb.jsx'
import { useState } from 'react'
export default function Profile() {
  const [val, setVal]=useState(
    {
      typ:"profile",
    }
  )
  function clickHandler(){
   if( confirm ("hello")){
    alert ("that is ok ")
   }else{
    alert("not ok")
   }
  }
  return (
    <>
 <div className="row">
  <div className="col-md-2 navbar">
  <Navbar />
  </div>
  <div className="col-md-10 body">

   

    <div className='banner_image'>
    <div className="breadcrumb">
       <div className="w-100">
       <BreadCrumb {...val}/>
       </div>
        </div>
      {/* <img src={image1} className='w-100 container p-1 pt-2' alt="" /> */}

      <div className="px-3 header_info_profile">
          <div className='row d-flex'>
        
          <div className="col-md-6">
           <div className="row">
            <div className="col-4">
            <div className="profile_information">

                <div className="imageProfile">
                  <img src={image2} className="profileImage" alt="a picture" />
                </div> 

                <div className="profile_header text-secondary fw-bold">
                <div className='fw-bold fs-100' style={{fontSize:"14px", color:'black', fontWeight:'bold'}} > {data[0].name}</div>
                <div className=''> {data[0].job}</div>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
           </div>
             
            
          </div>
          <div className="col-md-6 text-center">
            <div className="setting">
              <div className="app text-center mx-auto">
                <Link to="app">
                <button className='bg-light appbtn'><span><i className='fa-solid fa-home'></i></span> App</button>
                </Link>
              </div>
              <div className="message text-center mx-auto">
                <Link to="message" className='link_message'>
                <span><i className='fa-solid fa-message' style={{color:"black"}}></i></span > 
                <span className='text-secondary mx-2'>Message</span>
                </Link>
              </div>
              <div className="set text-center mx-auto">
                <Link to="settings" className='link_message'>
                <span><i className='fa-solid fa-school text-secondary'></i></span> <span className='text-secondary'>Settings</span>
                </Link>
              </div>
            </div>
          </div>
        
          </div>
    </div>
    </div>
   <div className="row mt-5">
    
    <div className="col-lg-4 px-2 mb-3">
      <div className='bg-light px-2 pt-2 pb-4'>
        <h3>Platform Settings</h3>
        <p className='mt-3 text-secondary'>Acount</p>
        <form action="" className='platform'>
          <div className='my-2'>
              <input type="radio" name="" onChange={clickHandler}  /> <span>Email me when someone follows me</span>
          </div>
          <div className='mt-3'>
              <input type="radio" name=""  /> <span style={{textOverflow:"ellipsis", }}>Email me when someone answers my post</span>
          </div>
          <div className='mb-3 mt-2'>
              <input type="radio" name=""   /> <span>Email me when someone mentions me</span>
          </div>
          <p className='text-secondary'>application</p>
          <div className='mt-3'> 
              <input type="radio" name=""  /> <span style={{textOverflow:"ellipsis", }}>New launches and projects</span>
          </div>
          <div className='mt-3'>
              <input type="radio" name=""  /> <span style={{textOverflow:"ellipsis", }}>Monthly products updates</span>
          </div>
          <div className='my-3'>
              <input type="radio" name=""  /> <span style={{textOverflow:"ellipsis", }}>Subscribe to newsletter</span>
          </div>
        </form>
      </div>
    </div>
    <div className="col-lg-4 px-2 mb-3 ">
      <div className=' bg-light px-2 pb-5 pt-2 px-3'>
        <h3 className='mb-3'>Profile Information</h3>
        <p className='text-secondary  my-3'>
          {data[0].desc}
        </p>
         <h6 className='mb-3'>Full Name : <span className='text-secondary '>{data[0].fullName}</span></h6>
         <h6 className='mb-3'>Mobile : <span className='text-secondary '>{data[0].mobile}</span></h6>
         <h6 className='mb-3' >Email : <span className='text-secondary '>{data[0].email}</span></h6>
         <h6 className='mb-3'>Location : <span className='text-secondary '>{data[0].location}</span></h6>
         <h6 className='mb-4'>Social : <span className='text-secondary '>
          <Link className='ms-2' to={`/ ${data[0].facebook}`}><i className='fa-brand fa-facebook'></i></Link> 
          <Link className='mx-3' to={`/ ${data[0].twitter}`}><i className='fa-brand fa-twitter'></i></Link> 
          <Link to={`/ ${data[0].instagram}`}><i className='fa-brand fa-instagram'></i></Link> 
          
          </span></h6>
      </div>
    </div>
    <div className="col-lg-4 px-2 mb-3">
      <div className=" p-2 bg-light">
      <h3 className='my-1'>Conversations</h3>
         <div className="converstion">
        {conversation.map((item)=>(
          <div key={item.id} className='conversation'>
            <ConversationItem {...item} />
          </div>
        ))}
         </div>
      </div>
    </div>
    </div>   

  </div>
 </div>
    
    </>
  )
}
