import "./login.css"
import img from "../../assets/images/curved-images/curved14.jpg"
import { Link } from "react-router-dom"
export default function Login() {
  function submitHandler(){
    
  }
  return (
    <>
    <div className="loging_header">
      <div className="dis">
      <h1 className="text-light pt-5 text-center">
            Welcome!
        </h1>
        <p className="text-light pt-2  pb-5 text-center">
            Use these awesome forms to login or create new acount in your project for free.
        </p>
      </div>
        <div className="login ">
          <div className="bg-light login_card p-2">
            <h5 className="text-center pt-2 pb-3">Register With</h5>
            <div className="icons_in_login text-center mb-3">
                <span><i className="fa-solid fa-google"></i></span>
                <span className="mx-5">2</span>
                <span>3</span>
            </div>
            <p className="text-center my-3">
              <div className="row org">
                <div className="col-5 orl1"></div>
                <div className="col-2">or</div>
                <div className="col-5 orl2"></div>
              </div>
            </p>
            <form action="">
            <div className="name mb-3">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="email mb-3">
              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
            </div>
            <div className="password mb-3" aria-autocomplete="none">
              <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
            </div>
            <div className="px-2 mb-3">
              <input type="checkbox" name="agree" id="agree" /><span className="ps-2">i agree the </span><span className="condition"><Link to="condition">Terms and Condistions</Link></span>
            </div>
            <div className="submit mb-3">
              <button className="btn btnSubmit form-control" onClick={submitHandler}>Submit</button>
            </div>
            <div className="hadAcount text-center">
               <h6>already have an account <Link>sign in</Link></h6>
            </div>
          </form>
          </div>
        
        </div>
    </div>
    </>
  )
}
