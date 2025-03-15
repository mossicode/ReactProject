import "./profile.css"

export default function ConversationItem(props) {
  return (
   <>
        <div className="conv d-flex">
           <div>
           <img className="conv_image m-2" src={props.image} alt="" />
           </div>
            <div>
            {props.name} <br /> <span className="text-secondary">{props.desc}</span>
            </div>
          
        </div>
        <div className="reply">REPLY</div>
   </>
  )
}
