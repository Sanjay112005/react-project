import notfound from "../assets/page.jpg"
import { Link } from "react-router-dom"
export  const Pagenotfound = () => {
  return<div className="container"> 
  <img src={notfound} alt="" className="img-fluid" />
   <p className="text-center">
    <Link to="/" className="btn btn-danger">
     Goto Home Page
    </Link>
</p>
   </div>

}
